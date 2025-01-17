import React from 'react'

const Button = ({ buttonText, reqType, setReqType}) => {
  return (
    <button
      className='main-page-button'
      type='button'
      onClick={()=> setReqType(buttonText)}
    >
       {buttonText} 
    </button>
    
  )
}

export default Button