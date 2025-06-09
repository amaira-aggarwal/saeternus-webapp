'use client';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import React, { FC } from 'react';
import { sendEmail } from '@/utils/email';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faLinkedin,
  faXTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export type FormData = {
  name: string;
  email: string;
  number: string;
  program: string;
  route: string;
};

const ContactPage: FC = () => {
  const { register, handleSubmit, setValue } = useForm<FormData>();
  const [selectedProgram, setSelectedProgram] = useState<string>('');

  function onSubmit(data: FormData) {
    const emailData = {
      name: data.name,
      email: data.email,
      number: data.number,
      program: data.program,
      route: '/admissions-consulting',
    };
    sendEmail(emailData);
  }

  return (
    <div>
      <div id='contact' className='max-w-8xl mx-auto py-12 md:py-24'>
        <div className='grid items-center justify-items-center gap-x-4 gap-y-10 lg:grid-cols-2'>
          <div className='hidden flex-col gap-10 md:ml-20 md:w-[550px] lg:block xl:ml-72 xl:w-5/6'>
            <div className='mb-20'>
              <h1 className='text-6xl font-extrabold'>Connect with us</h1>
              <p className='mt-10 text-lg font-normal text-gray-600'>
                Your success is our success.{' '}
                <span className='text-primary'>
                  We are committed to delivering innovative solutions and
                  exceptional service to help you achieve your goals.
                </span>{' '}
                Let us help you turn your vision into a reality.{' '}
              </p>
            </div>
            <div className='flex flex-col gap-3'>
              <h2 className='mb-5 text-2xl font-bold'>Socials</h2>
              <ul className='font-regular flex flex-row items-center gap-10 text-lg'>
                <li className='hover:text-primary'>
                  <a
                    href='https://x.com/saeternus_'
                    target='_blank'
                    className='flex items-center gap-1'
                  >
                    <FontAwesomeIcon className='h-7 w-7' icon={faXTwitter} />
                    Twitter
                  </a>
                </li>
                <li className='hover:text-primary'>
                  <a
                    href='https://www.instagram.com/saeternus_'
                    target='_blank'
                    className='flex items-center gap-1'
                  >
                    <FontAwesomeIcon className='h-7 w-7' icon={faInstagram} />
                    Instagram
                  </a>
                </li>
                <li className='hover:text-primary'>
                  <a
                    href='https://www.linkedin.com/company/saeternus/'
                    target='_blank'
                    className='flex items-center gap-1'
                  >
                    <FontAwesomeIcon className='h-7 w-7' icon={faLinkedin} />
                    Linkedin
                  </a>
                </li>
                <li className='hover:text-primary'>
                  <a
                    href='https://www.facebook.com/saeternus.india'
                    target='_blank'
                    className='flex items-center gap-1'
                  >
                    <FontAwesomeIcon className='h-7 w-7' icon={faFacebook} />
                    Facebook
                  </a>
                </li>
              </ul>
            </div>
            <div className='mt-36 text-base font-semibold'>
              <ul className='flex flex-row gap-20'>
                <li className='flex items-center justify-center gap-1'>
                  <FontAwesomeIcon className='h-6 w-6' icon={faEnvelope} />
                  hello@saeternus.com
                </li>
                <li className='flex w-full items-center justify-center gap-2 break-normal'>
                  <FontAwesomeIcon className='h-6 w-6' icon={faPhone} />
                  +91 8004916849
                </li>
              </ul>
            </div>
          </div>
          {/* contact from */}
          <div className='flex items-center justify-center rounded-lg p-4 md:ml-12 lg:h-[600px] lg:border lg:border-black'>
            <div className='px-2 md:px-1 xl:px-12'>
              <p className='text-2xl font-bold text-gray-900 md:text-4xl'>
                Contact Us
              </p>
              <p className='mt-4 text-lg text-primary'>
                Our friendly team would love to hear from you.
              </p>
              <form
                onSubmit={handleSubmit((data) => {
                  onSubmit({
                    ...data,
                    program: selectedProgram,
                    route: '/admissions-consulting',
                  });
                })}
                className='mt-8 space-y-4'
              >
                <div className='grid w-full gap-y-4 md:gap-x-4 lg:grid-cols-1'>
                  <div className='grid w-full items-center gap-1.5'>
                    <label
                      className='text-sm font-medium leading-none text-gray-700'
                      htmlFor='your_name'
                    >
                      Your Name <span className='text-red-500'>*</span>
                    </label>
                    <input
                      className='flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm'
                      type='text'
                      id='your_name'
                      placeholder='Your Name'
                      {...register('name', { required: true })}
                    />
                  </div>
                </div>
                <div className='grid w-full items-center gap-1.5'>
                  <label
                    className='text-sm font-medium leading-none text-gray-700'
                    htmlFor='email'
                  >
                    Email <span className='text-red-500'>*</span>
                  </label>
                  <input
                    className='flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm'
                    type='email'
                    id='email'
                    placeholder='Email'
                    {...register('email', { required: true })}
                  />
                </div>
                <div className='grid w-full  items-center gap-1.5'>
                  <label
                    className='text-sm font-medium leading-none text-gray-700'
                    htmlFor='phone_number'
                  >
                    Phone number <span className='text-red-500'>*</span>
                  </label>
                  <input
                    className='flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm'
                    inputMode='numeric'
                    id='phone_number'
                    placeholder='Phone number'
                    onKeyPress={(e) => {
                      const pattern = /[0-9]/;
                      if (!pattern.test(e.key)) {
                        e.preventDefault();
                      }
                    }}
                    {...register('number', { required: true })}
                  />
                </div>
                <div className='grid w-full items-center gap-1.5'>
                  <h1 className='text-sm text-gray-700'>Program</h1>
                  <Select
                    onValueChange={(value) => {
                      setSelectedProgram(value);
                      setValue('program', value);
                      console.log('Selected Program:', value);
                    }}
                  >
                    <SelectTrigger className='border-gray-300'>
                      <SelectValue placeholder='Select Program' />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value='Masters'>Masters</SelectItem>
                      <SelectItem value='PhD'>PhD</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <button
                  type='submit'
                  className='text-md w-full rounded-md bg-primary px-3 py-2 font-semibold text-white shadow-sm hover:bg-black/80'
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <hr className='mt-6' />
    </div>
  );
};

export default ContactPage;
