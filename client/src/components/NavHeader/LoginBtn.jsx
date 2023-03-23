import { useAuth0 } from "@auth0/auth0-react";

const LoginBtn = () => {

   const {loginWithPopup} = useAuth0();

   return (
      <button
         onClick={() => loginWithPopup()}
         className="p-1 p-md-3 text-white mx-3 mx-md-4 d-flex justify-content-center fs-14 fs-md-6 border-0 bg-transparent link-secondary"
      >
         Login
      </button>
   );
};

export default LoginBtn;
