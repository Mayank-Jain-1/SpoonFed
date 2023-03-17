import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import LoginBtn from "./NavHeader/LoginBtn";
import LogoutBtn from "./NavHeader/LogoutBtn";

export const Navbar = () => {
   const { user, isAuthenticated, isLoading, loginWithPopup } = useAuth0();

   return (
      <nav className="navbar row w-100 position-absolute top-0 d-none d-md-flex justify-content-end px-5 mt-3 z-20">
         <div className="d-flex align-items-center w-auto p-0 justify-content-end">
            {!isAuthenticated && !isLoading ? (
               <>
                  <button
                     onClick={() => loginWithPopup()}
                     id="login"
                     className="bg-transparent border-0 col-1 p-3 text-decoration-none text-white mx-4 d-flex justify-content-center text-danger:hover"
                     href="https://google.com"
                  >
                     Login
                  </button>
                  <button
                     onClick={() => loginWithPopup()}
                     id="register"
                     className=" bg-transparent col-2 p-3 text-decoration-none text-white border border-white border-2 rounded navlink d-flex justify-content-center"
                     href="https://google.com"
                  >
                     Create an account
                  </button>
               </>
            ) : isLoading ? (
               <p className="text-white fs-18 mx-3 mb-0">
                  Waiting for Authorization...
               </p>
            ) : (
               <>
                  <p className="text-white mb-0 me-4 fs-6">{user.name}</p>
                  <LogoutBtn className='bg-transparent'/>
               </>
            )}
         </div>
      </nav>
   );
};

export default Navbar;
