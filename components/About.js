import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="flex flex-col items-center justify-center space-y-8 py-32">
      <div className="flex items-center justify-center space-x-8 w-full">
        <div className="w-2/3">
          <h1 className="text-6xl font-bold mb-8 text-center">about me.</h1>
          <p className="mb-4 text-justify">
            I hold an MSc in Biological Engineering and have spent the past few years as a Process Engineer, focusing on process optimization with a strong skill set in project management and data analysis. Over the last two years, I&apos;ve been traveling around the world, to help continuous combustion industries enhancing process efficiency through hydrogen injection and data-driven analysis.
          </p>
          <p className="mb-4 text-justify">
            My goal is to keep improving, work with talented people, and contribute to projects that align with my passion and career aspirations.
          </p>
          <p className="text-justify">
            Outside of work, You&apos;ll find me surfing or playing golf.
          </p>

          <div className="mt-24"> 
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <SkillCategory title="<coding skills/>" icons={[
                'html5', 'css', 'javascript', 'python'
              ]} />
              <SkillCategory title="{frameworks}" icons={[
                'react', 'nodejs', 'nextjs', 'django', 'tailwindcss'
              ]} />
              <SkillCategory title="[developer tools]" icons={[
                'git', 'github', 'postgresql'
              ]} />
              <SkillCategory title="/libraries/" icons={[
                'pandas', 'numpy', 'matplotlib', 'scikitlearn'
              ]} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SkillCategory({ title, icons = [] }) {
  const titleColors = {
    "<coding skills/>": "from-white to-white",
    "{frameworks}": "from-white to-white",
    "[developer tools]": "from-white to-white",
    "/libraries/": "from-white to-white"
  };

  return (
    <div className="flex flex-col items-center">
      <h3 className={`text-xl font-semibold mb-4 bg-gradient-to-r ${titleColors[title]} text-transparent bg-clip-text`}>
        {title}
      </h3>
      <div className="grid grid-cols-3 gap-4">
        {icons.map((icon, index) => (
          <div key={index} className="w-12 h-12 flex items-center justify-center bg-white rounded-full p-2 group relative">
            <Image
              src={`/icons/${icon}.svg`}
              alt={icon}
              width={32}
              height={32}
            />
            <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {icon}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}