import NextAuth from 'next-auth';
import GitHubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';
import AppleProvider from 'next-auth/providers/apple';
import FacebookProvider from 'next-auth/providers/facebook';

const options = {
    debug: true,
    providers: [
        GitHubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
            // authorization: { params: { scope: 'notifications' } },
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            state: false,
            // authorizationUrl:
            authorization: {
                params: {
                    prompt: 'consent',
                    access_type: 'offline',
                    response_type: 'code',
                },
            },
        }),
        AppleProvider({
            clientId: process.env.APPLE_ID,
            clientSecret: process.env.APPLE_SECRET,
        }),
        FacebookProvider({
            clientId: process.env.FACEBOOK_CLIENT_ID,
            clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
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
