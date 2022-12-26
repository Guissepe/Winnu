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
            // authorization: {
            //     params: {
            //         prompt: 'consent',
            //         access_type: 'offline',
            //         response_type: 'code',
            //     },
            // },
        }),
        AppleProvider({
            clientId: process.env.APPLE_ID,
            clientSecret: process.env.APPLE_SECRET,
        }),
    ],
    // pages: {
    //     signIn: '/api/auth/sigIn',
    // },
    secret: process.env.NEXTAUTH_SECRET,

    callbacks: {
        async signIn({ account, profile }) {
            if (account.provider === 'google') {
                return (
                    profile.email_verified &&
                    profile.email.endsWith('@example.com')
                );
            }

            return true; // Do different verification for other providers that don't have `email_verified`
        },
        async jwt({ token }) {
            token.userRole = 'admin';
            return token;
        },
    },
};

export default (req, res) => NextAuth(req, res, options);
