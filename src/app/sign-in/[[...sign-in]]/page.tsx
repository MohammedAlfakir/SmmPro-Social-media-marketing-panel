import { SignIn } from "@clerk/nextjs";
import Header from "@/Components/LandingPage/Header/Header";
export default function Page() {
  return (
    <>
      <Header />
      <div className="flex pt-36 items-center flex-col sign_bg h-lvh">
        <SignIn path="/sign-in" />
      </div>
    </>
  );
}
