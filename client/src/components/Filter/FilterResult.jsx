import React from 'react'

const FilterResult = ({restaurant}) => {
  return (
    <div className="product shadow-md bg-white mb-36 w-100 px-35 py-25">
    <div className="productHead d-flex pb-30 border-2 border-bottom align-items-center">
      
      <img src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" className='object-cover rounded-4 square-120 me-3 flex-shrink-0'/>
      <div className="placeDesc ms-4">
        <h2 className="text-primary fw-bold">{restaurant &&  restaurant.name}</h2>
        <h6 className="text-primary">Fort</h6>
        <p className="text-primary mb-0 fw-light">
          Shop 1, Plot D, Samruddhi Complex, Chincholi …
        </p>
      </div>
    </div>

    <div className="productFoot mt-4 d-flex">
      <div className="featureLabels text-secondary me-2 pe-1">
        <p className='mb-2'>CUISINES:</p>
        <p className='mb-0'>COST FOR TWO:</p>
      </div>
      <div className="features text-primary ms-4">
        <p className='mb-2'>Bakery</p>
        <p className='mb-0'>₹700</p>
      </div>
    </div>
  </div>
  )
}

export default FilterResult