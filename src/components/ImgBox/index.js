import React from 'react'

export default function ImgBox({classNames = "", ...props}) {
  return (
    <div className={" imgBox w-full h-full rounded-lg overflow-hidden" + classNames}>
        <img className='w-full h-full object-cover ' {...props}/>
    </div>
  )
}
