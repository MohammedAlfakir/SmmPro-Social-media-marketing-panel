import { FC } from "react";
import Instruction from "@/Components/dashboard/Instruction";
import { RiStore3Line } from "react-icons/ri";
import ChildInformation from "@/Components/dashboard/child-panel/ChildInformation";
import Resell from "@/Components/dashboard/child-panel/Child";

const ChildPanel : FC = () : JSX.Element => {
    return (
        <div className="page">
            <Instruction
                icon={<RiStore3Line />}
                title="Child Panel"
                text="Resell our services to your customers on your OWN panel! Automize your earnings!"
            />

            <section className="child page-container">
                <Resell />
                <ChildInformation />
            </section>
        </div>
    )
}

export default ChildPanel;