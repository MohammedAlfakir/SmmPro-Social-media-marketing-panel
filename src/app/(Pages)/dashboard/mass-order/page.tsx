'use client';
import Instruction from "@/Components/dashboard/Instruction";
import MassOrderForm from "@/Components/dashboard/forms/MassOrderForm";
import { FC } from "react";
import { RiDashboardHorizontalFill } from "react-icons/ri";

const MassOrder : FC = () : JSX.Element => {
    return (
        <div className="page">
            <Instruction
                icon={<RiDashboardHorizontalFill />}
                title="Mass Order"
                text="Pay attention to the order format when placing your bulk orders."
            />

            <section className="mt-4">
                <MassOrderForm />
            </section>

        </div>
    )
}

export default MassOrder;