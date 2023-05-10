import React from 'react'
import Image from 'next/image'

function header() {
  return (
    <div>
        <div className="relative">
            <Image 
            src={'https://ik.imagekit.io/pgvf1rv1sw/reddit-icon-reddit-logo-transparent-115628752708pqmsy4kgm.png?updatedAt=1683706535549'}
            layout="fill"
            alt='reddit logo'
             />
        </div>
      
    </div>
  )
}

export default header
