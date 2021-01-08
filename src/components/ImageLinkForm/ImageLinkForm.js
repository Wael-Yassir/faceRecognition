import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
    return(
        <div>
            <p className='pt3 f3 center'>
                {'This Magic Brain will detect faces in your pictures. Git it a try.'}
            </p>
            <div className="">
                 <div className='center form pa4 br3 shadow-5'>
                    <input id='imgLink' className ='w-70 f4 pa2 br2' type='text' 
                        onChange={onInputChange}
                    />
                    <button 
                        id='detect'
                        className='w-30 grow f4 ph3 link pv2 white br2' 
                        onClick={onButtonSubmit}
                    >Detect</button>
                </div>
            </div>
        </div>
    );
}

export default ImageLinkForm;
