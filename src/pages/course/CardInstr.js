import * as React from 'react'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { FaAddressCard, FaStar, FaUser, FaUsers } from 'react-icons/fa'

export default function CardInstr() {
  return (
    <>
      <div className="flex lg:w-6/12 md:w-8/12 sm:w-11/12    p-10">
        <div className="border-2 rounded-xl w-full flex flex-wrap px-4 py-8">
          {' '}
          <div className="w-1/3">
            <div className="flex h-24 w-24 rounded-full bg-gray-200 color-gray-600 text-4xl text-gray-600 justify-center items-center ">
              <FaUser />
            </div>
          </div>
          <div className="w-2/3">
            <div className="w-full">
              <div className="flex flex-col gap-2.5 text-lg">
                <h2 className="font-normal text-xl">Jayvion Simon</h2>
                <p className="text-gray-500 mt-1">UX Designer</p>

                <p className="flex">
                  <FaStar className="star mr-1.5" />
                  <span>3.7</span>
                  <span className="text-gray-500 font-medium text-[14px] pr-3 border-r-2">
                    (3.46k reviews)
                  </span>
                </p>
                <p className="flex items-center gap-1 text-gray-500">
                  <FaUsers /> <span>18k Lessons</span>
                </p>
                <p className="flex items-center gap-1 text-gray-500">
                  <FaAddressCard /> <span>18k Lessons</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
