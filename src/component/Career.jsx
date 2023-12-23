import React from 'react'
import Cards from './Cards'
function Career() {
    let data=[{
        title:"UI/UX Designer Job Description and Roles & Responsibilities",
        image:"https://www.guvi.in/blog/wp-content/uploads/2023/07/feature-image-UIUX-Designer-Roles-Responsibilities-Job-Description.jpg",
        description:'UI UX is the abbreviated word that’s been rocking the trend over the years, especially',
        source:"https://www.guvi.in/blog/ui-ux-designer-roles-and-responsibilities-and-job-description/"
        
      },
    {
        title:"Top 5 IT Jobs for Economics Students",
        image:"https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Top-IT-Jobs-for-Economics-Students.webp",
        description:'In today’s digital age, the intersection of economics and technology offers exciting career opportunities for students with a background in economics.',
        source:"https://www.guvi.in/blog/top-it-jobs-for-economics-students/"
    },
    {
        title:"Top IT Jobs for Commerce Students: A Lucrative Career Path",
        image:"https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Top-IT-Jobs-for-Commerce-Students.webp",
        description:'With the rapid advancement of technology, the demand for IT professionals has soared in recent',
        source:"https://www.guvi.in/blog/top-it-jobs-for-commerce-students/"
    }]
  return <div className="container">
       <div className="row">
       {data.map((e,i)=>{
        return <Cards data={e} key={i}/>
       })} 
       </div>
  </div> 
}

export default Career
