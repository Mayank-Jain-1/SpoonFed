import React from 'react'

const PageinationButton = ({placeholder,onClick ,className,disabled }) => {
  return (
    <button disabled={disabled} className={`${className} square-36 d-flex justify-content-center align-items-center border border-secondary fs-5 mx-1 rounded-3`} onClick={onClick}>
      {placeholder}
    </button>
  )
}

export default PageinationButton