import { Lesson, courseMeta } from './course.types';

export interface CourseDetails {
  courseId: string;
  title: string;
  description: string;
  image?: string;
  tags?: string[];
  prevPrice?: string;
  currentPrice: string;
  whatsapp: string;
  contact: string;
  formLink: string;
  lessons: Lesson[];
  relatedCourses?: string[];
  startDate: string;
  whatYouWillLearn: string[];
  courseMeta: courseMeta[];
  enrolledCount: number; //currently enrolled
  maxCapacity: number; //total seats available
}
