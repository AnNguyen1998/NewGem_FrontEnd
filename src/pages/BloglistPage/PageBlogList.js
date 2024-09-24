import React from 'react'
import PageHeader from '../headerPage/PageHeader'
import PageFooter from '../footerPage/PageFooter'
import BlogList from '../../component/BlogListPage/BlogList'

export default function PageBlogList() {
  return (
    <div>
        <PageHeader/>
        <BlogList/>
        <PageFooter/>
    </div>
  )
}

