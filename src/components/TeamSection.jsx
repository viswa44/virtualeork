import React from 'react';
import { 
  AcademicCapIcon, 
  BeakerIcon, 
  CommandLineIcon,
  CpuChipIcon,
  ClipboardDocumentCheckIcon,
  CircleStackIcon,
  UserGroupIcon
} from '@heroicons/react/24/outline';

const teamCategories = [
  {
    title: "Academic Writers",
    description: "Expert writers with deep knowledge across various academic disciplines",
    icon: AcademicCapIcon,
  },
  {
    title: "Researchers",
    description: "Dedicated professionals conducting thorough research and analysis",
    icon: BeakerIcon,
  },
  {
    title: "Computer Scientists",
    description: "Skilled experts in algorithms, data structures, and software development",
    icon: CpuChipIcon,
  },
  {
    title: "Programmers",
    description: "Experienced developers proficient in multiple programming languages",
    icon: CommandLineIcon,
  },
  {
    title: "Testers",
    description: "Quality assurance specialists ensuring perfect deliverables",
    icon: ClipboardDocumentCheckIcon,
  },
  {
    title: "AI Engineers",
    description: "Specialists in artificial intelligence and machine learning",
    icon: CircleStackIcon,
  },
  {
    title: "Teachers",
    description: "Experienced educators providing expert guidance and knowledge",
    icon: UserGroupIcon,
  }
];

function TeamSection() {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Our Team</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Meet Our Experts
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Our diverse team brings together years of experience and expertise across multiple disciplines
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-3">
            {teamCategories.map((category) => (
              <div
                key={category.title}
                className="flex flex-col bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow"
              >
                <dt className="flex items-center gap-x-3 text-lg font-semibold leading-7 text-gray-900">
                  <category.icon className="h-6 w-6 flex-none text-indigo-600" aria-hidden="true" />
                  {category.title}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{category.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}

export default TeamSection;