export interface CourseInfo {
  courseId: string;
  title: string;
  header: string;
  // description: string;
  image?: string;
  tags?: string[];
  prevPrice?: string;
  currentPrice: string;
  path: string;
}

export interface Lesson {
  title: string;
  description: string;
  day: string;
}

export interface courseMeta {
  title: string;
  image: string;
  description: string;
}

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
  keywords: string[];
  path: string;
  enrolledCount: number; //currently enrolled
  maxCapacity: number; //total seats available
}
