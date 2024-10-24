import FilterSection from '@/app/components/dashboard/actividad/FilterSection';
import ShowActivitySection from '@/app/components/dashboard/actividad/ShowActivitySection';
import SearchSection from '@/app/components/dashboard/inicio/SearchSection';
import React from 'react'

const ActividadId = ({
    params,
    searchParams
}: {
    params: { actividadId: string },
    searchParams?: { [key: string]: string | undefined }
}) => {
    return (
        <div className="container_initialPage">
            <div className="container_filter">
                <SearchSection params={params.actividadId} />
                <FilterSection />
            </div>
            <ShowActivitySection params={params.actividadId} filter={searchParams ? searchParams.filter : undefined} />
        </div>
    )
}

export default ActividadId