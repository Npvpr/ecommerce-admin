import { useSession, signIn, signOut } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();

  if (!session) {
    return (
      <div className="bg-blue-900 w-screen h-screen flex items-center justify-center">
        <div>
          <button
            className="bg-white p-2 px-4 rounded-lg"
            // Putting 'google' argument into signIn() will stop redirecting
            // to google's signIn UI (better UI)
            onClick={() => signIn('google')}
          >
            Login with Google
          </button>
        </div>
      </div>
    );
  }
  return (
    <>
      <div>Signed in as {session.user.email}</div>
      <button onClick={() => signOut()}>Sign out</button>
    </>
  );
}
