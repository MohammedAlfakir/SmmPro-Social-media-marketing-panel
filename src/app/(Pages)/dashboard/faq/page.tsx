import Instruction from "@/Components/dashboard/Instruction";
import FaqQuestions from "@/Components/dashboard/faq/FaqQuestions";
import { FC } from "react";
import { RiQuestionnaireFill } from "react-icons/ri";

const FAQ : FC = () : JSX.Element => {
    return (
        <div className="page">
            <Instruction
                icon={<RiQuestionnaireFill />}
                title="Frequently Asked Questions About Our SMM Panel"
                text="Below you can find the most frequently asked questions and their answers."
            />

            <FaqQuestions />
        </div>
    )
}

export default FAQ;