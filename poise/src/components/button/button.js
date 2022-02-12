import React from 'react';
import './button.css'

function Button({lable}){
    return <div data-testid="Button" className='button-style'>{lable}</div>
}

export default Button;