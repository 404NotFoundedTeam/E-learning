import React from 'react'

export default function St({children, classNames}) {
  return (
    <p className={"text-sm text-slate-500 " + classNames} >{children}</p>
  )
}
