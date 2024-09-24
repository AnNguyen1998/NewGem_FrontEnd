import React from 'react'
import PageHeader from '../headerPage/PageHeader'
import BlogDetail from '../../component/BLogDetail/BlogDetail'
import PageFooter from '../footerPage/PageFooter'

export default function BlogDetailPage() {
  return (
    <div>
        <PageHeader/>
        <BlogDetail/>
        <PageFooter/>
    </div>
  )
}
