import React from 'react'
import Hero from './hero/Hero'
import Search from '../search/Search'
import Category from './category/Category'
import Offer from '../../components/home/Offer'

const HomeContainer = () => {
  return (
    <>
       {/* Hero section and homec related */}

       <Hero/>
       <Search/>
       <Offer/>
       <Category/>
    </>
  )
}

export default HomeContainer