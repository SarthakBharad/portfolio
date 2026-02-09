/**
 * Secondary Button Component
 * An outlined button with hover effects and theme-aware styling
 * Complementary to PrimaryButton with different visual hierarchy
 */

import { motion } from "framer-motion";
import { lightTheme, darkTheme } from "../../theme/theme";

const SecondaryButton = ({
    darkMode,           // Boolean indicating dark mode state
    children,           // Button content (text/icon)
    className = "",     // Additional CSS classes
    fullWidth = false,  // Control button width
    ...props            // Spread remaining props to button element
}) => {
    // Select theme based on darkMode prop
    const theme = darkMode ? darkTheme : lightTheme;

    // Softer glow effect for secondary button
    const glowColor = darkMode
        ? "0 0 25px rgba(34,197,94,0.6)"       // Green glow for dark
        : "0 0 25px rgba(34,197,94,0.45)";     // Green glow for light

    // Framer Motion animation variants
    const buttonVariants = {
        rest: { scale: 1, boxShadow: "0 0 0px rgba(0,0,0,0)" },     // Default state
        hover: { scale: 1.05, boxShadow: glowColor },                // Hover state with glow
        tap: { scale: 0.95 }                                         // Click/tap state
    };

    return (
        <motion.button
            variants={buttonVariants}
            initial="rest"
            whileHover="hover"
            whileTap="tap"
            transition={{ duration: 0.35, ease: "easeInOut" }}       // Slightly faster transition
            className={`
                ${fullWidth ? "w-full" : ""}                         // Width control
                inline-flex items-center justify-center               // Flex layout
                ${theme.buttonSecondary}                              // Theme-aware styles (includes text, border, hover)
                bg-transparent                                        // Transparent background
                border-2                                              // Border width
                py-3 px-6                                             // Padding
                rounded-full                                          // Fully rounded corners
                font-semibold                                         // Font weight
                transform                                             // Enable transforms
                transition-colors duration-300                        // Color transition
                ${className}                                          // Additional classes
            `}
            {...props}                                                // Spread additional props
        >
            {children}                                                {/* Render button content */}
        </motion.button>
    );
};

export default SecondaryButton;