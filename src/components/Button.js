import React from 'react';
import '../button.css'
// import BackgroundImage from '../assets/button.svg';
const Button = (props) => {
    const { onClick, onMouseEnter, onMouseLeave, text, className, borderColor, disabled, light } = props;
    
    return(
        <>
          <div onClick={() => {if(!disabled) {onClick();}}} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} className={`${className}${disabled ? ` bg-gray-40 hover:bg-gray-40 cursor-not-allowed` : ' cursor-pointer'} select-none border border-${borderColor} rounded-md p-2`}>{text}</div>
          {/* <div className="h-auto w-auto">
            <button onClick={onClick} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} className={`border hover:border-white border-gray-70 rounded-tr-md rounded-bl-md rounded-tl-3xl rounded-br-3xl px-8 text-white py-2 ${className}`}>{text}</button>
          </div> */}
          {/* <div class='octagonWrap'>
            <div class='octagon'></div>
          </div> */}
        </>
       );
}
export default Button;