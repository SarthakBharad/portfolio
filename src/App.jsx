/**
 * Main Application Component
 * Serves as the root component that orchestrates the entire application
 * Manages global state and theme, animation initialization
 */

import { useEffect, useState } from "react"

// Import components from centralized barrel file
import {
  Navbar,
  Hero,
  About,
  Skills,
  Projects,
  Contact,
  Footer,
} from "./components";

// Import AOS (Animate On Scroll) library for scroll animations
import AOS from 'aos'
import 'aos/dist/aos.css'

/**
 * App Component
 * Main container that wraps the entire application
 * Manages dark mode state and initializes global configurations
 */
const App = () => {
  // State for dark mode toggle - default to true (dark mode enabled)
  const [darkMode, setDarkMode] = useState(true)

  /**
   * Initialize AOS (Animate On Scroll) library and set initial dark mode
   * Runs once on component mount
   */
  useEffect(() => {
    // Configure AOS animations
    AOS.init({
      duration: 1000,    // Animation duration in milliseconds
      once: false,       // Whether animation should happen only once
      offset: 100        // Offset (in px) from the original trigger point
    });
    
    // Set initial dark mode by adding 'dark' class to HTML element
    document.documentElement.classList.add('dark')
    
    // Optional: Log successful initialization
    console.log('Portfolio website initialized successfully');
  }, []); // Empty dependency array ensures this runs only once

  /**
   * Refresh AOS animations when dark mode changes
   * This ensures animations work properly after theme transitions
   */
  useEffect(() => {
    AOS.refresh()
  }, [darkMode]) // Dependency: re-run when darkMode changes

  /**
   * Toggle dark mode function
   * Updates state and toggles the 'dark' class on the HTML element
   */
  const toggleDarkMode = () => {
    const newMode = !darkMode;                    // Invert current mode
    setDarkMode(newMode);                         // Update state
    document.documentElement.classList.toggle('dark'); // Toggle CSS class
  };

  return (
    // Main container with dynamic gradient background based on theme
    <div className = {
      darkMode 
        ? 'bg-gradient-to-br from-gray-900 via-[#0d182e] to-gray-900 min-h-screen'  // Dark gradient
        : 'bg-gradient-to-br from-gray-50 to-blue-50 min-h-screen'                   // Light gradient
    }>
      {/* Navigation bar with theme toggle functionality */}
      <Navbar darkMode = {darkMode} toggleDarkMode = {toggleDarkMode}/>
      
      {/* Hero section - main introductory content */}
      <Hero darkMode = {darkMode}/>
      
      {/* About section - personal and professional information */}
      <About darkMode = {darkMode}/>

      {/* Skills section - */}
      <Skills darkMode = {darkMode}/>

      {/* Projects section - */}
      <Projects darkMode = {darkMode}/>

      {/* Contact section - */}
      <Contact darkMode = {darkMode}/>

      {/* Footer section - */}
      <Footer darkMode = {darkMode}/>
    </div>
  )
}

export default App