import { FC } from "react";

const ReferenceDetails : FC = () : JSX.Element => {
    return (
        <div className="order reference-details resell">
            <div className="order-top">
                <h4 className="text-lg font-semibold tracking-wider">
                    Reference details
                </h4>
            </div>
            <div className="order-content">
                <p>
                    Visits
                    <span>0</span>
                </p>
                <p>
                    Registrations
                    <span>0</span>
                </p>
                <p>
                    Referrals
                    <span>0</span>
                </p>
                <p>
                    Conversion rate
                    <span>0.00%</span>
                </p>
                <p>
                    Total earnings
                    <span>$0.00</span>
                </p>
                <p>
                    Available earnings
                    <span>$0.00</span>
                </p>

            </div>
        </div>
    )
}

export default ReferenceDetails;