import React from 'react'
import Cards from './Cards'
function Cyber() {
    let data=[{
        title:"8 Different Types of Cybersecurity and Threats Involved",
        image:"https://www.guvi.in/blog/wp-content/uploads/2022/11/Teal-Illustration-Digital-Business-Blog-Banner-1-2048x1152.png",
        description:'Cybersecurity refers to the protection of devices, processes, infrastructure, and assets of the organization from',
        source:"https://www.guvi.in/blog/types-of-cybersecurity/"
        
      },
    {
        title:"Cybersecurity Vs Ethical Hacking: Top 10 Differences",
        image:"https://www.guvi.in/blog/wp-content/uploads/2022/12/Yellow-Blue-Illustration-Business-Blog-Banner-2048x1152.png",
        description:'Cybersecurity & Ethical hacking and have been key in making sure that your data online is secure, users are authenticated & your data and privacy concerns are all kept safe.' ,
        source:"https://www.guvi.in/blog/difference-between-cybersecurity-and-ethical-hacking/"
    },
    {
        title:"Is coding required for cybersecurity? If yes, how crucial is coding for cybersecurity?",
        image:"https://www.guvi.in/blog/wp-content/uploads/2022/06/8bfd01c18be1b5059bc0d7770d9dabf1.gif",
        description:'Many people ask how important is coding for cybersecurity, and the lawyerly answer is: Well,'
        ,source:"https://www.guvi.in/blog/coding-for-cybersecurity/"
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
