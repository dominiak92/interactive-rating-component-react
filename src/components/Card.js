import React, { useState } from 'react';
import Rating from './Rating';
import ThankYou from './ThankYou';
const Card = () => {
const [visibility, setVisibility] = useState(true)
const [rating, setValue] = useState(0)

    const handleVisibilityValue = (value) => {
        rating > 0 ? setVisibility(value) : console.log(visibility)
    }

    const handleButtonValue = (value) => {
        setValue(value)
        console.log(value)
    }

    console.log(rating)
return (
<div className='card'>
{visibility ? <Rating onButtonValueChange={handleButtonValue} onChildVisibilityChange={handleVisibilityValue}/> : <ThankYou rating={rating}/>}
</div>

)
}

export default Card