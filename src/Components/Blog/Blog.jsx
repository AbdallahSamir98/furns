import React from 'react'
import BlogCard from './BlogCard'
import allBlogArray from '../../Data/allBlogArray.json'
export default function Blog() {

  return (
 <>
 <div className="container my-5">
    <div className="blogHomeTitle pt-5  text-center">
    <h2>Latest News</h2>
    <p className='text-muted fs-5 mt-3'>The best range of furniture suitable for your home. 

    <div className="blogCard">
      <div className="row">
          {allBlogArray.map((blog,idx) => 
            <BlogCard blog={blog} key={idx}/>
          )}
      </div>
    </div>

</p>
    </div>
 </div>
 </>
  )
}
