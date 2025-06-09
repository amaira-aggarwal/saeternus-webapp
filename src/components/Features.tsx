import React from 'react';
import Image from 'next/image';

const features = [
  {
    icon: '/assets/afford.png',
    title: 'Affordable Quality',
    description: 'Top-tier education at the most competitive prices',
  },
  {
    icon: '/assets/flexible.png',
    title: 'Flexible Learning',
    description:
      'Access live classes and recorded lectures to suit your schedule',
  },
  {
    icon: '/assets/focus.png',
    title: 'Focused Learning',
    description:
      'Small batch sizes for personalized attention and real-time Q&A sessions',
  },
  {
    icon: '/assets/24.png',
    title: '24/7 Support',
    description: 'Continuous support from responsive instructors',
  },
  {
    icon: '/assets/quality.png',
    title: 'Regulated Quality',
    description:
      'Courses are meticulously monitored for quality and effectiveness',
  },
  {
    icon: '/assets/community.png',
    title: 'Global Community',
    description: 'Join a community that helps each other grow and succeed',
  },
  {
    icon: '/assets/authentic.png',
    title: 'Certification',
    description:
      'Receive credible and valuable certificates that enhance your professional profile',
  },
];

function Features() {
  return (
    <div className='bg-gray-100 py-3'>
      <div className='container mx-auto px-4 pt-2'>
        <div className='grid grid-cols-1 gap-10 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7'>
          {features.map((feature, index) => (
            <div key={index} className='flex flex-col items-center text-center'>
              <div className='mb-3'>
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  width={70}
                  height={70}
                />
              </div>
              <h3 className='text-md mb-2 font-black text-gray-800'>
                {feature.title}
              </h3>
              <p className='text-xs text-gray-600'>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Features;
