import '../button.css'
const Button = (props) => {
    const { onClick, onMouseEnter, onMouseLeave, text, className, borderColor, icon, disabled } = props;
    
    return(
        <>
          <div onClick={() => {if(!disabled) {onClick();}}} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} className={`${className}${disabled ? ` bg-gray-40 hover:bg-gray-40 cursor-not-allowed` : ' cursor-pointer'} select-none border border-${borderColor} rounded-md p-2`}>{text}{icon}</div>
        </>
       );
}
export default Button;