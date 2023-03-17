import { useAuth0 } from "@auth0/auth0-react";

const RegisterBtn = () => {
   const { loginWithPopup } = useAuth0();

   return (
      <button
         onClick={() => loginWithPopup()}
         className=" py-1 py-md-2 px-2 px-md-3 px-md-4 text-decoration-none text-white border border-white border-2 rounded d-inline-flex justify-content-center fs-14 fs-md-6 hover-white-red bg-danger"
      >
         Create an account
      </button>
   );
};

export default RegisterBtn;
