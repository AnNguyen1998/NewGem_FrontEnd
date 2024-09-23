import React from 'react'
import HomePage from '../../component/HomePage/HomePage'
import PageHeader from '../headerPage/PageHeader'
import PageFooter from '../footerPage/PageFooter'

export default function PageHome() {
  return (
    <div>
        <PageHeader/>
        <HomePage/>
        <PageFooter/>
    </div>
  )
}
