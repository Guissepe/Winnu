import { getProviders, signIn } from 'next-auth/react';

export function handleGoogleSignin() {
  signIn('google', {
    callbackUrl: 'https://winnu-git-auth-guissepe.vercel.app/userpage',
  });
}
export function handleFacebookSignin() {
  signIn('facebook', {
    callbackUrl: 'https://winnu-git-auth-guissepe.vercel.app/userpage',
  });
}
export function handleGitHubSignin() {
  signIn('github', {
    callbackUrl: 'https://winnu-git-auth-guissepe.vercel.app/userpage',
  });
}
