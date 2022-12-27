import NextAuth from 'next-auth';
import GitHubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';
import AppleProvider from 'next-auth/providers/apple';

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
    ],

    secret: process.env.NEXTAUTH_SECRET,

    callbacks: {
        async signIn({ user, account, profile, email, credentials }) {
            return true;
        },
        async redirect({ url, baseUrl }) {
            return baseUrl;
        },
        async session({ session, user, token }) {
            return session;
        },
        async jwt({ token, user, account, profile, isNewUser }) {
            return token;
        },
    },
};

export default (req, res) => NextAuth(req, res, options);
