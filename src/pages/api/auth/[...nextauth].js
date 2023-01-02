import NextAuth from 'next-auth';
import { Providers } from 'next-auth/providers';

const options = {
    debug: true,
    providers: [
        Providers.Facebook({
            clientId: process.env.FACEBOOK_CLIENT_ID,
            clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
        }),

        Providers.Google({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),

        Providers.GitHub({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
        }),
    ],
    pages: {
        login: '/auth/login',
    },
    secret: process.env.NEXTAUTH_SECRET,
    callbacks: {
        async signIn({ baseUrl }) {
            return [baseUrl, true];
        },
        async session({ session }) {
            return session;
        },
        async jwt({ token }) {
            return token;
        },
        async redirect({ url, baseUrl }) {
            if (url.startsWith('/')) return `${baseUrl}${url}`;
            else if (new URL(url).origin === baseUrl) return url;
            return baseUrl;
        },
    },
};

export default (req, res) => NextAuth(req, res, options);
