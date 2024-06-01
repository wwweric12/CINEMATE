export const formatTime = (originTime: Date): string => {
  const currentTime = new Date();
  const writtenTime = new Date(originTime);
  const timeDiff = currentTime.getTime() - writtenTime.getTime();

  const msPerMinute = 60 * 1000;
  const msPerHour = 60 * msPerMinute;
  const msPerDay = 24 * msPerHour;
  const msPerMonth = 30 * msPerDay;
  const msPerYear = 365 * msPerDay;

  if (timeDiff < msPerMinute) {
    return '방금 전';
  } else if (timeDiff < msPerHour) {
    const minutesAgo = Math.floor(timeDiff / msPerMinute);
    return `${minutesAgo}분 전`;
  } else if (timeDiff < msPerDay) {
    const hoursAgo = Math.floor(timeDiff / msPerHour);
    return `${hoursAgo}시간 전`;
  } else if (timeDiff < msPerMonth) {
    const daysAgo = Math.floor(timeDiff / msPerDay);
    return `${daysAgo}일 전`;
  } else if (timeDiff < msPerYear) {
    const monthsAgo = Math.floor(timeDiff / msPerMonth);
    return `${monthsAgo}달 전`;
  } else {
    const yearsAgo = Math.floor(timeDiff / msPerYear);
    return `${yearsAgo}년 전`;
  }
};

export const getYearFromDate = (input: Date | string): number => {
  let date: Date;

  if (input instanceof Date) {
    date = input;
  } else {
    date = new Date(input);
  }

  return date.getFullYear();
};
