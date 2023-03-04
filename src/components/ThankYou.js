import React from 'react';
import thankYouImg from '../images/illustration-thank-you.svg'
const ThankYou = (props) => {

return (
<div className='thanku'>
<img className='thanku__img' src={thankYouImg} alt="Ilustracja Dziękujemy" />
<p className='thanku__state'>You selected {props.rating} of 5.</p>
<h2 className='thanku__title'>Thank you!</h2>
<p className='thanku__description'>We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</p>
</div>
)
}

export default ThankYou