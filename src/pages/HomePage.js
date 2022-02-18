import React from 'react'
import Header from '../components/Header'
import Hero from './components/Hero'

export default function HomePage() {
  return (
    <div>
      <div className='header-cover sticky top-0 left-0 w-full shadow-sm'>
        <Header />
      </div>
      <div className="container mx-auto">
        <Hero />
      </div>
    </div>
  )
}
