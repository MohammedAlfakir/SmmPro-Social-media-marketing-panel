import { FC } from "react"
import { RiExchangeDollarFill } from "react-icons/ri";
import Instruction from "@/Components/dashboard/Instruction";
import Funds from "@/Components/dashboard/add-funds/Funds";
import FundsFaq from "@/Components/dashboard/add-funds/FundsFaq";

const addFunds : FC = () : JSX.Element => {
    return (
        <div className="page">
            <Instruction
                icon={<RiExchangeDollarFill />}
                title="Supporting Payment Methods"
                text="Please don't hesitate to contact with us for your payment questions. We are always at your service."
            />

            <div className="page-container">
                <Funds />

                <FundsFaq />
            </div>
        </div>
    )
}

export default addFunds;