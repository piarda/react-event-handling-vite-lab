import React from 'react'

function PasswordInput({ handleTyping }) {
    const handleChange = (event) => {
        console.log("Entering password...");  // Log message
        handleTyping(event);  // Calls the handleTyping function passed down from App
    }

  return (
    <div>
      <label htmlFor="password">Password:</label>
      <input
        type="password" // Password input type
        id="password"
        onChange={handleTyping}  // Trigger handleTyping whenever the user types (tracks typing)
        placeholder="Enter your password"
      />
    </div>
  )
}

export default PasswordInput