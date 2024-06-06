import Image from "next/image";
import { FC } from "react";

const Welcome: FC = (): JSX.Element => {
  return (
    <section className="welcome">
      <div className="first-circle"></div>
      <div className="s-circle"></div>
      <div className="t-circle"></div>

      <div>
        <h1 className="welcome-title">
          Welcome, <span className="text-[#033cff]">John Doe !</span>
        </h1>
        <p className="welcome-text">
          We are here to give you the best service.
        </p>
      </div>
      <Image
        src={"/minilogo.png"}
        alt={"Welcome Image"}
        width={150}
        height={100}
        className="welcome-image"
      />
    </section>
  );
};

export default Welcome;
