import { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';

const RoleInfo = ({ role, isActive }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(isActive);
  }, [isActive]);

  const content = useMemo(() => {
    const infoStyles = "space-y-4 p-6 text-left bg-transparent rounded-lg shadow-lg h-[70vh] overflow-y-auto custom-scrollbar";

    const bioengineeerInfo = (
      <div className={infoStyles}>
        <div className="flex flex-col justify-center items-center text-center space-y-6">
          <p className="text-xl leading-relaxed">
            Curious about my journey as an <span className="font-bold">Engineer</span>? 
          </p>
          <Link 
            href="https://github.com/0xfortes/Personal-CV/blob/main/assets/CV_Luis%20Fortes.pdf" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-gray-800 bg-opacity-50 text-white font-bold py-3 px-6 rounded-lg transition duration-300 ease-in-out hover:bg-opacity-70 shadow-lg"
          >
            Luís Fortes&apos; Detailed CV 📄
          </Link>
        </div>
      </div>
    );

    const developerInfo = (
      <div className={infoStyles}>
        <h2 className="text-2xl text-center font-bold mb-8 text-white">
          My Learning Journey
        </h2>
        <div className="space-y-12">
          {[
            {
              date: "Currently Enrolled",
              title: "Cyfrin Updraft",
              subtitle: [
                "Blockchain Basics - Completed",
                "Solidity Smart Contract Development - Completed",
                "Foundry Fundamentals - Completed",
                "Advanced Foundry - Enrolled"
              ]
            },
            {
              date: "Currently Enrolled",
              title: "Machine Learning Specialization",
              subtitle: "by Andrew Ng",
              description: "Expanding my knowledge in machine learning through this specialization course."
            },
            {
              date: "2023 - 2025",
              title: "The Odin Project",
              subtitle: "FullStack Web Development",
              description: "Worked with front-end technologies like HTML, CSS, JavaScript, and React, along with back-end tools such as Node.js, Express, and RDBMS"
            },
            {
              date: "2023 - 2023",
              title: "IBM Professional Certificate",
              subtitle: "Data Science",
              description: "Developed skills in data analysis, machine learning, and data visualization using Python, Pandas, and Scikit-learn. Completed real-world projects covering data wrangling, statistics, SQL, and data-driven decision-making."
            },
            {
              date: "2022 - 2022",
              title: "HarvardX CS50",
              subtitle: "Intro to Computer Science",
              description: "Gained a introductory foundations in computer science concepts, including algorithms, data structures, and memory management. Focused on problem-solving and programming in C, Python, SQL, and JavaScript."
            },
            {
              date: "2022 - 2022",
              title: "CryptoZombies",
              subtitle: "Solidity: Beginner to Intermediate Smart Contracts",
              description: "Learned to build decentralized applications (DApps) and smart contracts using Solidity. Covered topics such as Ethereum, contract deployment, and token creation through gamified learning."
            }
          ].map((course, index) => (
            <div key={index} className="bg-gray-800 bg-opacity-50 p-6 rounded-lg shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold">{course.title}</h3>
                <span className="text-sm text-gray-400">{course.date}</span>
              </div>
              <div className="text-sm text-gray-300 mb-2">
              {Array.isArray(course.subtitle)
                ? course.subtitle.map((item, i) => (
                    <div key={i} className="flex items-center gap-2">
                      {item.toLowerCase().includes("completed") ? (
                        <span className="text-green-400">✅</span>
                      ) : (
                        <span className="text-yellow-400">⏳</span> 
                      )}
                      <span>{item.replace(" - Completed", "")}</span>
                    </div>
                  ))
                : course.subtitle}
              </div>
              <p className="text-sm text-gray-400">{course.description}</p>
            </div>
          ))}
        </div>
      </div>
    );

    return role === 'bioengineer' ? bioengineeerInfo : developerInfo;
  }, [role]);

  return (
    <div className={`w-full max-w-2xl mx-auto transition-all duration-500 mt-4 h-[500px]
                    ${isVisible ? 'opacity-100' : 'opacity-0 max-h-0 overflow-hidden'}`}>
      {content}
    </div>
  );
};

export default RoleInfo;
