import { lightTheme, darkTheme } from '../theme/theme';

const Skills = ({ darkMode }) => {

  const theme = darkMode ? darkTheme : lightTheme;

  const skillsList = [
    { name: "Godot Engine", icon: 'fas fa-gamepad', level: 92, color: 'from-cyan-500 to-blue-500', description: 'Space Shooter 2D game project' },
    { name: "Python", icon: 'fab fa-python', level: 88, color: 'from-blue-500 to-indigo-500', description: 'Backend, ML, data analysis' },
    { name: "React", icon: 'fab fa-react', level: 85, color: 'from-blue-400 to-cyan-400', description: 'Frontend & full-stack apps' },
    { name: "Git / GitHub", icon: 'fab fa-github', level: 90, color: 'from-gray-600 to-gray-900', description: 'Version control' },
    { name: "Firebase", icon: 'fas fa-fire', level: 80, color: 'from-orange-500 to-red-500', description: 'Backend services' },
    { name: "C++", icon: 'fas fa-code', level: 80, color: 'from-purple-500 to-indigo-500', description: 'Embedded systems' },
    { name: "Linux", icon: 'fab fa-linux', level: 85, color: 'from-orange-600 to-yellow-600', description: 'Dev environment' },
    { name: "JavaScript", icon: 'fab fa-js-square', level: 85, color: 'from-yellow-500 to-amber-500', description: 'Web development' }
  ];

  return (
    <section
      id="skills"
      className={`
        py-14 px-4 sm:px-6 overflow-x-hidden
        lg:min-h-screen lg:flex lg:items-center lg:justify-center
        ${theme.backgroundPrimary}
      `}
    >
      <div className="container mx-auto py-14">

        <div className="text-center mb-20" data-aos="fade-up">
          <h1 className={`sm:text-4xl text-3xl font-bold mb-4 ${theme.textPrimary}`}>
            My <span className={`bg-gradient-to-r ${theme.accentGradient} bg-clip-text text-transparent`}>
              Technical Skills
            </span>
          </h1>
          <p className={theme.textSecondary}>
            Proficient in game development, full-stack development, and embedded systems
          </p>
        </div>

        <div className="flex flex-wrap -m-4">
          {skillsList.map((skill, index) => (
            <div key={index} className="p-4 lg:w-1/4 md:w-1/2 w-full">

              <div
                className={`
                  ${theme.cardBg} ${theme.border}
                  h-full p-6 rounded-2xl border
                  hover:border-green-500/50 hover:-translate-y-2
                  transition-all duration-300 group
                  ${!darkMode ? 'shadow-lg hover:shadow-xl' : ''}
                `}
              >

                <div className="flex items-center mb-6">
                  <div className={`${theme.cardSoft} w-16 h-16 rounded-xl flex items-center justify-center ${!darkMode ? 'shadow-sm' : ''}`}>
                    <i className={`${skill.icon} text-3xl ${theme.icon}`} />
                  </div>

                  <div className="ml-4">
                    <h3 className={`text-xl font-bold ${theme.textPrimary}`}>
                      {skill.name}
                    </h3>
                    <p className={`text-sm ${theme.textSecondary}`}>
                      {skill.description}
                    </p>
                  </div>
                </div>

                <div className="mb-2 flex justify-between">
                  <span className={theme.muted}>Proficiency</span>
                  <span className={`font-bold bg-gradient-to-r ${theme.accentGradient} bg-clip-text text-transparent`}>
                    {skill.level}%
                  </span>
                </div>

                <div className={`w-full rounded-full h-3 overflow-hidden ${theme.cardSoft} ${!darkMode ? 'shadow-inner' : ''}`}>
                  <div
                    className={`h-full rounded-full bg-gradient-to-r ${skill.color}`}
                    style={{ width: `${skill.level}%` }}
                  />
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
