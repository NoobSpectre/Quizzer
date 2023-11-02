import toast from 'react-hot-toast';

export const welcomeUser = (isNew: boolean | undefined, name: string | undefined) => {
  if (isNew === true) {
    toast(`Welcome ${name || 'user'}`);
  } else if (isNew === false) {
    toast(`Welcome back ${name || 'user'}`);
  }
};
