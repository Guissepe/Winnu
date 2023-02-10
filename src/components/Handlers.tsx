import { signIn } from 'next-auth/react';

export function handleGoogleSignin() {
  signIn('google', {
    callbackUrl: 'https://winnu-git-auth-guissepe.vercel.app/user',
  });
}
export function handleFacebookSignin() {
  signIn('facebook', {
    callbackUrl: 'https://winnu-git-auth-guissepe.vercel.app/user',
  });
}
export function handleGitHubSignin() {
  signIn('github', {
    callbackUrl: 'https://winnu-git-auth-guissepe.vercel.app/user',
  });
}
