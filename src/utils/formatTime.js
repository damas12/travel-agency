export const formatTime = secs => {
    if (!secs) return null;
    if (typeof secs != 'number') return null;
    if (secs < 0) return null;
  
    const seconds = (Math.floor(secs % 60) + '').padStart(2, '0');
    const minutes = (Math.floor((secs / 60) % 60) + '').padStart(2, '0');
    const hours = (Math.floor((secs / 3600) % 60) + '').padStart(2, '0');
  
    return `${hours}:${minutes}:${seconds}`;
  };