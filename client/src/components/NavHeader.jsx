import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import { useAuth0 } from "@auth0/auth0-react";

const NavHeader = () => {
   const { loginWithRedirect, isAuthenticated } = useAuth0();

   return (
      <div className="bg-danger restNavHeader ">
         <div className="container-fluid max-w-xl px-md-4 bg-danger restNavHeader d-flex px-4 align-items-center justify-content-between ">
            <Logo text="Sf!" size={26} className="d-none d-md-block" />
            <Logo text="Sf!" size={20} className="d-md-none" />
            <div className="d-flex justify-content-end align-items-center">
               {!isAuthenticated && (
                  <>
                     <button
                        onClick={() => loginWithRedirect()}
                        className="p-1 p-md-3 text-white mx-3 mx-md-4 d-flex justify-content-center fs-14 fs-md-6 border-0 bg-transparent link-secondary"
                     >
                        Login
                     </button>
                     <button
                        onClick={() => loginWithRedirect()}
                        className=" py-1 py-md-2 px-2 px-md-3 px-md-4 text-decoration-none text-white border border-white border-2 rounded d-inline-flex justify-content-center fs-14 fs-md-6 hover-white-red bg-danger"
                     >
                        Create an account
                     </button>
                  </>
               )}
            </div>
         </div>
      </div>
   );
};

export default NavHeader;
