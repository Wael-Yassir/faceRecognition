import React from 'react';

const Rank = ({ name, entries }) => {
    return(
        <div className>
            <div className='center white f3 pt3'>
                {`${name.toUpperCase()}, your current entry count is ...`}
            </div>
            <div className='center white f1'>
                {`#${entries}`}
            </div>
        </div>
    );
}

export default Rank;