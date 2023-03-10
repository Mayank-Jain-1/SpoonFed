import React from 'react'
import NavHeader from '../components/NavHeader'
import {useSearchParams} from 'react-router-dom'
import FilterForm from '../components/Filter/FilterForm';

const Filter = () => {
  const [params] = useSearchParams(); 

  return (
    <page>
      <NavHeader />
      <pagebody className="container px-md-auto">
        <h1 className='fw-bold text-primary  my-3 mx-4 fs-md-1'>All Places</h1>
        <div className="d-flex">
        <FilterForm />
        </div>
      </pagebody>
    </page>
  )
}

export default Filter