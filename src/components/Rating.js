import React, { useState } from 'react';
import Logo from './Logo';
import RatingButtons from './RatingButtons';
const Rating = (props) => {
const [componentVisible, setComponentVisible] = useState(false);

const toggleComponent = () => {
setComponentVisible(!componentVisible)
props.onChildVisibilityChange(componentVisible)
}

const handleChildValue = (value) => {
    props.onButtonValueChange(value)
}


return (
<div className='card__rating'>
<Logo />
<h2 className='card__title'>How did we do?</h2>
<p className='card__description'>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
<RatingButtons onChildValueChange={handleChildValue} />
<button onClick={toggleComponent} className='card__submitButton'>
SUBMIT
</button>
</div>

)
}

export default Rating