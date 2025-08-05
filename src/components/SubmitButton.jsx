import React from 'react'

const SubmitButton = ({ isHovered, handleMouseEnter, handleMouseLeave }) => {
    // handleEnter function for mouse enter
    const handleEnter = () => {
        console.log("Mouse Entering");  // Log message when mouse enters
        handleMouseEnter();  // Call the handleMouseEnter function passed down from App
    }
    // handleLeave function for mouse leave
    const handleLeave = () => {
        console.log("Mouse Exiting");  // Log message when mouse leaves
        handleMouseLeave();  // Call the handleMouseLeave function passed down from App
    }

    return (
        <button
            onMouseEnter={handleMouseEnter}  // Triggers when the mouse enters the button
            onMouseLeave={handleMouseLeave}  // Triggers when the mouse leaves the button
        >
            Submit Password
        </button>
    )
}

export default SubmitButton