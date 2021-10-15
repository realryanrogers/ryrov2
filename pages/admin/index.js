import { signIn, signOut, useSession } from "next-auth/client";


export default function Index() {
    const [session] = useSession();

    return(
        <div>
            {!session ? <button onClick={signIn}>Sign in</button> :
                <button onClick={signOut}>Sign out</button>}
        </div>
    )
}