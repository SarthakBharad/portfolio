/**
 * References Section
 * Displays recommendation letters / reference documents as clickable cards
 */

import { lightTheme, darkTheme } from '../theme/theme'

// import reference PDFs
import professorRef1 from '../assets/LOR_Jayendra_Sir.pdf'
import internshipRef from '../assets/LOR_Samir_Sir.pdf'
import professorRef2 from '../assets/LOR_Sanjay_Sir.pdf'

const References = ({ darkMode }) => {

    const theme = darkMode ? darkTheme : lightTheme

    const references = [
        {
            title: "Academic Reference",
            author: "Dr. Sanjay Chaudhary, Associate Dean",
            description: "Recommendation letter highlighting academic performance and project work.",
            file: professorRef2
        },
        {
            title: "Professional Reference",
            author: "Samir Joshi, Marketing Vice President",
            description: "Reference from professional work experience and development contribution.",
            file: internshipRef
        },
        {
            title: "Academic Reference",
            author: "Dr. Sanjay Chaudhary, Assistant Professor",
            description: "Reference acknowledging contribution to collaborative development projects.",
            file: professorRef1
        }
    ]

    return (
        <section
            id="references"
            className={`py-16 px-4 sm:px-6 ${theme.backgroundPrimary}`}
        >

            <div className="max-w-6xl mx-auto">

                {/* Section Title */}
                <h1
                    className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-12
                    text-transparent bg-gradient-to-r from-green-600 to-green-400 bg-clip-text"
                    data-aos="fade-up"
                >
                    References & Documents
                </h1>

                {/* Reference Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                    {references.map((ref, index) => (

                        <a
                            key={index}
                            href={ref.file}
                            target="_blank"
                            rel="noopener noreferrer"
                            data-aos="fade-up"
                            data-aos-delay={200 + index * 150}
                            className={`p-6 rounded-xl transition-all duration-300 hover:scale-105
                            ${darkMode
                                ? 'bg-gray-900 hover:bg-gray-800'
                                : 'bg-white shadow-lg hover:shadow-xl'
                            }`}
                        >

                            <h3 className="text-xl font-semibold mb-2">
                                {ref.title}
                            </h3>

                            <p className="text-green-400 text-sm mb-3">
                                {ref.author}
                            </p>

                            <p className={`text-sm leading-relaxed mb-4
                                ${darkMode ? 'text-gray-300' : 'text-gray-600'}
                            `}>
                                {ref.description}
                            </p>

                            <span className="text-green-400 text-sm font-medium">
                                View Document →
                            </span>

                        </a>

                    ))}

                </div>
            </div>
        </section>
    )
}

export default References