export { default } from 'next-auth/middleware';

export const config = { matcher: ['/profile/:id*', '/edit-profile/:id*'] };
