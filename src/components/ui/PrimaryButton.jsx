/**
 * Primary Button Component
 * A gradient-filled button with hover animations and theme-aware styling
 * Uses Framer Motion for smooth animations
 */

import { motion } from "framer-motion";
import { lightTheme, darkTheme } from "../../theme/theme";

const PrimaryButton = ({
    darkMode,           // Boolean indicating dark mode state
    children,           // Button content (text/icon)
    className = "",     // Additional CSS classes
    fullWidth = false,  // Control button width
    ...props            // Spread remaining props to button element
}) => {
    // Select theme based on darkMode prop
    const theme = darkMode ? darkTheme : lightTheme;

    // Dynamic glow effect colors based on theme
    const glowColor = darkMode
        ? "0 0 30px rgba(34,197,94,0.7), 0 0 60px rgba(34,197,94,0.4)"      // Green glow for dark
        : "0 0 30px rgba(13,24,46,0.6), 0 0 60px rgba(59,130,246,0.5)";     // Blue-green glow for light

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
            transition={{ duration: 0.4, ease: "easeInOut" }}        // Smooth transition
            className={`
                ${fullWidth ? "w-full" : ""}                         // Width control
                inline-flex items-center justify-center               // Flex layout
                text-white                                            // Text color
                bg-gradient-to-r ${theme.buttonPrimary}               // Theme-aware gradient
                border-0                                              // No border
                py-3 px-6                                             // Padding
                rounded-full                                          // Fully rounded corners
                font-semibold                                         // Font weight
                transform                                             // Enable transforms
                ${className}                                          // Additional classes
            `}
            {...props}                                                // Spread additional props
        >
            {children}                                                {/* Render button content */}
        </motion.button>
    );
};

export default PrimaryButton;