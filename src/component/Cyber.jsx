import React from 'react'
import Cards from './Cards'
function Cyber() {
    let data=[{
        title:"Non-Coding Jobs in Cybersecurity: A Comprehensive Guide",
        image:"https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Non-Coding-Jobs-in-Cybersecurity.webp",
        description:'In the rapidly evolving field of cybersecurity, there is a common misconception that coding skills',
        source:"https://www.guvi.in/blog/top-non-coding-jobs-in-cybersecurity/"
        
      },
    {
        title:"What Is Hacking? Types of Hacking & More",
        image:"https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-What-Is-Hacking_-Types-of-Hacking-More.webp",
        description:'Have you ever wondered what hacking is all about? It’s a big deal in today’s' ,
        source:"https://www.guvi.in/blog/what-is-hacking/"
    },
    {
        title:"The Cybersecurity Surge: 5 Must-Have Cybersecurity Certifications!",
        image:"https://www.guvi.in/blog/wp-content/uploads/2021/03/Blog-9-2048x1072.png",
        description:'There is something fascinating about a lone hacker in black hoodies using a single system'
        ,source:"https://www.guvi.in/blog/cybersecurity-certifications/"
    }]
  return <div className="container">
       <div className="row">
       {data.map((e,i)=>{
        return <Cards data={e} key={i}/>
       })} 
       </div>
  </div> 
}

export default Cyber
