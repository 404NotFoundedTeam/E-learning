import { IconButton } from '@mui/material'
import React from 'react'
import { FaLock, FaPlay } from 'react-icons/fa'

export default function Lessons({ lessons }) {
  const arr = lessons.sort((a, b) => {
    return b.open - a.open
  })

  return (
    <section className="px-5 py-4 text-auto container">
      <div className="d-flex">
        <div className="w-7/12">
          <div>
            <h2 className="bold font-bold text-3xl font-size-22 my-6">
              Lessons
            </h2>
            <ul>
              {arr.map((item, i) => (
                <li
                  className="px-3 py-4 flex items-center justify-between"
                  key={item.id}
                >
                  <div className="flex items-center gap-1">
                    <IconButton>
                      {item.open ? <FaPlay /> : <FaLock />}
                    </IconButton>
                    <p>Lesson {i + 1}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="w-5/12"></div>
      </div>
    </section>
  )
}
