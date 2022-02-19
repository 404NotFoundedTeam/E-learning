import React from 'react'
import Accardion from './Accardion'
import CardMain from './CardMain'

export default function Lessons({ lessons }) {
  const arr = lessons.sort((a, b) => {
    return b.open - a.open
  })

  return (
    <section className="px-5 py-4 text-auto container">
      <div className="flex gap-8">
        <div className="w-7/12">
          <div>
            <h2 className="bold font-bold text-3xl font-size-22 my-6">
              Lessons
            </h2>
            <ul>
              {arr.map((item, i) => (
                <li className="rounded-none" key={item.id}>
                  <Accardion
                    num={i + 1}
                    time={item.time}
                    open={item.open}
                    about={item.about}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="w-5/12">
          <div>
            <CardMain />
          </div>
        </div>
      </div>
    </section>
  )
}
