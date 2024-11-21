import React, { useState } from 'react'
import "animate.css";

import { AnimationOnScroll } from "react-animation-on-scroll";

import LazyLoad from "react-lazy-load";
import {Box, Button, Typography} from "@mui/material"
import college from "../assets/img/Projects/college.png"
import employee from "../assets/img/Projects/employee.png"
import workisy from "../assets/img/Projects/workisy.png"
import bank from "../assets/img/Projects/bank.png"
export default function Projects() {

    const projects=[
        {
            id:1,
            name:"Workisy Job Portal",
            img:workisy,
            description:" Developed a  job portal Workisy, utilizing React and Material-UI to create an engaging user interface and improve     navigation. Enhanced application performance, reducing page load time by 30% through optimized code splitting and efficient component management. Worked collaboratively with backend developers to integrate RESTful APIs, enabling seamless data flow and delivering a robust user experience across the platform.",
            role:"Frontend Developer",
            skills:[
                "React.js",
                "Material-UI (MUI)",
                "JavaScript",
                "HTML",
                "CSS",
                "Node.js",
                "Express.js"
              ]
        },
        {
            id:2,
            name:"Integrated Teching And Learing System",
            img:college,
            description:"Integrated teaching and learning system is a comprehensive educational approach that seamlessly combines various components, tools, and methods to create a cohesive and effective learning environment.The student enrollment module is a software application that simplifies and streamlines the enrollment process for educational institutions.This module manages the entire enrollment process, from student registration to fees payment, course selection and documentation.",
            role:"Frontend Developer",
            skills: [
                "HTML",
                "CSS",
                "JavaScript",
                "Visual Studio Code",
                "MySQL"
              ]
         },
        {
            id:3,
            name:"Employee Management System",
            img:employee,
            description:"Developed a user-friendly Employee Management System  using Spring MVC and Spring Data JPA, enabling efficient management of employee-related tasks and data in a web-based application.Optimized database interactions with Spring Data JPA, facilitating seamless CRUD (Create, Read, Update, Delete) operations on employee data, improving overall system performance and usability.",
            role:"Developer",
            skills:[
                "Java",
                "Spring Data JPA",
                "Hibernate",
                "Spring MVC",
                "MySQL"
              ]
        },
        {
            id:4,
            name:"Bank Management System",
            img:bank,
            description:"Created a robust database schema in MySQL Workbench to store customer information, account details, and transaction records.Designed and implemented the backend logic using Spring JDBC to ensure efficient data retrieval and manipulation for customer accounts and transactions.     "
            ,role:"Developer",
            skills:[
                "Java",
                "Spring JDBC",
                "MySQL",
                "MySQL Workbench"
              ]

        },
   
    ];

   const [projectId,setProjectId] = useState(0);

   


   const project = projects[projectId];

  return (
    <Box id='projects' sx={{
        height:"auto",
        width:"100%",
        padding:"30px",
        display:"flex",
        flexDirection:"column",
        alignItems:"center"
      
    }}>
        <Box sx={{
        }}>

            <Typography variant='h3'>Projects</Typography>
            <Box sx={{display:"flex",columnGap:"3vw",mt:"10px",
                overflowX:"scroll",
            
            }}>
                {
                    projects.map((project,index)=>(
                         <Button key={index} onClick={()=>setProjectId(index)} sx={{
                            backgroundColor:projectId === index ?"orange":"white",
                            color:"black",
                            flexShrink:0
                         }}>Project {project.id}</Button>
                    ))
                }

            </Box>

        </Box>
        <Box sx={{display:"flex",justifyContent:'center',alignItems:"center",marginTop:"50px",border:"1px solid orange",width:{xs:"100%",sm:"80%"},p:"30px",borderRadius:"10px",gap:"40px",
            flexDirection:{sm:"row",xs:"column"}
        }}>
            <Box>
                
            <Typography variant='h4' sx={{fontSize:{xs:"20px",sm:"35px"},}}>{project.name}</Typography>
               
            <AnimationOnScroll animateIn="animate__animated animate__zoomIn">
              <LazyLoad 
               offsetVertical={300}
              >
                  <Box component="img" src={project.img} sx={{
                    height:"300px",
                    width:"300px",
                    mt:"40px"
                }}/>
               
              </LazyLoad>
            </AnimationOnScroll>
        

            </Box>

            <Box sx={{maxHeight:"300px",width :{xs:"auto",sm:"700px"},
                display:'flex',
                flexDirection:"column",
                rowGap:"15px",
                overflowY:"scroll"
            }}>

                <Typography sx={{fontSize:"20px"}}>{project.role}</Typography>
               
                <Typography component="p">{project.description}</Typography>
                   
                   <Box sx={{display:"flex",
                    gap:"15px",
                    flexWrap:"wrap"
                   }}>
                     {
                       project.skills.map((skill,id)=>(
                        <Typography sx={{backgroundColor:"white",color:"black",p:"5px",borderRadius:"5px",fontSize:"13px"}} key={id}>{skill}</Typography>
                       ))
                    }
                    
                    </Box>
                
            </Box>

        </Box>
      
    </Box>
  )
}
