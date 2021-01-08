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
    }
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

  onButtonSubmit = () => {
    this.setState({ imageUrl: this.state.input, isValidInput: true })

    app.models.predict(Clarifai.FACE_DETECT_MODEL, 
      this.state.input, {video: false})
    .then(resp => this.displayFaceBox(this.claculateFacesLocation(resp)))
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
              <Rank/>
              <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit}/>
              <FaceRecognition boxes={boxes} imageUrl={imageUrl} isValidInput={isValidInput}/> 
            </div>
          : (
              route === 'signIn'
              ? <SignIn onRouteChange={this.onRouteChange} />
              : <Register onRouteChange={this.onRouteChange} /> 
          )
        }
      </div>
    );
  }
}

export default App;
