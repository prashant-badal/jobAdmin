import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const DynamicTitle = () => {
    let location=useLocation();
    useEffect(()=>{
    const routeTitles = {
        '/': 'Home||Admin',
        '/login': 'login||Admin',
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
