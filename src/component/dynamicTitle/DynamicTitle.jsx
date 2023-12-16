import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const DynamicTitle = () => {
    let location=useLocation();
    useEffect(()=>{
    const routeTitles = {
        '/': 'Home||Admin',
        '/login': 'login||Admin',
        '/users':'Candidates',
        '/employers':'Employers',
        '/users/add':'Add Candidate',
        '/job-posting': 'Jobs',
        '/contact-queries': 'Queries',
        '/job-type': 'Job Type',
        '/education': 'Education',
        '/employement-type': 'Type',
        '/package-list': 'List',
        '/category': 'Category',
        '/industry': 'Industry',

        // '/contact': 'Contact Us',
        // Add more routes and titles as needed
      };
    
        const title= routeTitles[location.pathname];
        document.title =title;
    },[location])
  return (
    <>

    </>
  )
}

export default DynamicTitle
