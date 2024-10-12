import React from 'react'
import { Link } from 'react-router-dom'

const Welcome = () => {
  return (
    <>
    <div className='WelcomeDiv'>
      <h1>Wellcome to all, who wants to enjoy reading our Articles</h1>
    </div>
    <hr/>
     <div className='getReady'>
     <h1>get ready.. 
      <Link className='getRegister' to='/register'>Register</Link>
       
       and start reading</h1>
   </div>
    </>
  )
}

export default Welcome