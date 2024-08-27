import Link from 'next/link'
import React from 'react'

export default async function PaiService ({}){

    return (
        <section className="container_section">
            
        <div className="section_link">
          <Link className="link_dashboard" href={"/dashboard/tarjetas"}>
            Ver tarjetas
          </Link>

        </div>
        <h4>Dinero disponible</h4>
        <h2>$ {''}</h2>
      </section>
    )
}


