import Instruction from "@/Components/dashboard/Instruction";
import AffiliateCards from "@/Components/dashboard/affiliates/AffiliateCards";
import HowItWorks from "@/Components/dashboard/affiliates/HowItWorks";
import ReferenceDetails from "@/Components/dashboard/affiliates/ReferenceDetails";
import { FC } from "react";
import { RiStarSmileLine } from "react-icons/ri";

const Affiliates : FC = () : JSX.Element => {
    return (
        <div className="page">
            <Instruction
                icon={<RiStarSmileLine />}
                title="Affiliates"
                text="Recommend us to your friends and earn balance."
            />

            <AffiliateCards />

            <section className="mt-8 page-container">
                <ReferenceDetails />

                <HowItWorks />
            </section>
        </div>
    )
}

export default Affiliates;