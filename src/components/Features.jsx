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

const features = [
  {
    name: 'Academic Writing',
    description: 'Expert writers with deep knowledge across various academic disciplines.',
    icon: AcademicCapIcon,
  },
  {
    name: 'Research',
    description: 'Dedicated professionals conducting thorough research and analysis.',
    icon: BeakerIcon,
  },
  {
    name: 'Programming',
    description: 'Experienced developers proficient in multiple programming languages.',
    icon: CommandLineIcon,
  },
  {
    name: 'Computer Science',
    description: 'Skilled experts in algorithms, data structures, and software development.',
    icon: CpuChipIcon,
  },
  {
    name: 'Quality Assurance',
    description: 'Thorough testing and quality control for perfect deliverables.',
    icon: ClipboardDocumentCheckIcon,
  },
  {
    name: 'AI & Machine Learning',
    description: 'Cutting-edge solutions in artificial intelligence and machine learning.',
    icon: CircleStackIcon,
  },
  {
    name: 'Teaching',
    description: 'Experienced educators providing expert guidance and knowledge.',
    icon: UserGroupIcon,
  },
];

function Features() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Our Services</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need for your virtual work
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Our team of experts covers a wide range of specialties to meet all your needs
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <feature.icon className="h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}

export default Features;