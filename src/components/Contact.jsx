/**
 * Contact Section Component
 * Personal contact form section with responsive layout, theme-aware styling,
 * and PrimaryButton used for the submit action.
 */

// Import theme configurations
import { lightTheme, darkTheme } from '../theme/theme';

// Import UI components
import { PrimaryButton } from './ui';

// Import static assets
import contactImage from '../assets/contact_form_image.png';

// Import Formspree React
import { useForm } from '@formspree/react';

const Contact = ({ darkMode }) => {
    
    const theme = darkMode ? darkTheme : lightTheme;
    
    // Formspree form state
    // Replace 'YOUR_FORM_ID' with your actual Formspree form ID
    const [formState, handleSubmit] = useForm("mreabryq"); // Get this from Formspree dashboard

    // Handle form submission (optional custom handling)
    const onSubmit = async (event) => {
        event.preventDefault();
        
        // You can add any custom validation here
        const formData = new FormData(event.target);
        
        // Submit to Formspree
        await handleSubmit(event);
        
        // Optional: Add any success animations or notifications here
        if (formState.succeeded) {
            // Reset form after successful submission
            event.target.reset();
            
            // You could add a success toast/notification here
            console.log("Message sent successfully!");
        }
    };

    return (
        <section
            id="contact"
            className={`
                px-4 sm:px-6 py-12 sm:py-16 md:py-20 lg:py-24
                overflow-x-hidden lg:flex lg:items-center lg:justify-center
                ${theme.backgroundPrimary}
            `}
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-8 sm:mb-10 md:mb-12" data-aos="fade-up">
                    <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-3 ${theme.textPrimary}`}>
                        Get In{' '}
                        <span className={`bg-gradient-to-r ${theme.accentGradient} bg-clip-text text-transparent`}>
                            Touch
                        </span>
                    </h2>
                    <p className={`text-base sm:text-lg md:text-xl ${theme.textSecondary}`}>
                        Let's discuss your project!
                    </p>
                    
                    {/* Success Message */}
                    {formState.succeeded && (
                        <div className="mt-4 p-3 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-lg" data-aos="fade-up">
                            Thanks for your message! I'll get back to you soon.
                        </div>
                    )}
                    
                    {/* Error Message */}
                    {formState.errors && formState.errors.length > 0 && (
                        <div className="mt-4 p-3 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 rounded-lg" data-aos="fade-up">
                            Oops! There was an error sending your message. Please try again.
                        </div>
                    )}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 items-center">
                    
                    {/* Image with decorative gradient like About.jsx */}
                    <figure
                        className="flex flex-wrap justify-center gap-4 relative order-2 lg:order-1"
                        data-aos="fade-right"
                    >
                        <div className="relative w-72 h-72 lg:w-96 lg:h-96">
                            {/* Decorative gradient circle */}
                            <div
                                className={`
                                    absolute -inset-4 lg:-inset-20
                                    bg-gradient-to-br
                                    ${darkMode ? 'from-white/60 via-white/40 to-white/20' : 'from-blue-500 via-blue-400 to-cyan-400'}
                                    rotate-12 rounded-full z-10
                                `}
                                data-aos="zoom-in"
                                data-aos-delay="300"
                            />
                            {/* Main image */}
                            <img
                                src={contactImage}
                                alt="Contact"
                                className="absolute inset-0 rounded-full w-full h-full object-cover z-10 transition-all duration-300"
                                data-aos="zoom-in"
                                data-aos-delay="400"
                            />
                        </div>
                    </figure>

                    {/* Contact Form */}
                    <form
                        onSubmit={onSubmit}
                        method="POST"
                        className={`rounded-xl p-4 sm:p-5 md:p-6 lg:p-8 border
                        ${theme.border} ${darkMode ? theme.cardBg : theme.cardBg}
                        ${!darkMode ? 'shadow-lg' : ''}`}
                        data-aos="fade-left" 
                        style={{ 
                            background: darkMode
                            ? 'linear-gradient(to right, #1f2937, #111827)' 
                            : 'linear-gradient(to right, #ffffff, #f9fafb)'
                        }}
                    >
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-3 sm:mb-4">
                            <input
                                type="text"
                                name="firstName"  // Added for Formspree
                                placeholder="First Name"
                                required
                                disabled={formState.submitting}
                                className={`w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg text-sm sm:text-base ${darkMode 
                                ? 'bg-gray-700 border-gray-700 text-white' 
                                : 'bg-gray-100 border-gray-200 text-gray-900 shadow-sm'} focus:border-green-500 focus:ring-2 focus:ring-green-500/20 transition-all`} 
                            />
                            <input
                                type="text"
                                name="lastName"  // Added for Formspree
                                placeholder="Last Name"
                                required
                                disabled={formState.submitting}
                                className={`w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg text-sm sm:text-base 
                                    ${darkMode ? 'bg-gray-700 border-gray-700 text-white' : 'bg-gray-100 border-gray-200 text-gray-900 shadow-sm'}
                                    focus:border-green-500 focus:ring-2 focus:ring-green-500/20 transition-all`}
                            />
                        </div>
                        
                        <input
                            type="email"
                            name="email"  // Added for Formspree
                            placeholder="Email Address"
                            required
                            disabled={formState.submitting}
                            className={`w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg text-sm sm:text-base mb-3 sm:mb-4
                                ${darkMode ? 'bg-gray-700 border-gray-700 text-white' : 'bg-gray-100 border-gray-200 text-gray-900 shadow-sm'}
                                focus:border-green-500 focus:ring-2 focus:ring-green-500/20 transition-all`}
                        />

                        <input
                            type="tel"
                            name="phone"  // Added for Formspree
                            placeholder="Phone Number"
                            required
                            disabled={formState.submitting}
                            className={`w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg text-sm sm:text-base mb-3 sm:mb-4
                                ${darkMode ? 'bg-gray-700 border-gray-700 text-white' : 'bg-gray-100 border-gray-200 text-gray-900 shadow-sm'}
                                focus:border-green-500 focus:ring-2 focus:ring-green-500/20 transition-all`}
                        />

                        <textarea
                            name="message"  // Added for Formspree
                            rows="4"
                            placeholder="Your Message"
                            required
                            disabled={formState.submitting}
                            className={`w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg text-sm sm:text-base mb-4 sm:mb-6 resize-none
                                ${darkMode ? 'bg-gray-700 border-gray-700 text-white' : 'bg-gray-100 border-gray-200 text-gray-900 shadow-sm'}
                                focus:border-green-500 focus:ring-2 focus:ring-green-500/20 transition-all`}
                        />

                        <PrimaryButton 
                            darkMode={darkMode} 
                            fullWidth
                            type="submit"
                            disabled={formState.submitting}
                        >
                            {formState.submitting ? 'Sending...' : 'Send Message'}
                        </PrimaryButton>
                    </form>

                </div>
            </div>
        </section>
    );
};

export default Contact;