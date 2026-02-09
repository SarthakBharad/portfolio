import { lightTheme, darkTheme } from '../theme/theme';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

import log_collector_image from '../assets/log_collector_image.png';
import edusphere_image from '../assets/edusphere_image.png';
import space_shooter_image from '../assets/space_shooter_image.png';

const Projects = ({ darkMode }) => {

  const theme = darkMode ? darkTheme : lightTheme;

  const projectsList = [
    {
      id: 1,
      title: 'Godot Space Shooter',
      github: 'https://github.com/SarthakBharad-Godot/space-shooter',
      description:
        'A high-performance 2D arcade engine featuring physics-based collision logic, a persistent high-score architecture, and modular asset integration for rapid game scaling.',
      image: space_shooter_image,
      tags: ['Godot', 'GDScript', 'Game Engine']
    },
    {
      id: 2,
      title: 'IoT Log Aggregation System',
      github: 'https://github.com/SarthakBharad/bl602-log-collector',
      description:
        'An enterprise-grade logging infrastructure for BL602 microcontrollers with centralized MQTT brokers and a RESTful API.',
      image: log_collector_image,
      tags: ['C/C++', 'Python', 'Embedded Systems']
    },
    {
      id: 3,
      title: 'EduSphere AI: Adaptive Learning UI',
      github: 'https://github.com/EduSphere-AI/edusphere-ai-ui',
      description:
        'A sophisticated educational frontend leveraging TypeScript and React with personalized learning paths.',
      image: edusphere_image,
      tags: ['React', 'TypeScript', 'Tailwind CSS']
    }
  ];

  return (
    <section
      id="projects"
      className={`
        py-16 px-4 sm:px-6 overflow-x-hidden
        lg:min-h-screen lg:flex lg:items-center lg:justify-center
        ${theme.backgroundPrimary}
      `}
    >
      <div className="container mx-auto">

        <div className="text-center mb-10" data-aos="fade-up">
          <h2 className={`text-3xl sm:text-4xl font-bold mb-3 ${theme.textPrimary}`}>
            My{' '}
            <span className={`bg-gradient-to-r ${theme.accentGradient} bg-clip-text text-transparent`}>
              Projects
            </span>
          </h2>
          <p className={`max-w-xl mx-auto ${theme.textSecondary}`}>
            A showcase of my recent work.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {projectsList.map((project, index) => (
            <div
              key={project.id}
              className={`
                ${theme.cardBg} ${theme.border}
                rounded-xl border transition-all
                hover:border-green-500/50 hover:-translate-y-1
                ${!darkMode ? 'shadow-lg hover:shadow-xl' : ''}
              `}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="h-36 overflow-hidden rounded-t-xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
              </div>

              <div className="p-4">

                <h3 className={`text-lg font-bold mb-2 ${theme.textPrimary}`}>
                  {project.title}
                </h3>

                <p className={`text-sm mb-3 ${theme.textSecondary}`}>
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className={`
                        ${theme.cardSoft} ${theme.textSecondary}
                        px-2 py-1 text-xs rounded-full
                        ${!darkMode ? 'shadow-sm' : ''}
                      `}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={project.github}
                  className={`
                    ${theme.cardSoft} ${theme.textPrimary}
                    flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg
                    hover:opacity-90 transition-opacity
                    ${!darkMode ? 'shadow-sm' : ''}
                  `}
                >
                  <FaGithub />
                  Code
                </a>

              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="https://github.com/SarthakBharad"
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 px-7 py-4 rounded-full text-white bg-gradient-to-r ${theme.accentGradient} hover:opacity-90 hover:scale-105 transition-all`}
          >
            <FaGithub />
            View All Projects
          </a>
        </div>

      </div>
    </section>
  );
};

export default Projects;
