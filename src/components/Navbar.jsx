/**
 * Navigation Bar Component
 * Responsive navigation bar with scroll effects, theme toggle, and mobile menu
 * Uses Framer Motion for smooth animations and scroll-based transformations
 */

import { lightTheme, darkTheme } from '../theme/theme';
import { PrimaryButton } from './ui';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';

const Navbar = ({ darkMode, toggleDarkMode }) => {
    const [activeSection, setActiveSection] = useState('home');
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const theme = darkMode ? darkTheme : lightTheme;

    const navItems = [
        { name: 'Home', id: '#home' },
        { name: 'About', id: '#about' },
        { name: 'Skills', id: '#skills' },
        { name: 'Projects', id: '#projects' },
        { name: 'Contact', id: '#contact' },
    ];

    // Handle navigation click for both desktop and mobile
    const handleNavClick = (itemName, itemId = `#${itemName.toLowerCase()}`) => {
    setActiveSection(itemName.toLowerCase());
    setIsMenuOpen(false);

    setTimeout(() => {
        const target = document.querySelector(itemId);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }, 300); // matches the menu's exit animation duration (0.3s)
    };

    const { scrollY } = useScroll();
    const scale = useTransform(scrollY, [0, 400], [1, 0.92]);
    const paddingY = useTransform(scrollY, [0, 400], [12, 6]);
    const paddingX = useTransform(scrollY, [0, 400], [32, 20]);
    const shadow = useTransform(
        scrollY,
        [0, 400],
        [
            "0 10px 25px rgba(0,0,0,0.25)",
            "0 4px 12px rgba(0,0,0,0.15)"
        ]
    );

    return (
        <div className="fixed w-full flex justify-center z-50 mt-4 px-4">
            <motion.nav
                style={{
                    scale,
                    paddingTop: paddingY,
                    paddingBottom: paddingY,
                    paddingLeft: paddingX,
                    paddingRight: paddingX,
                    boxShadow: shadow
                }}
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
                className={`
                    w-full max-w-6xl
                    ${theme.navBg}
                    backdrop-blur-lg
                    rounded-2xl
                `}
            >
                <div className="flex items-center justify-between gap-10">

                    <motion.a
                        href="/"
                        whileHover={{ scale: 1.05 }}
                        className="flex items-center shrink-0"
                    >
                        <span className={`text-xl font-bold ${theme.textPrimary}`}>
                            Welcome<span className="text-green-500">!</span>
                        </span>
                    </motion.a>

                    {/* Desktop navigation */}
                    <div className="hidden lg:flex items-center gap-10">
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.id}
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleNavClick(item.name, item.id);
                                }}
                                className="relative"
                            >
                                <motion.span
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    className={`font-medium transition-colors ${
                                        activeSection === item.name.toLowerCase()
                                            ? theme.textActive
                                            : `${theme.textSecondary} hover:${theme.textHover}`
                                    }`}
                                >
                                    {item.name}
                                </motion.span>
                            </a>
                        ))}
                    </div>

                    {/* Desktop right-side controls */}
                    <div className="hidden lg:flex items-center gap-6 shrink-0">
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={toggleDarkMode}
                            className={`p-2 rounded-full ${theme.toggleBg}`}
                            title="Toggle theme"
                        >
                            {darkMode
                                ? <Sun className={`w-5 h-5 ${theme.icon}`} />
                                : <Moon className={`w-5 h-5 ${theme.icon}`} />
                            }
                        </motion.button>

                        <a href="mailto:sarthakbharad3105@gmail.com" target="_blank" rel="noopener noreferrer">
                            <PrimaryButton darkMode={darkMode}>
                                Hire Me
                            </PrimaryButton>
                        </a>
                    </div>

                    {/* Mobile menu toggle */}
                    <div className="lg:hidden shrink-0">
                        <motion.button
                            whileTap={{ scale: 0.9 }}
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className={`p-2 rounded-lg ${theme.toggleBg}`}
                            title="Toggle mobile menu"
                        >
                            {isMenuOpen
                                ? <X className={`w-5 h-5 ${theme.textPrimary}`} />
                                : <Menu className={`w-5 h-5 ${theme.textPrimary}`} />
                            }
                        </motion.button>
                    </div>
                </div>

                {/* Mobile Menu */}
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
                                {navItems.map((item) => (
                                    <motion.a
                                        key={item.name}
                                        href={item.id}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            handleNavClick(item.name, item.id);
                                        }}
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

                                <div className={`h-px my-2 ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}></div>

                                <div className="flex flex-col gap-3 pb-2">
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
