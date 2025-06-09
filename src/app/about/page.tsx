import React from 'react';
import Image from 'next/image';

export default function About() {
  return (
    <div>
      <div className='relative h-screen w-full'>
        <Image
          src='/images/class-hero.webp'
          alt='Saeternus about us hero image'
          layout='fill'
          objectFit='cover'
          quality={10}
          className='absolute inset-0 h-full w-full object-cover'
        />
        <div className='absolute inset-0 bg-black bg-opacity-40 p-10 text-white md:p-40'>
          <h1 className='text-md mb-5 mt-16 font-thin xl:mb-3'>ABOUT US</h1>
          <p className='text-2xl leading-normal md:text-4xl md:leading-relaxed'>
            Welcome to <span className='text-primary'>Saeternus,</span> where we
            offer exclusive, industry-relevant courses to elevate your career.
            Our unique educational experience equips you with essential skills,
            ensuring you stay ahead in your field. Our community-centric
            approach includes alumni support and networking opportunities with
            like-minded professionals. Regardless of your background, we keep
            you updated with the latest trends in your niche.
          </p>
        </div>
      </div>
      <div className='bg-white p-10 md:p-40'>
        <div className='flex flex-col items-start md:flex-row xl:items-center'>
          <h1 className='mb-4 text-3xl font-bold md:absolute md:mr-20 md:text-4xl'>
            Who are we?
          </h1>
          <p className='text-bold md:ml-56'>
            We are a team of professionals with a vision to transform the
            traditional approach to education. Our mission is to provide a
            unique, industry-relevant learning experience. We are proud to be
            associated with leading organizations such as the University of
            Illinois Urbana-Champaign USA, Google, Microsoft Research, IIT
            Bhilai, and the University of British Columbia, Canada.
          </p>
        </div>
      </div>
    </div>
  );
}
