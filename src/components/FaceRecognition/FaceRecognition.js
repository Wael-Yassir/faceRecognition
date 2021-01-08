import React from 'react';
import './FaceRecognition.css'

const FaceRecognition = ({ boxes, imageUrl, isValidInput }) => {
    if (isValidInput) {
        return(
            <div className='center pa4 br3'>
                <div className='absolute'>
                    <img id='inputImage' src={ imageUrl } alt='' width='600px' height='auto' />
                    {
                        boxes.map(box => {
                            return(
                                <div className='bounding-box' style={{ top:box.topRow, 
                                    bottom: box.botRow, left: box.leftCol, right: box.rightCol }}>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        );
    } else {
        return(
            <div className='f2 tc pa4 fw6'>
                {'Enter a valid Url!'}
            </div>
        );
    }

}
    
export default FaceRecognition;