import React from 'react'

const SearchItem = (props) => {
  return (
    <a href='' className='col bg-white text-decoration-none'>
      <div className="searchItem ">
        <img className='' src={props.imgURL} alt="img" />
        <div className='px-3 mt-3'>
          <h5 className='cl-db fw-bold'>{props.name}</h5>
          <p className='cl-dg'>{props.desc}</p>
        </div>
      </div>
    </a>
  )
}


SearchItem.defaultProps = {
  imgURL:'https://static.toiimg.com/photo/msid-87930581/87930581.jpg',
  name:'Lunch',
  desc:'Start your day with exclusive breakfast options'
}

export default SearchItem