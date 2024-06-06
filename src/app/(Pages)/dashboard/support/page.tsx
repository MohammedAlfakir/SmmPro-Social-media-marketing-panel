import Instruction from "@/Components/dashboard/Instruction";
import CreateTickets from "@/Components/dashboard/support/CreateTickets";
import TicketsHistory from "@/Components/dashboard/support/TicketsHistory";
import { FC } from "react";
import { RiCustomerService2Line } from "react-icons/ri";

const Support : FC = () => {
    return (
        <div className="page">
            <Instruction
                icon={<RiCustomerService2Line />}
                title="Support Center"
                text="Please don't hesitate to contact with us for your support questions. We are always at your service."
            />

            <div className="page-container mt-[24px]">
                <CreateTickets />

                <TicketsHistory />
            </div>
        </div>
    )
}

export default Support;