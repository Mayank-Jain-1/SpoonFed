import React from 'react'

const QuickSearchItem = ({imgURL, name, desc}) => {

  return (
    <a href='https://google.com' className='col bg-white text-decoration-none'>
      <div className="searchItem ">
        <img className='' src={imgURL} alt="img" />
        <div className='px-3 mt-3'>
          <h5 className='text-primary fw-bold'>{name}</h5>
          <p className='text-secondary'>{desc}</p>
        </div>
      </div>
    </a>
  )
}


QuickSearchItem.defaultProps = {
  imgURL:'https://static.toiimg.com/photo/msid-87930581/87930581.jpg',
  name:'Lunch',
  desc:'Start your day with exclusive breakfast options'
}

export default QuickSearchItem