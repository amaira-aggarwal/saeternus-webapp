export enum Weekday {
  Sunday = 0,
  Monday = 1,
  Tuesday = 2,
  Wednesday = 3,
  Thursday = 4,
  Friday = 5,
  Saturday = 6,
}

export const getNextWeekday = (targetDay: Weekday) => {
  const today = new Date();
  const dayOfWeek = today.getDay();
  const daysUntilTarget = (targetDay - dayOfWeek + 7) % 7 || 7;

  const nextDate = new Date();
  nextDate.setDate(today.getDate() + daysUntilTarget);

  return nextDate.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
};
