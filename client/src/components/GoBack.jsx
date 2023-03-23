import { useNavigate } from "react-router-dom";
import {IoIosArrowRoundBack} from 'react-icons/io'
const GoBack = ({className, text}) => {
   const navigate = useNavigate();
   return <button onClick={() => navigate(-1)} className={`${className} text-primary border-0 bg-transparent fs-5 fw-semibold  mx-2 mx-md-0 d-flex align-items-center gap-2 gap-md-3`}>
      <IoIosArrowRoundBack className="fs-2 fs-md-1"/>
      {text}
   </button>;
};

export default GoBack;
