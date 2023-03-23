import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const QuickSearchItem = ({imgURL, desc,cuisine}) => {

  const city = useSelector(store => store.searchInputs.city);
  
  return (
    <Link to={`/filter?city=${city}&cuisine=${cuisine}`} className='col bg-white text-decoration-none'>
      <div className="searchItem ">
        <img className='' src={imgURL} alt="img" />
        <div className='px-3 mt-3'>
          <h5 className='text-primary fw-bold'>{cuisine}</h5>
          <p className='text-secondary'>{desc}</p>
        </div>
      </div>
    </Link>
  )
}


QuickSearchItem.defaultProps = {
  imgURL:'https://static.toiimg.com/photo/msid-87930581/87930581.jpg',
  name:'Lunch',
  desc:'Start your day with exclusive breakfast options'
}

export default QuickSearchItem