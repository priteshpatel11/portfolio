import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(date: string) {
  let currentDate = new Date().getTime();
  if (!date.includes("T")) {
    date = `${date}T00:00:00`;
  }
  let targetDate = new Date(date).getTime();
  let timeDifference = Math.abs(currentDate - targetDate);
  let daysAgo = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

  let fullDate = new Date(date).toLocaleString("en-us", {
    month: "long",
    day: "numeric",
    year: "numeric"
  });

  if (daysAgo < 1) {
    return "Today";
  } else if (daysAgo < 30) {
    const weekAgo = Math.floor(daysAgo / 7);
    return `${fullDate} (${weekAgo}w ago)`;
  } else if (daysAgo < 365) {
    const monthAgo = Math.floor(daysAgo / 30);
    return `${fullDate} (${monthAgo}mo ago)`
  } else {
    const yearAgo = Math.floor(daysAgo / 365);
    return `${fullDate} (${yearAgo}y ago)`
  }
}