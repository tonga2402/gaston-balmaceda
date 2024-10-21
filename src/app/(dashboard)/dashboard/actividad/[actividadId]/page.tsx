import FilterSection from '@/app/components/dashboard/actividad/FilterSection';
import ShowActivitySection from '@/app/components/dashboard/actividad/ShowActivitySection';
import SearchSection from '@/app/components/dashboard/inicio/SearchSection';
import React from 'react'

const ActividadId = ({
    params,

}: {
    params: { actividadId: string };

}) => {
    return (
        <div className="container_initialPage">
            <div className="container_filter">
                <SearchSection params={params.actividadId} />
                <FilterSection />
            </div>
            <ShowActivitySection params={params.actividadId}  />
        </div>
    )
}

export default ActividadId