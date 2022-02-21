import { Box, Paper } from '@mui/material'
import React from 'react'
import CardInstr from './CardInstr'

export default function Instructors() {
  return (
    <div>
      <h1 className="text-3xl text-extrabold my-8 border-t-2">
        Instructors (5)
      </h1>

      <div className="flex ">
        <div sx={{ display: 'flex' }} className="w-8/12 flex flex-wrap ">
          <CardInstr />
          <CardInstr />
          <CardInstr />
          <CardInstr />
          <CardInstr />
        </div>
      </div>
    </div>
  )
}
