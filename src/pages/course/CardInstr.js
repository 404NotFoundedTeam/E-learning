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
      <div className="flex w-6/12">
        <div className="w-1/3">
          <div className="flex p">
            <FaUser />
          </div>
        </div>
        <div className="w-2/3">
          <div className="w-full">
            <div>
              <h2>Jayvion Simon</h2>
              <p>UX Designer</p>

              <p>
                <FaStar className="star mr-1.5" />
                <span className="text-gray-500 font-medium text-[14px] pr-3 border-r-2">
                  (3.46k reviews)
                </span>
              </p>
              <p>
                <FaUsers /> <span>18k Lessons</span>
              </p>
              <p>
                <FaAddressCard /> <span>18k Lessons</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
