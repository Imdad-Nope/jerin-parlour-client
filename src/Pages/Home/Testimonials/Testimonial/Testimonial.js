import React from 'react';

const Testimonial = ({ carousel }) => {
    const { img } = carousel;
    return (
        <div>
            <img src={img} alt="" />
        </div>
    );
};

export default Testimonial;