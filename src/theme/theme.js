/**
 * Theme Configuration Module
 * Defines consistent color schemes for light and dark modes
 * All values are Tailwind CSS utility classes
 */

/**
 * Light Theme Configuration
 * Uses green as primary color with light backgrounds
 */
export const lightTheme = {
    // Text colors
    textPrimary: 'text-gray-900',          // Main text
    textSecondary: 'text-gray-700',        // Secondary text
    textHover: 'text-green-600',           // Hover state text
    textActive: 'text-green-600',          // Active state text

    // Button styles
    buttonPrimary: 'from-green-500 to-green-400',          // Gradient for primary buttons
    buttonSecondary: 'text-gray-800 border-2 border-green-500 hover:bg-green-600 hover:text-white', // Secondary button styles

    // Navigation styles
    navBg: 'bg-gradient-to-br from-green-200 to-white',    // Navigation background gradient
    indicator: 'from-green-500 to-green-400',              // Active indicator gradient
    icon: 'text-green-600',                               // Icon color
    toggleBg: 'bg-gray-200',                              // Theme toggle background

    // Mobile menu styles
    mobileBg: 'bg-white/95 border-gray-200',              // Mobile menu background
    mobileActive: 'bg-green-50',                          // Active mobile menu item

    // Decorative elements
    decorativeCircle: 'bg-green-400 opacity-20',          // Background circle styling

    // Page backgrounds - used for Hero, About, and other main sections
    backgroundPrimary: 'bg-gradient-to-br from-gray-50 to-blue-50', // Main page background gradient

    cardBg: 'bg-white',
    cardSoft: 'bg-gray-100',
    border: 'border-gray-200',
    muted: 'text-gray-500',
    accentGradient: 'from-green-500 to-green-400',

};

/**
 * Dark Theme Configuration
 * Uses green accents with dark backgrounds for better contrast
 */
export const darkTheme = {
    // Text colors
    textPrimary: 'text-white',                            // Main text
    textSecondary: 'text-gray-300',                       // Secondary text
    textHover: 'text-green-400',                          // Hover state text
    textActive: 'text-green-400',                         // Active state text

    // Button styles
    buttonPrimary: 'from-green-500 to-green-400',          // Gradient for primary buttons
    buttonSecondary: 'text-white border-2 border-green-500 hover:bg-green-600', // Secondary button styles

    // Navigation styles
    navBg: 'bg-gradient-to-br from-gray-700 to-black',    // Navigation background gradient
    indicator: 'from-green-500 to-green-400',             // Active indicator gradient
    icon: 'text-green-400',                               // Icon color
    toggleBg: 'bg-gray-700',                              // Theme toggle background

    // Mobile menu styles
    mobileBg: 'bg-gray-900/95 border-gray-700',           // Mobile menu background
    mobileActive: 'bg-gray-800',                          // Active mobile menu item

    // Decorative elements
    decorativeCircle: 'bg-green-500 opacity-10',          // Background circle styling

    // Page backgrounds - used for Hero, About, and other main sections
    backgroundPrimary: 'bg-gradient-to-br from-gray-900 via-[#0d182e] to-gray-900', // Main page background gradient

    cardBg: 'bg-gray-800',
    cardSoft: 'bg-gray-700',
    border: 'border-gray-700',
    muted: 'text-gray-400',
    accentGradient: 'from-green-500 to-green-400',

};