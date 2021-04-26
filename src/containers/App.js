import React, {Component} from 'react';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import Navigation from '../components/Navigation/Navigation';
import Logo from '../components/Logo/Logo';
import ImageLinkForm from '../components/ImageLinkForm/ImageLinkForm';
import Rank from '../components/Rank/Rank';
import FaceRecognition from '../components/FaceRecognition/FaceRecognition';
import SignIn from '../components/SignIn/SignIn';
import Register from '../components/Register/Register';
import './App.css';

const app = new Clarifai.App({
  apiKey: '00b066ae3ef849029ca6a781a5a8f07b'
});

const particlesOptions = {
  particles: {
      number: {
        value: 90,
        density: {
          enable: true,
          value_area: 800
        }
      }
  }
}

class App extends Component {

  constructor() {
    super();

    this.state = {
      input: '',
      imageUrl: '',
      isValidInput: true,
      boxes: [],
      route: 'signIn',
      isSignedIn: false,
      user: {
        id: '',
        name: '',
        email: '',
        entries: 0,
        joined: ''
      }
    }
  }

  loadUser = (data) => {
    this.setState({ user: {
        id: data.id,
        name: data.name,
        email: data.email,
        entries: data.entries,
        joined: data.joined,
      }
    })
  }

  onRouteChange = (route) => {
    if (route === 'home') {
      this.setState({ isSignedIn: true });
    } else if (route === 'signIn') {
      this.setState({ isSignedIn: false });
    }

    this.setState({ route: route });
  }

  onInputChange = (event) => {
    this.setState({ input: event.target.value })
  }

  onPictureSubmit = () => {
    this.setState({ imageUrl: this.state.input, isValidInput: true })

    app.models.predict(Clarifai.FACE_DETECT_MODEL,
      this.state.input, {video: false})
    .then(res => {
      if (res) {
        fetch('http://localhost:5000/image', {
          method: 'put',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            id: this.state.user.id
          })
        })
        .then(res => res.json())
        .then(res_entries => {
          this.setState(
            Object.assign(this.state.user, {entries: res_entries} )
          );
        })
      }

      this.displayFaceBox(this.claculateFacesLocation(res))
    })
    .catch(() => this.setState({ isValidInput: false }));
  }

  claculateFacesLocation = (resp) => {
    const clarifaiFaceRegions = resp.outputs[0].data.regions;
    const image = document.getElementById('inputImage');
    const width = image.width;
    const height = image.height;

    const boxes = clarifaiFaceRegions.map(region => {
      const box = region.region_info.bounding_box;
      return this.getFaceBox(box, width, height);
    });

    return boxes;
  }

  getFaceBox = (box, imgWidth, imgHeight) => {
    return ({
      leftCol: box.left_col * imgWidth,
      rightCol: imgWidth - (box.right_col * imgWidth),
      topRow: box.top_row * imgHeight,
      botRow: imgHeight - (box.bottom_row * imgHeight),
    });
  }

  displayFaceBox = (boxes) => {
    // this.setState({ boxes }) ES6 features instead of boxes: boxes
    this.setState({ boxes: boxes })
  }



  render() {
    const { isSignedIn, imageUrl, route, boxes, isValidInput } = this.state;
    return (
      <div>
        <Particles className='particles' params={particlesOptions} />
        <Navigation onRouteChange={this.onRouteChange} isSignedIn={isSignedIn}/>
        { route === 'home'
          ? <div>
              <Logo/>
              <Rank name={this.state.user.name} entries={this.state.user.entries}/>
              <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onPictureSubmit}/>
              <FaceRecognition boxes={boxes} imageUrl={imageUrl} isValidInput={isValidInput}/>
            </div>
          : (
              route === 'signIn'
              ? <SignIn loadUser={this.loadUser} onRouteChange={this.onRouteChange} />
              : <Register loadUser = {this.loadUser} onRouteChange={this.onRouteChange} />
          )
        }
      </div>
    );
  }
}

export default App;
