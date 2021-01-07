import React from 'react';
import './FaceRecognition.css'

const FaceRecognition = ({ boxes, imageUrl }) => {
    return(
        <div className='center pa4 br3'>
            <div className='absolute'>
                <img id='inputImage' src={ imageUrl } alt='' width='600px' height='auto' />
                {
                    boxes.map(box => {
                        return(
                            <div className='bounding-box' style={{ top:box.topRow, 
                                 bottom: box.botRow, left: box.leftCol, right: box.rightCol }}>
                                 {/* <div className='bounding-box_concept'>
                                     <span>face</span>
                                 </div> */}
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
}
    
export default FaceRecognition;