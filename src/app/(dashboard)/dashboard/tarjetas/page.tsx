import ListCards from '@/app/components/dashboard/tarjetas/ListCards'
import NewCard from '@/app/components/dashboard/tarjetas/NewCard'
import React from 'react'

const page = () => {
  return (
    <div className='container_initialPage'>
      <NewCard />
      <ListCards />
  </div>
  )
}

export default page