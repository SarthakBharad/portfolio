/**
 * Navigation Bar Component
 * Responsive navigation bar with scroll effects, theme toggle, and mobile menu
 * Uses Framer Motion for smooth animations and scroll-based transformations
 */

// Import theme configurations
import { lightTheme, darkTheme } from '../theme/theme';

// Import UI components
import { PrimaryButton } from './ui'

// Import Framer Motion for animations and scroll effects
import {
    motion,
    useScroll,
    useTransform,
    AnimatePresence  // ← ADDED: For mobile menu animation
} from 'framer-motion';

import { useState } from 'react';

// Import Lucide React icons for UI elements
import { Sun, Moon, Menu, X } from 'lucide-react';

/**
 * Navbar Component
 * @param {Object} props - Component properties
 * @param {boolean} props.darkMode - Current theme state
 * @param {Function} props.toggleDarkMode - Function to toggle theme
 */
const Navbar = ({ darkMode, toggleDarkMode }) => {
    // State for active navigation section
    const [activeSection, setActiveSection] = useState('home');
    
    // State for mobile menu visibility
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Select theme based on darkMode prop
    const theme = darkMode ? darkTheme : lightTheme;

    // Navigation items with IDs for smooth scrolling
    const navItems = [
        { name: 'Home', id: '#home' },
        { name: 'About', id: '#about' },
        { name: 'Skills', id: '#skills' },
        { name: 'Projects', id: '#projects' },
        { name: 'Contact', id: '#contact' },
    ];

    /**
     * Handle navigation item click
     * @param {string} itemName - Name of the clicked navigation item
     */
    const handleNavClick = (itemName) => {
        setActiveSection(itemName.toLowerCase());  // Update active section
        setIsMenuOpen(false);                      // Close mobile menu
    };
    
    // Framer Motion scroll tracking for dynamic effects
    const { scrollY } = useScroll();

    // Transform scroll position into visual properties
    const scale = useTransform(scrollY, [0, 400], [1, 0.92]);          // Scale down on scroll
    const paddingY = useTransform(scrollY, [0, 400], [12, 6]);         // Reduce vertical padding
    const paddingX = useTransform(scrollY, [0, 400], [32, 20]);        // Reduce horizontal padding
    const shadow = useTransform(
        scrollY,
        [0, 400],
        [
            "0 10px 25px rgba(0,0,0,0.25)",       // Initial shadow
            "0 4px 12px rgba(0,0,0,0.15)"         // Reduced shadow on scroll
        ]
    );

    return (
        // Fixed position container for navbar
        <div className="fixed w-full flex justify-center z-50 mt-4 px-4">

            {/* Animated navigation bar with scroll-based transformations */}
            <motion.nav
                style={{
                    scale,              // Dynamic scale
                    paddingTop: paddingY,     // Dynamic vertical padding
                    paddingBottom: paddingY,
                    paddingLeft: paddingX,    // Dynamic horizontal padding
                    paddingRight: paddingX,
                    boxShadow: shadow         // Dynamic shadow
                }}
                initial={{ y: -100 }}         // Start above viewport
                animate={{ y: 0 }}            // Slide into view
                transition={{ duration: 0.5 }} // Animation duration
                className={`
                    w-full max-w-6xl          // Responsive width constraint
                    ${theme.navBg}            // Theme-aware background
                    backdrop-blur-lg          // Glass morphism effect
                    rounded-2xl               // Rounded corners
                `}
            >
                {/* Main flex container for navigation content */}
                <div className="flex items-center justify-between gap-10">

                    {/* Logo with hover animation */}
                    <motion.a
                        href="/"
                        whileHover={{ scale: 1.05 }}  // Scale on hover
                        className="flex items-center shrink-0"
                    >
                        <span className={`text-xl font-bold ${theme.textPrimary}`}>
                            Welcome<span className="text-green-500">!</span>
                        </span>
                    </motion.a>

                    {/* Desktop navigation items - hidden on mobile */}
                    <div className="hidden lg:flex items-center gap-10">
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.id}
                                onClick={() => handleNavClick(item.name)}
                                className="relative"
                            >
                                <motion.span
                                    whileHover={{ scale: 1.1 }}   // Hover scale
                                    whileTap={{ scale: 0.95 }}    // Tap/click scale
                                    className={`font-medium transition-colors ${
                                        activeSection === item.name.toLowerCase()
                                            ? theme.textActive     // Active state
                                            : `${theme.textSecondary} hover:${theme.textHover}` // Inactive with hover
                                    }`}
                                >
                                    {item.name}
                                </motion.span>
                            </a>
                        ))}
                    </div>

                    {/* Right side controls - hidden on mobile */}
                    <div className="hidden lg:flex items-center gap-6 shrink-0">

                        {/* Theme toggle button */}
                        <motion.button
                            whileHover={{ scale: 1.1 }}   // Hover animation
                            whileTap={{ scale: 0.9 }}     // Tap animation
                            onClick={toggleDarkMode}
                            className={`p-2 rounded-full ${theme.toggleBg}`}
                            title="Toggle theme"
                        >
                            {/* Conditionally render sun or moon icon */}
                            {darkMode
                                ? <Sun className={`w-5 h-5 ${theme.icon}`} />
                                : <Moon className={`w-5 h-5 ${theme.icon}`} />
                            }
                        </motion.button>

                        {/* Call-to-action button */}
                        <a href="mailto:sarthakbharad3105@gmail.com" target="_blank" rel="noopener noreferrer">
                            <PrimaryButton darkMode={darkMode}>
                                Hire Me
                            </PrimaryButton>
                        </a>
                    </div>

                    {/* Mobile menu toggle button */}
                    <div className="lg:hidden shrink-0">
                        <motion.button
                            whileTap={{ scale: 0.9 }}     // Tap animation
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className={`p-2 rounded-lg ${theme.toggleBg}`}
                            title="Toggle mobile menu"
                        >
                            {/* Toggle between menu and close icons */}
                            {isMenuOpen
                                ? <X className={`w-5 h-5 ${theme.textPrimary}`} />
                                : <Menu className={`w-5 h-5 ${theme.textPrimary}`} />
                            }
                        </motion.button>
                    </div>
                </div>

                {/* ===== MOBILE MENU DROPDOWN ===== */}
                {/* This section was completely missing in the original! */}
                <AnimatePresence>
                    {isMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className={`lg:hidden border-t ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}
                        >
                            <div className="flex flex-col gap-4 pt-4">
                                {/* Mobile Navigation Items */}
                                {navItems.map((item) => (
                                    <motion.a
                                        key={item.name}
                                        href={item.id}
                                        onClick={() => handleNavClick(item.name)}
                                        whileTap={{ scale: 0.95 }}
                                        className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                                            activeSection === item.name.toLowerCase()
                                                ? `${theme.navBg} ${theme.textActive}`
                                                : `${theme.textSecondary}`
                                        }`}
                                    >
                                        {item.name}
                                    </motion.a>
                                ))}

                                {/* Divider */}
                                <div className={`h-px my-2 ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}></div>

                                {/* Mobile Controls */}
                                <div className="flex flex-col gap-3 pb-2">
                                    {/* Theme Toggle */}
                                    <motion.button
                                        whileTap={{ scale: 0.95 }}
                                        onClick={toggleDarkMode}
                                        className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${theme.toggleBg}`}
                                    >
                                        {darkMode
                                            ? <>
                                                <Sun className="w-4 h-4" />
                                                <span>Light Mode</span>
                                            </>
                                            : <>
                                                <Moon className="w-4 h-4" />
                                                <span>Dark Mode</span>
                                            </>
                                        }
                                    </motion.button>

                                    {/* Hire Me Button */}
                                    <a 
                                        href="mailto:sarthakbharad3105@gmail.com" 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="w-full"
                                    >
                                        <motion.button
                                            whileTap={{ scale: 0.95 }}
                                            className="w-full px-4 py-2 bg-gradient-to-r from-green-500 to-green-400 text-white font-semibold rounded-lg transition-all"
                                        >
                                            Hire Me
                                        </motion.button>
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.nav>
        </div>
    );
};

export default Navbar;