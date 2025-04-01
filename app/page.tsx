import SignIn from "./components/signin";
import UserForm from "./components/userForm";
import { auth } from "@/auth";

export default async function Home() {

  const session = await auth();
  const user = session?.user

  return (
    <>
    <SignIn />
      {user ? (
        <UserForm />
      ) : (
        <UserForm />
      )}
    </>
  );
}
