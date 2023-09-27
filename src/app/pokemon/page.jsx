import PokeLoader from '@/components/shared/PokeLoader'
import React from 'react'

const Pokemon = () => {
  return (
    <div className='flex items-center justify-center text-black'>
        <div className={'absolute top-1/2'}>
        <PokeLoader/>
        </div>
    </div>
  )
}

export default Pokemon