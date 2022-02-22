import { Button, IconButton } from '@mui/material'
import React from 'react'
import {
  FaApple,
  FaFacebook,
  FaGooglePlay,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import MainButton from '../Button'
import FooterWrapper from './Footerwrapper'

export default function Footer() {
  return (
    <FooterWrapper>
      <>
        <div className="home--header   items-center py-4 my-20 gap-12 container mx-auto">
          <div className="flex flex-wrap">
            <div className="lg:w-4/12 md:w-8/12 sm:w-full">
              <div>
                <Link to="/" className="text-2xl font-bold min-w-fit">
                  E-learning
                </Link>
                <p className="text-gray-500">
                  The starting point for your next project based on
                  easy-to-customize Material-UI © helps you build apps faster
                  and better.
                </p>
                <p className="text-xl mt-14 font-bold min-w-fit">Social</p>
                <div>
                  <IconButton aria-label="delete" size="medium">
                    <FaFacebook
                      fontSize="inherit"
                      className="text-orange-600"
                    />
                  </IconButton>
                  <IconButton aria-label="delete" size="medium">
                    <FaInstagram
                      fontSize="inherit"
                      className="text-orange-600"
                    />
                  </IconButton>
                  <IconButton aria-label="delete" size="medium">
                    <FaLinkedin
                      fontSize="inherit"
                      className="text-orange-600"
                    />
                  </IconButton>
                  <IconButton aria-label="delete" size="medium">
                    <FaTwitter fontSize="inherit" className="text-orange-600" />
                  </IconButton>
                </div>
                <p className="text-xl mt-14 font-bold mb-2 min-w-fit">
                  Documentation
                </p>
                <div className="text-gray-500 flex gap-1.5  flex-col">
                  <a href="https://zone-ui.vercel.app/e-learning/courses/e99f09a7-dd88-49d5-b1c8-1daf80c2d7b1/#">
                    Documentation
                  </a>
                  <a href="https://zone-ui.vercel.app/e-learning/courses/e99f09a7-dd88-49d5-b1c8-1daf80c2d7b1/#">
                    Changelog
                  </a>
                  <a href="https://zone-ui.vercel.app/e-learning/courses/e99f09a7-dd88-49d5-b1c8-1daf80c2d7b1/#">
                    Contributing
                  </a>
                </div>
                <p className="text-xl mt-14 font-bold min-w-fit">
                  Let’s stay in touch
                </p>
                <p className="text-gray-500">
                  Ubscribe to our newsletter to receive latest articles to your
                  inbox weekly.
                </p>
                <div className="mt-7 flex w-full flex-wrap overflow-hidden bg-white rounded-lg p-1.5">
                  <input
                    placeholder="Enter your email"
                    className="flex-1 w-full text-sm bg-transparent px-2 py-2 outline-none border-0 h-full"
                  />
                  <MainButton variant={'contained'}>Register</MainButton>
                </div>
                <p className="text-xl mt-14 font-bold min-w-fit">Apps</p>
                <div className="flex gap-3">
                  <Button
                    sx={{
                      background: 'black',
                      borderRadius: '9px',
                      '&hover': {
                        background: 'red',
                      },
                    }}
                    startIcon={
                      <FaApple
                        className="text-white text-2xl"
                        sx={{ fontSize: '20px' }}
                      />
                    }
                  >
                    <span className="flex flex-col">
                      <span className="text-gray-400">Download On The</span>
                      <span className="text-white">App Store</span>
                    </span>
                  </Button>
                  <Button
                    sx={{ background: 'black', borderRadius: '9px' }}
                    startIcon={<FaGooglePlay className="text-white" />}
                  >
                    <span className="flex flex-col">
                      <span className="text-gray-400">Download On The</span>
                      <span className="text-white">App Store</span>
                    </span>
                  </Button>
                </div>
              </div>
            </div>
            <div className="lg:w-8/12 md:">
              <div className="flex flex-wrap p-10 items-center">
                <ul className="w-4/12 mb-10 flex flex-col gap-1.5">
                  <p className="text-xl mt-14 font-bold min-w-fit">Marketing</p>
                  <li className="text-gray-500">
                    <a href="#">Landing</a>
                  </li>
                  <li className="text-gray-500">
                    <a href="#">Landing</a>
                  </li>
                  <li className="text-gray-500">
                    <a href="#">Landing</a>
                  </li>
                  <li className="text-gray-500">
                    <a href="#">Landing</a>
                  </li>
                  <li className="text-gray-500">
                    <a href="#">Landing</a>
                  </li>
                  <li className="text-gray-500">
                    <a href="#">Landing</a>
                  </li>
                  <li className="text-gray-500">
                    <a href="#">Landing</a>
                  </li>
                  <li className="text-gray-500">
                    <a href="#">Landing</a>
                  </li>
                </ul>
                <ul className="w-4/12 mb-10 flex flex-col gap-1.5">
                  <p className="text-xl mt-14 font-bold min-w-fit">Marketing</p>
                  <li className="text-gray-500">
                    <a href="#">Landing</a>
                  </li>
                  <li className="text-gray-500">
                    <a href="#">Landing</a>
                  </li>
                  <li className="text-gray-500">
                    <a href="#">Landing</a>
                  </li>
                  <li className="text-gray-500">
                    <a href="#">Landing</a>
                  </li>
                  <li className="text-gray-500">
                    <a href="#">Landing</a>
                  </li>
                  <li className="text-gray-500">
                    <a href="#">Landing</a>
                  </li>
                  <li className="text-gray-500">
                    <a href="#">Landing</a>
                  </li>
                  <li className="text-gray-500">
                    <a href="#">Landing</a>
                  </li>
                </ul>
                <ul className="w-4/12 mb-10 flex flex-col gap-1.5">
                  <p className="text-xl mt-14 font-bold min-w-fit">Marketing</p>
                  <li className="text-gray-500">
                    <a href="#">Landing</a>
                  </li>
                  <li className="text-gray-500">
                    <a href="#">Landing</a>
                  </li>
                  <li className="text-gray-500">
                    <a href="#">Landing</a>
                  </li>
                  <li className="text-gray-500">
                    <a href="#">Landing</a>
                  </li>
                  <li className="text-gray-500">
                    <a href="#">Landing</a>
                  </li>
                  <li className="text-gray-500">
                    <a href="#">Landing</a>
                  </li>
                  <li className="text-gray-500">
                    <a href="#">Landing</a>
                  </li>
                  <li className="text-gray-500">
                    <a href="#">Landing</a>
                  </li>
                </ul>
                <ul className="w-4/12 mb-10 flex flex-col gap-1.5">
                  <p className="text-xl mt-14 font-bold min-w-fit">Marketing</p>
                  <li className="text-gray-500">
                    <a href="#">Landing</a>
                  </li>
                  <li className="text-gray-500">
                    <a href="#">Landing</a>
                  </li>
                  <li className="text-gray-500">
                    <a href="#">Landing</a>
                  </li>
                  <li className="text-gray-500">
                    <a href="#">Landing</a>
                  </li>
                  <li className="text-gray-500">
                    <a href="#">Landing</a>
                  </li>
                  <li className="text-gray-500">
                    <a href="#">Landing</a>
                  </li>
                  <li className="text-gray-500">
                    <a href="#">Landing</a>
                  </li>
                  <li className="text-gray-500">
                    <a href="#">Landing</a>
                  </li>
                </ul>
                <ul className="w-4/12 mb-10 flex flex-col gap-1.5">
                  <p className="text-xl mt-14 font-bold min-w-fit">Marketing</p>
                  <li className="text-gray-500">
                    <a href="#">Landing</a>
                  </li>
                  <li className="text-gray-500">
                    <a href="#">Landing</a>
                  </li>
                  <li className="text-gray-500">
                    <a href="#">Landing</a>
                  </li>
                  <li className="text-gray-500">
                    <a href="#">Landing</a>
                  </li>
                  <li className="text-gray-500">
                    <a href="#">Landing</a>
                  </li>
                  <li className="text-gray-500">
                    <a href="#">Landing</a>
                  </li>
                  <li className="text-gray-500">
                    <a href="#">Landing</a>
                  </li>
                  <li className="text-gray-500">
                    <a href="#">Landing</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </>
    </FooterWrapper>
  )
}
