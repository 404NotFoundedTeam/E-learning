import React from 'react'
import Comments from './Comments'
import Form from './Form'
import CustomIcons from './Pagination'
import Score from './Score'

export default function Reviews() {
  return (
    <div>
      <div className="flex flex-wrap">
        <div className="lg:w-8/12 md:w-full sm:w-full flex flex-col gap-5">
          <Comments />
          <Comments />
          <Comments />
          <CustomIcons />
        </div>
        <div className="lg:w-4/12 md:w-full sm:w-full">
          <Score />
        </div>
      </div>
    </div>
  )
}
