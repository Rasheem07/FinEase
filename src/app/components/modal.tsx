import React, { Children, useContext } from 'react'
import { AppContext } from '../contexts/cardContext'

export default function Modal({children}: {children: React.ReactNode}) {
    const {isModal} = useContext(AppContext);

  return (
    <div className={` ${isModal? 'block' : 'hidden'} min-h-[250px] min-w-[350px] bg-white rounded-md text-secondary-color absolute left-[45%] top-1/4 z-50 shadow-mix1`}>
      {children}
    </div>
  )
}
