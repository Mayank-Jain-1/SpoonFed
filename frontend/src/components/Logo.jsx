import React from "react";

const Logo = ({className, text, size ,multiplier = 2}) => {

  const style = {
    width: size *multiplier,
    height: size *multiplier,
    fontSize: size,
  };

  return (
    <div style={style} className={`${className} rounded-circle position-relative bg-white`} >
      <p
        className="text-danger  position-absolute top-50 start-50 translate-middle fw-semibold"
      >
        {text}
      </p>
    </div>
  );
};

export default Logo;
