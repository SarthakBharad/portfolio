/**
 * Hero Section Component
 * Main introductory section with profile information, social links, and call-to-action buttons
 * Features responsive design and scroll animations
 */

// Import theme configurations
import { lightTheme, darkTheme } from '../theme/theme';

// Import UI components
import { PrimaryButton } from './ui'

// Import static assets
import resume from '../assets/Sarthak_Bharad_Resume.pdf'
import profileImage from '../assets/Sarthak_Bharad_Photograph.jpeg'

// Import Framer Motion for animations
import { motion } from 'framer-motion'

/**
 * Hero Component
 * @param {Object} props - Component properties
 * @param {boolean} props.darkMode - Current theme state
 */
const Hero = ({ darkMode }) => {
    // Social media links with icons and URLs
    const socialIcons = [
        { icon: 'fab fa-twitter', alt: 'Twitter', href: 'https://x.com/maybesarthak'},
        { icon: 'fab fa-linkedin', alt: 'LinkedIn', href: 'https://www.linkedin.com/in/sarthak-bharad/'},
        { icon: 'fab fa-github', alt: 'GitHub', href: 'https://github.com/SarthakBharad'},
        { icon: 'fas fa-envelope', alt: 'Email', href: 'mailto:sarthakbharad3105@gmail.com'},
        { icon: 'fas fa-phone', alt: 'Mobile', href: 'tel:+4915510325695'}
    ];
    
    // Select theme based on darkMode prop
    const theme = darkMode ? darkTheme : lightTheme;

    return (
    // Main container with theme-aware background gradient
    <div className={`relative overflow-x-hidden flex flex-col min-h-screen ${theme.backgroundPrimary}`}>
        {/* Hero section with scroll animation trigger */}
        <section 
            id='home'                           // Anchor for navigation
            data-aos='fade-up'                  // AOS animation type
            data-aos-delay='250'                // Animation delay
            className='body-font z-10'          // Base styles
        >
            {/* Responsive container with flex layout */}
            <div className='container mx-auto flex px-4 sm:px-8 lg:px-14 py-12 lg:py-14 flex-col
            lg:flex-row items-center justify-between lg:mt-14 mt-14'>
                
                {/* Left content column */}
                <div className='lg:w-1/2 w-full flex flex-col items-center lg:items-start text-center lg:text-left mb-12 lg:mb-0'>
                    
                    {/* Social icons with staggered animations */}
                    <div className='flex justify-center lg:justify-start gap-4 sm:gap-6 mb-6 sm:mb-7 w-full'>
                        {socialIcons.map((item, index) => (
                            <a
                            key={index}
                            href={item.href}
                            target='_blank'                     // Open in new tab
                            rel='noopener noreferrer'           // Security for new tabs
                            data-aos='fade-up'                  // Animation type
                            data-aos-delay={`${400 + index * 100}`} // Staggered delay
                            className={`transform hover:scale-110 transition-all duration-300 
                            text-2xl sm:text-3xl ${darkMode ? theme.textPrimary : theme.textPrimary} 
                            hover:${theme.textHover}`}
                            title={item.alt}>                    {/* Tooltip */}
                                <i className={item.icon}></i>
                            </a>
                        ))}
                    </div>
                    
                    {/* Main heading */}
                    <h1 className={`title-font text-3xl sm:text-4xl lg:text-5xl mb-4 font-bold ${theme.textPrimary}`}
                     data-aos='fade-up'
                     data-aos-delay='500'>
                        Hi, I'm Sarthak Bharad.
                    </h1>
                    
                    {/* Introduction paragraph */}
                    <p className={`mb-6 sm:mb-8 leading-relaxed max-w-md sm:max-w-lg ${theme.textSecondary}`}
                     data-aos='fade-up'
                     data-aos-delay='600'>
                        A game development and computer graphics enthusiast currently pursuing a Master's in Applied Computer Science.
                        I'm passionate about creating immersive 3D content and engaging interactive experiences using modern game engines like Godot and Unreal Engine.
                        Beyond game design, I have experience in fullstack development, Android frameworks, and data analysis.
                        I'm eager to bring my expertise in game mechanics, 3D asset integration, and cross-platform development to forward-thinking teams in the gaming and interactive media industry.
                    </p>
                    
                    {/* Call-to-action buttons */}
                    <div className='w-full pt-4 sm:pt-6'>
                        <div className='flex flex-col sm:flex-row justify-center lg:justify-start gap-3 sm:gap-4'
                         data-aos='fade-up'
                         data-aos-delay='700'>
                            {/* Download CV button */}
                            <a href={resume} download className='w-full sm:w-auto'>
                                <PrimaryButton darkMode={darkMode} fullWidth>
                                    <i className='fas fa-download mr-2'></i>
                                    Download CV
                                </PrimaryButton>
                            </a>
                            
                            {/* Contact button */}
                            <a href='#contact' className='w-full sm:w-auto'>
                                <PrimaryButton darkMode={darkMode} fullWidth>
                                    <i className='fas fa-envelope mr-2'></i>
                                    Contact Me
                                </PrimaryButton>
                            </a>
                        </div>
                    </div>
                </div>
                
                {/* Right column - Profile image */}
                <div className='lg:w-1/2 w-full max-w-md lg:max-w-lg mt-8 lg:mt-0 flex justify-center'
                 data-aos='fade-up'
                 data-aos-delay='400'>
                    <div className='relative w-4/5 sm:w-3/4 lg:w-full aspect-square'>
                        {/* Circular image container */}
                        <div className='relative overflow-hidden rounded-full w-full h-full'>
                            <img 
                            src={profileImage} 
                            alt="Profile Image"
                            className='w-full h-full object-cover transform hover:scale-105 transition-transform duration-500' />
                        </div>
                    </div>
                </div>

            </div>
        </section>
    </div>
  );
};

export default Hero