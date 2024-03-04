// Hook to get time and day from unix.
export const getDate = (timezone: number) => {
  const date: Date = new Date(
    Date.now() + new Date().getTimezoneOffset() * 60 * 1000 + timezone * 1000,
  );
  const time: string = date.toTimeString().slice(0, 5);
  const day: string = date.toLocaleDateString('en-EN', {
    weekday: 'long',
  });
  return `${time}, ${day}`;
};
