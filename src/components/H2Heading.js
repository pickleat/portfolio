import React from 'react';

const H2Heading = (props) => {
    return(
        <h2 className='text-navy lowercase font-black tracking-wider sm:tracking-widest text-2xl sm:text-3xl'>
            {props.text}
        </h2>

    )
}
export default H2Heading