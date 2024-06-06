import { SignUp } from "@clerk/nextjs";
import Header from "@/Components/LandingPage/Header/Header";

export default function Page() {
  return (
    <>
      <Header />
      <div className="flex pt-36 pb-10 items-center flex-col gap-10 sign_bg h-full">
        <SignUp path="/sign-up" />
      </div>
    </>
  );
}
