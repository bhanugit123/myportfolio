import React, { useState } from "react";
import { FaReact, FaServer, FaChevronRight } from "react-icons/fa";

const Work = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const experiences = [
    {
      role: "Full Stack Software Engineer",
      company: "New York University",
      duration: "May 2023 – Present",
      location: "Manhattan, NY",
      icon: <FaReact className="w-6 h-6" />,
      skills: ["React.js", "Express.js", "MongoDB", "AWS Lambda", "Python"],
      description: [
        "Developed “SupportHub,” AWS-based IT ticketing platform with React.js, Express.js, and MongoDB, integrating an LLM-driven chatbot.",
        "Migrated codebase from Snowflake to GitLab using AWS Lambda with Python runtime, resulting in a 30% reduction in deployment time.",
        "Configured AppDynamics dashboards and alerts to provide real-time application health and performance, resulting in a 40% decrease in mean time to detection (MTTD).",
        "Revamped UI/UX of key landing pages using A/B testing, boosting click-through rates by 20%."

      ],
    },
    {
      role: "Associate Software Engineer, Product Development Team",
      company: "Aetna Health Care (TATA)",
      duration: "October 2020 – February 2023",
      location: "Hyderabad, India",
      icon: <FaServer className="w-6 h-6" />,
      skills: ["ReactJS", "Node.js", "Java", "SQL", "PostgreSQL", "Jenkins", "Docker"],
      description: [
        "Led the design and development of enterprise-level microservices application for an Health Care Group, supporting over 100k+ concurrent users.",
        "Optimized SQL queries and indexing for a PostgreSQL database, decreasing query response times by 50% and improving system throughput.",
        "Refactored a legacy C++ codebase, eliminating duplicative logic to reduce code volume by 20% and improve maintainability.",
        "Implemented CI/CD pipelines using Jenkins and Docker, cutting average release cycle times by 40%.",
        "Directed a collaborative effort with UX designers, product managers, and architects to launch a key feature on a website with over 10,000 users,completed the project three weeks ahead of schedule that generated an additional $100K in revenue per quarter",
        "Implemented test-driven development (TDD) and automated testing using Jest, raising test coverage from 50% to 90% and catching 80% of bugs before production."
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white px-6 py-0">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 relative">
          <div className="absolute inset-0 flex items-center justify-center -z-10">
            <div className="w-64 h-64 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full blur-3xl opacity-70" />
          </div>
          <h2 className="text-6xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 drop-shadow-sm">
              Work Experience
            </span>
          </h2>
          <div className="h-1.5 w-40 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 mx-auto rounded-full mt-8 shadow-lg" />
        </div>

        {/* Timeline */}
        <div className="relative mt-16 lg:mt-24">
          {/* Vertical Line */}
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-600 to-purple-600 rounded" />

          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative flex items-center gap-8 mb-12 pl-20"
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              {/* Timeline Node */}
              <div className="absolute left-4 transform">
                <div
                  className={`w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full border-4 border-white 
                    flex items-center justify-center transition-all duration-300
                    ${activeIndex === index ? "scale-125" : ""}`}
                >
                  <div className="w-3 h-3 bg-white rounded-full" />
                </div>
              </div>

              {/* Experience Card */}
              <div
                className={`flex-1 bg-white p-8 rounded-lg border border-gray-200 shadow-lg transition-all duration-300 
                  ${activeIndex === index ? "transform -translate-y-2 shadow-xl" : ""}`}
              >
                {/* Header */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-gray-100 rounded-lg text-blue-600">
                    {exp.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-1">
                      {exp.role}
                    </h3>
                    <h4 className="text-lg text-gray-600">{exp.company}</h4>
                    <p className="text-gray-500 text-sm font-medium mt-1">
                      {exp.duration} | {exp.location}
                    </p>
                  </div>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {exp.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-sm bg-gray-100 text-gray-600 rounded-full hover:bg-gray-200 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Description */}
                <ul className="space-y-3 text-gray-600 text-sm mb-4">
                  {exp.description.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <FaChevronRight className="flex-shrink-0 mt-1 text-blue-600" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
