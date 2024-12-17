import { auth } from "@/lib/session";
import { SessionWrapper } from "@/components/SessionWrapper";
import SignInPage from "@/components/Login/LoginComponent";
import SignOutPage from "@/components/Login/SignOutComponent";

export default async function Home() {
  const session = await auth();
  const isAuthenticated = !!session?.user;

  return (
    <div>
      <SessionWrapper>
        {isAuthenticated ? <SignOutPage /> : <SignInPage />}
      </SessionWrapper>
    </div>
  );
}
