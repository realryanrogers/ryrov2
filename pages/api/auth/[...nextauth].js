import NextAuth from "next-auth";
import Providers from "next-auth/providers";

export default (req, res) => 
    NextAuth(req, res, {
        providers: [
            Providers.GitHub({
                clientId: process.env.GITHUB_CLIENT_ID,
                clientSecret: process.env.GITHUB_CLIENT_SECRET,

            })
        ],
        debug: true,
        secret: process.env.AUTH_SECRET,
        jwt: {
            secret: process.env.JWT_SECRET
        },
        callbacks: {
            async signIn(user, account, profile) {
                if(profile.login === 'realryanrogers') {
                    console.log("It's Ryan")
                    return "/"
                }
                console.log("Not ryan?")
                console.log(profile)
              return true
            },
        }
    }) 