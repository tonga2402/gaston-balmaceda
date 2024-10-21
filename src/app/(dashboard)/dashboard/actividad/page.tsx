import FilterSection from '@/app/components/dashboard/actividad/FilterSection'
import ShowActivitySection from '@/app/components/dashboard/actividad/ShowActivitySection'
import SearchSection from '@/app/components/dashboard/inicio/SearchSection'
import React from 'react'

const page = () => {
  return (
    <div className="container_initialPage">
    <div className="container_filter">
        <SearchSection params={''} />
        <FilterSection />
    </div>
    <ShowActivitySection params={''}  />
</div>
  )
}

export default page