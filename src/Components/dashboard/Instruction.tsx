import Image from "next/image";
import { FC } from "react";

interface Props {
  icon: JSX.Element;
  title: string;
  text: string;
}

const Instruction: FC<Props> = ({ icon, title, text }): JSX.Element => {
  return (
    <section className="welcome instruction relative">
      <div className="first-circle"></div>
      <div className="s-circle"></div>
      <div className="t-circle"></div>
      
      <div className="instruction-container">
        <div className="instruction-icon">{icon}</div>
        <div className="flex items-start justify-center flex-col gap-3">
          <h1 className="welcome-title">{title}</h1>
          <p className="mr-3 text-[#d1d1d1]">{text}</p>
        </div>
      </div>

      <Image
        src={"/minilogo.png"}
        alt={"Welcome Image"}
        width={150}
        height={100}
        className="welcome-image"
        id="welcome-img"
      />
    </section>
  );
};

export default Instruction;
