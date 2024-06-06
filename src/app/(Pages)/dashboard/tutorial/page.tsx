import Instruction from "@/Components/dashboard/Instruction";
import VideoTutorial from "@/Components/dashboard/tutorial/VideoTutorial";
import { FC } from "react";
import { RiFileTextFill } from "react-icons/ri";

const Tutorial : FC = () : JSX.Element => {
    return (
        <div className="page">
            <Instruction
                icon={<RiFileTextFill />}
                title="Tutorial (How to use GrowSmmPanel)"
                text="You can watch our tutorial video to learn how to use GrowSmmPanel."
            />

            <section className="w-full tutorial">
                <VideoTutorial />
            </section>
        </div>
    )
}

export default Tutorial;