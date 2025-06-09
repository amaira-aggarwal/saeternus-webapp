import { Metadata } from 'next';
import { getCourseByTitle, getCourseByPath } from '@/api/course/course';
import { CourseDetails } from '@/api/course/course.types';
import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import { Badge } from '@/components/ui/badge';
import { buttonVariants } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { slugify } from '@/lib/utils';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

export async function generateMetadata({
  params,
}: {
  params: { path: string };
}): Promise<Metadata> {
  const course = await getCourseByPath(params.path);

  if (!course) {
    return {
      title: 'Course not found',
      description: 'The course you are looking for does not exist.',
    };
  }

  return {
    title: `${course.title}`,
    description: course.description,
    openGraph: {
      title: `${course.title} - Saeternus`,
      description: course.description,
      url: `${baseURL}/courses/${slugify(course.path)}`,
      images: [
        {
          url: `${baseURL}/android-chrome-192x192.png`,
        },
      ],
    },
  };
}

export default async function Page({ params }: { params: { path: string } }) {
  const course: CourseDetails | undefined = await getCourseByPath(
    slugify(params.path)
  );

  return (
    <MaxWidthWrapper className='mt-12 flex flex-col items-center justify-center'>
      {course ? (
        <>
          <div className='header relative mb-12 h-full w-full'>
            <h1 className='mb-8 max-w-4xl text-4xl font-bold md:text-5xl lg:text-6xl'>
              {course.title}
            </h1>
            <p>{course.description}</p>
            {course.image && (
              <Image
                className='absolute -top-10 right-0 -z-10 rounded-lg opacity-40'
                src={course.image}
                alt={course.title}
                width={200}
                height={200}
              />
            )}
            <div className='price mt-2 flex flex-col items-start gap-2'>
              <div className='tag flex gap-1'>
                {course.tags?.map((tag) => (
                  <Badge key={tag} variant='secondary' className='text-xs'>
                    {tag}
                  </Badge>
                ))}
              </div>
              <div className='flex w-full flex-col justify-between sm:flex-row'>
                <div className='flex items-center justify-start gap-2'>
                  <div className='flex h-full items-center justify-center'>
                    <span className='align-top text-gray-500 line-through'>
                      {course.prevPrice}
                    </span>
                    <span className='text-2xl font-bold text-primary'>
                      {course.currentPrice}
                    </span>
                  </div>
                  <Link
                    className={buttonVariants({
                      size: 'lg',
                    })}
                    href={`${course.formLink}`}
                    target='_blank'
                  >
                    Register Now!
                  </Link>
                  <Link
                    className={buttonVariants({
                      size: 'lg',
                    })}
                    href={`${course.whatsapp}`}
                    target='_blank'
                  >
                    Join WhatsApp Group{' '}
                    <span>
                      <Image
                        src={'/assets/whatsapp.png'}
                        alt='whatsapp logo'
                        width={30}
                        height={30}
                      />
                    </span>
                  </Link>
                </div>
                <div className='flex flex-col items-start justify-center gap-5 py-4 sm:flex-row'>
                  <div className='flex flex-col'>
                    <span className='text-2xl font-bold text-primary'>
                      Starting
                    </span>
                    <span> {course.startDate}</span>
                  </div>
                  <div>
                    <div>For more info contact {course.contact}</div>

                    {/* <div>
                      or join{' '}
                      <a
                        href={course.whatsapp}
                        target='_blank'
                        className='inline-flex items-center gap-1 text-primary underline '
                      >
                        Whatsapp Group{' '}
                        <span>
                          <Image
                            src={'/assets/whatsapp.png'}
                            alt='whatsapp logo'
                            width={25}
                            height={25}
                          />
                        </span>
                      </a>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='content w-full'>
            <h2 className='mb-8 max-w-3xl text-3xl font-bold md:text-4xl lg:text-5xl'>
              What will you <span className='text-primary'>learn</span>?
            </h2>

            <div className='lesson flex w-full flex-col justify-between gap-2 sm:flex-row-reverse'>
              <div className='meta flex flex-wrap gap-2 sm:mb-2 sm:block'>
                {course.courseMeta.map((meta) => {
                  return (
                    <div
                      key={meta.title}
                      className='gap-2 sm:flex sm:flex-wrap'
                    >
                      <div className='gap-2 rounded-sm p-2 sm:p-1'>
                        <h3 className='text-sm text-primary sm:text-lg'>
                          {meta.title}
                        </h3>
                        <h4 className='text-wrap text-xs'>
                          {meta.description}
                        </h4>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className='w-full'>
                {course.lessons.map((lesson) => (
                  <Accordion key={lesson.title} type='multiple'>
                    <AccordionItem value={lesson.title}>
                      <AccordionTrigger className='text-left'>
                        {lesson.title}
                      </AccordionTrigger>
                      <AccordionContent>{lesson.description}</AccordionContent>
                    </AccordionItem>
                  </Accordion>
                ))}
              </div>
            </div>
          </div>
        </>
      ) : (
        <p>Course not found</p>
      )}
      <div className='mt-20 h-1/2 w-full text-wrap text-left'>
        <h1 className='mb-2 text-xs font-bold'>Highlights</h1>
        <div className='mb-10 flex flex-wrap items-center justify-start break-normal text-justify text-xs text-gray-600'>
          {course?.keywords.map((keyword, index) => (
            <p key={keyword} className='text-xs'>
              {keyword}
              {index !== course.keywords.length - 1 ? ', ' : '.'}&nbsp;
            </p>
          ))}
        </div>
      </div>
    </MaxWidthWrapper>
  );
}
