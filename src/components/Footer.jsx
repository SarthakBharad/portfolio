/**
 * Footer Component
 * Responsive footer with theme-aware social icons
 */

import { lightTheme, darkTheme } from '../theme/theme';
import { FaGithub, FaLinkedin, FaTwitter, FaHeart } from 'react-icons/fa';

const Footer = ({ darkMode }) => {
    const theme = darkMode ? darkTheme : lightTheme;
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        { href: "https://github.com/SarthakBharad", icon: <FaGithub /> },
        { href: "https://www.linkedin.com/in/sarthak-bharad/", icon: <FaLinkedin /> },
        { href: "https://x.com/maybesarthak", icon: <FaTwitter /> },
    ];

    return (
        <footer
            className={`border-t ${theme.border}`}
            style={{
                background: darkMode
                    ? 'linear-gradient(to bottom, #000000, #111827)'
                    : 'linear-gradient(to bottom, #f3f4f6, #e5e7eb)',
            }}
        >
            <div className="container mx-auto py-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    {/* Branding */}
                    <div className="text-center md:text-left">
                        <h3 className={`text-2xl font-bold mb-2 ${theme.textActive}`}>
                            Sarthak Bharad's Portfolio
                        </h3>
                        <p className={`text-sm ${theme.muted}`}>
                            Full Stack Developer
                        </p>
                    </div>

                    {/* Social Links */}
                    <div className="flex gap-4">
                        {socialLinks.map((link, idx) => (
                            <a
                                key={idx}
                                href={link.href}
                                className={`
                                    w-10 h-10 rounded-full flex items-center justify-center
                                    transition-all hover:scale-110
                                    ${darkMode
                                        ? `bg-gray-700 text-white hover:bg-gradient-to-r ${theme.accentGradient}`
                                        : `bg-gray-800 text-white hover:bg-gradient-to-r ${theme.accentGradient}`
                                    }
                                `}
                            >
                                {link.icon}
                            </a>
                        ))}
                    </div>

                    {/* Copyright */}
                    <div className="text-center md:text-right">
                        <p className={`text-sm flex items-center justify-end gap-1 ${theme.muted}`}>
                            &copy; {currentYear} made with <FaHeart className="text-green-500" /> by Sarthak
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
