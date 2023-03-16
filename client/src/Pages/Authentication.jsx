import React from 'react'
import NavHeader from '../components/NavHeader'
import GoogleLogin from 'react-google-login'

const Authentication = () => {
  const handleLogin = (googleData) => {
    console.log(googleData);
  }
  const handleFailure = (googleData) => {
    console.log(googleData);
  }
  return (
    <>
      <NavHeader />
      <GoogleLogin
        clientId = {process.env.REACT_APP_GOOGLE_CLIENT_ID}
        buttonText= "Log in with Google"
        cookiePolicy='single_host_origin'
        onSuccess={handleLogin}
        onFailure={handleFailure}
        >
      </GoogleLogin>
    </>
  )
}

export default Authentication