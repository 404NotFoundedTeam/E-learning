import React from 'react'
import Comments from './Comments'
import Form from './Form'
import CustomIcons from './Pagination'
import Score from './Score'

export default function Reviews() {
  return (
    <div>
      <div className="flex">
        <div className="w-8/12 flex flex-col gap-5">
          <Comments />
          <Comments />
          <Comments />
          <CustomIcons />
        </div>
        <div className="w-4/12">
          <Score />
          <Form />
        </div>
      </div>
    </div>
  )
}
