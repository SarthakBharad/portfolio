/**
 * Components Barrel File
 * Centralizes exports for cleaner imports throughout the application
 * Follows the index pattern for better module organization
 */

// Layout & Section Components
export { default as Navbar } from "./Navbar";           // Navigation bar component
export { default as Hero } from "./Hero";               // Hero section component
export { default as About } from "./About";             // About section component
export { default as Skills } from "./Skills";           // Skills section component
export { default as Projects } from "./Projects";       // Projects section component
export { default as Contact } from "./Contact";         // Contact section component
export { default as Footer } from "./Footer";           // Footer component

// Re-export all UI components from the ui subdirectory
export * from "./ui";