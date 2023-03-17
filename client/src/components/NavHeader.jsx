import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import { useAuth0 } from "@auth0/auth0-react";
import LoginBtn from "./NavHeader/LoginBtn";
import RegisterBtn from "./NavHeader/RegisterBtn";
import LogoutBtn from "./NavHeader/LogoutBtn";

const NavHeader = () => {
   const { user, isAuthenticated, isLoading } = useAuth0();

   return (
      <div className="bg-danger restNavHeader ">
         <div className="container-fluid max-w-xl px-md-4 bg-danger restNavHeader d-flex px-4 align-items-center justify-content-between ">
            <Logo text="Sf!" size={26} className="d-none d-md-block" />
            <Logo text="Sf!" size={20} className="d-md-none" />
            <div className="d-flex justify-content-end align-items-center">
               {!isAuthenticated && !isLoading ? (
                  <>
                     <LoginBtn />
                     <RegisterBtn />
                  </>
               ) : isLoading ? (
                  <p className="text-white fs-18 mx-3 mb-0">Waiting for Authorization...</p>
                  
               ) : (
                  <>
                     <p className="text-white mb-0 me-4 fs-6">{user.name}</p>
                     <LogoutBtn />
                  </>
               )}
            </div>
         </div>
      </div>
   );
};

export default NavHeader;
