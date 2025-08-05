import { useState } from 'react'
import '../App.css'
import PasswordInput from './PasswordInput'
import SubmitButton from './SubmitButton'

function App() {
  // State to track the typing text and hover state of the submit button
  const [typingText, setTypingText] = useState('')
  const [isHovered, setIsHovered] = useState(false)

  // Event handler to update typingText
  const handleTyping = (event) => {
    console.log("Entering password...", event.target.value);
    setTypingText(event.target.value)
  }

  // Event handlers to track mouse hover over the SubmitButton
  const handleMouseEnter = () => {
    console.log("Mouse Entering");
    setIsHovered(true)
  }
  const handleMouseLeave = () => {
    console.log("Mouse Exiting");
    setIsHovered(false)
  }

  return (
    <div>
      <h1>Password Input</h1>
      <PasswordInput handleTyping={handleTyping} />
      <p></p>
      <SubmitButton 
        isHovered={isHovered} 
        handleMouseEnter={handleMouseEnter} 
        handleMouseLeave={handleMouseLeave} 
      />
      <div>
        <p>Typing Text: {typingText}</p>
        <p>Submit Button Hovered: {isHovered ? 'Yes' : 'No'}</p>
      </div>
    </div>
  )
}

export default App
