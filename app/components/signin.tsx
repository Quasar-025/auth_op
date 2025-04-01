import { signIn, signOut, auth } from "@/auth"
 
export default async function SignIn() {
    const session = await auth();
    const user = session?.user;
    
    return (
        <div className="flex flex-col items-center justify-center p-4">
            {user ? (
                <div className="text-center">
                    <h2 className="text-xl mb-4">Signed in as {user.name || user.email}</h2>
                    <form
                        action={async () => {
                            "use server"
                            await signOut()
                        }}
                    >
                        <button className="bg-red-500 hover:bg-red-600 text-white rounded-full p-3" type="submit">Sign Out</button>
                    </form>
                </div>
            ) : (
                <div className="text-center">
                    <h2 className="text-xl mb-4">Please sign in to continue</h2>
                    <form
                        action={async () => {
                            "use server"
                            await signIn("google")
                        }}
                    >
                        <button className="bg-white text-black rounded-full p-3" type="submit">Sign In with Google</button>
                    </form>
                </div>
            )}
        </div>
    )
}