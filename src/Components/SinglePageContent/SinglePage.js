import React from 'react'
import AboutHome from '../AboutusPage/AboutHome'
import BlogHome from '../BlogPage/BlogHome'
import ContactHome from '../ContactPage/ContactHome'
import HomePage from '../HomePage/HomePage'

export default function SinglePage() {
  return (
    <div>
      <HomePage />
      <BlogHome />
      <AboutHome />
      <ContactHome />
    </div>
  )
}
