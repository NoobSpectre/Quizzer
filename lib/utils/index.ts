import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { getLocalStorageItem, setLocalStorageItem } from './localStorage';
import { submitForm } from './submitForm';

const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

export { cn, getLocalStorageItem, setLocalStorageItem, submitForm };
