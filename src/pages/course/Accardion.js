import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  IconButton,
  Typography,
} from '@mui/material'
import React from 'react'
import { FaAngleRight, FaLock, FaPlay } from 'react-icons/fa'

export default function Accardion({ num, time, open, about }) {
  return (
    <Accordion
      disabled={!open}
      sx={{
        width: '100%',
        margin: '0',
        backgroundColor: 'transparent',
        borderBottom: '1px solid gray',
        borderRadius: 'none !important',
      }}
    >
      <AccordionSummary
        expandIcon={
          <Typography className="flex items-center gap-1">
            {time}m
            <FaAngleRight />
          </Typography>
        }
        aria-controls="panel1a-content"
        id={num}
      >
        <Typography>
          <IconButton>{open ? <FaPlay /> : <FaLock />}</IconButton>
          Lesson {num}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>{about}</Typography>
      </AccordionDetails>
    </Accordion>
  )
}
