import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faLinkedin,
  faXTwitter,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import { cn } from '@/lib/utils';
import MaxWidthWrapper from './MaxWidthWrapper';

const socialLinks = [
  { href: 'https://x.com/saeternus_', icon: faXTwitter, label: 'Twitter' },
  {
    href: 'https://www.instagram.com/saeternus_',
    icon: faInstagram,
    label: 'Instagram',
  },
  {
    href: 'https://www.linkedin.com/company/saeternus/',
    icon: faLinkedin,
    label: 'LinkedIn',
  },
  {
    href: 'https://www.facebook.com/saeternus.india',
    icon: faFacebook,
    label: 'Facebook',
  },
];

function Footer() {
  return (
    <footer className='w-full bg-gray-100 shadow dark:bg-gray-900'>
      <div className='mx-auto max-w-full py-8 md:py-12'>
        <MaxWidthWrapper>
          <div className='flex flex-col items-start justify-between md:flex-row'>
            <div className='mb-8 md:mb-0 md:mr-8'>
              <Link
                href='/'
                className='flex items-start justify-start space-x-3 rtl:space-x-reverse'
              >
                <Image
                  src='/android-chrome-192x192.png'
                  alt='Saeternus Logo'
                  width={32}
                  height={32}
                />
                <span className='self-center text-xl font-semibold text-primary dark:text-white'>
                  Saeternus
                </span>
              </Link>
              <div className='mt-4 text-sm text-black dark:text-gray-400'>
                <h1 className='text-lg font-bold'>Office Address</h1>
                <p>LEVEL-4, LDC BUILDING, IBITF OFFICE, IIT BHILAI,</p>
                <p> Durg, Durg, Durg, Chattisgarh, India, 491001</p>
                <p>CIN: U72900CT2022PTC013086</p>
                <p>GSTN: 22ABICS3553L1Z5</p>
                <p>Contact: +91 80049 16849</p>
                <p>Email: hello@saeternus.com</p>
              </div>
            </div>
            <div className='flex flex-col items-start space-y-4'>
              <div className='mb-4'>
                <h2 className='text-md mb-2 text-left font-semibold text-gray-700 dark:text-gray-200'>
                  Follow Us
                </h2>
                <div className='flex space-x-5'>
                  {socialLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      aria-label={link.label}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <FontAwesomeIcon
                        icon={link.icon}
                        className='text-2xl text-black hover:text-primary dark:text-gray-400 dark:hover:text-white'
                      />
                    </Link>
                  ))}
                </div>
              </div>
              <div className='flex space-x-16'>
                <div>
                  <h2 className='text-md mb-2 font-semibold text-gray-700 dark:text-gray-200'>
                    Company
                  </h2>
                  <ul className='space-y-2 font-medium text-black dark:text-gray-400'>
                    <li>
                      <Link
                        href='/about'
                        className={cn('text-black hover:text-primary')}
                      >
                        About
                      </Link>
                    </li>
                    <li>
                      <Link
                        href='/contact-us'
                        className={cn('text-black hover:text-primary')}
                      >
                        Contact Us
                      </Link>
                    </li>
                    <li>
                      <Link
                        href='/courses'
                        className={cn('text-black hover:text-primary')}
                      >
                        Courses
                      </Link>
                    </li>
                    <li>
                      <Link
                        href='/courses'
                        className={cn('text-black hover:text-primary')}
                      >
                        Career
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <h2 className='text-md mb-2 font-semibold text-gray-700 dark:text-gray-200'>
                    Legal
                  </h2>
                  <ul className='space-y-2 font-medium text-black dark:text-gray-400'>
                    <li>
                      <Link
                        href='/policy'
                        className={cn('text-black hover:text-primary')}
                      >
                        Privacy Policy
                      </Link>
                    </li>
                    <li>
                      <Link
                        href='/terms'
                        className={cn('text-black hover:text-primary')}
                      >
                        Terms of Service
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
        <hr className='my-6 border-gray-200 dark:border-gray-700 sm:mx-auto lg:my-8' />
        <span className='block text-sm font-thin text-gray-500 dark:text-gray-400 sm:text-center'>
          {new Date().getFullYear()} saeternus™ All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}

export default Footer;
