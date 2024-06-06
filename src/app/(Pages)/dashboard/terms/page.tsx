'use client';
import Instruction from "@/Components/dashboard/Instruction";
import Privacy from "@/Components/dashboard/terms/Privacy";
import Terms from "@/Components/dashboard/terms/Terms";
import UsageAgreement from "@/Components/dashboard/terms/UsageAgreement";
import { FC, useState } from "react";
import { RiFileTextFill } from "react-icons/ri";

const Page : FC = () : JSX.Element => {
    const [switchBtn, setSwitchBtn] = useState('Terms');
    return (
        <div className="page">
            <Instruction
                icon={<RiFileTextFill />}
                title="Terms of Service for GrowSmmPanel"
                text="Explore the comprehensive terms of service governing your use of GrowSmmPanel, the leading smm panel. Learn about our policies, guidelines, and your rights as a valued user."
            />
            <div className="my-[24px]">
                <div className="order-switch w-max p-2.5">
                    <button 
                        className={`${ switchBtn === 'Terms' ? 'active' : ''}`}
                        onClick={() => setSwitchBtn('Terms')}
                    >Terms</button>
                    <button 
                        className={`${ switchBtn === 'Privacy' ? 'active' : ''}`}
                        onClick={() => setSwitchBtn('Privacy')}
                    >Privacy</button>
                    <button 
                        className={`${ switchBtn === 'Usage Agreement' ? 'active' : ''}`}
                        onClick={() => setSwitchBtn('Usage Agreement')}
                    >History</button>
                </div>
            </div>
            {switchBtn === 'Terms' ? <Terms /> : switchBtn === 'Privacy' ? <Privacy /> : <UsageAgreement />}
        </div>
    )
}

export default Page;