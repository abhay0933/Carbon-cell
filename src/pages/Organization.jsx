import React from 'react'
import NavigationBar from '../components/NavigationBar'

const Organization = () => {
  return (
    <div style={{display: "flex", gap: "20px", color: "white"}}>
        <NavigationBar />
        <h1>This is Organization Page</h1>
    </div>
  )
}

export default Organization