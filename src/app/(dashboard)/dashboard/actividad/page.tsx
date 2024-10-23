import ActivityShowFilter from '@/app/components/dashboard/actividad/ActivityShowFilter'
import FilterSection from '@/app/components/dashboard/actividad/FilterSection'
import ShowActivitySection from '@/app/components/dashboard/actividad/ShowActivitySection'
import SearchSection from '@/app/components/dashboard/inicio/SearchSection'
import React from 'react'

const page = ({
  searchParams
}: { searchParams: { [key: string]: string } }) => {
  const filter = searchParams.filter

  return (
    <div className="container_initialPage">
      <div className="container_filter">
        <SearchSection params={''} />
        <FilterSection />
      </div>
      <ActivityShowFilter filter={filter} />
    </div>
  )
}

export default page