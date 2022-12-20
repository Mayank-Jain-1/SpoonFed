import React from 'react'

export const Navbar = () => {
  return (
    <nav className='navbar row w-100 position-fixed d-none d-md-flex justify-content-end px-5 mt-3 '>
      <a id='login' className='col-1 p-3 text-decoration-none text-white mx-4 d-flex justify-content-center' href="https://google.com">Login</a>
      <a id='register' className='col-2 p-3 text-decoration-none text-white border border-white border-2 rounded navlink d-flex justify-content-center' href="https://google.com">Create an account</a>
    </nav>
  )
}

export default Navbar