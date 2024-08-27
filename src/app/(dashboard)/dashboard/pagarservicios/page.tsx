import SearchSection from '@/app/components/dashboard/inicio/SearchSection'
import SearchService from '@/app/components/dashboard/pagarservicios/SearchService'
import ServiceSection from '@/app/components/dashboard/pagarservicios/ServiceSection'
import React from 'react'

const page = () => {
  return (
    <div className='container_initialPage'>
      <SearchService />
      <ServiceSection />
  </div>
  )
}

export default page