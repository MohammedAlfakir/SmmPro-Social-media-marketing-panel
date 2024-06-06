import { FC } from "react";

const HowItWorks : FC = () : JSX.Element => {
    return (
        <div className="order resell-information">
            <div className="order-top">
                <h4 className="text-lg font-semibold tracking-wider">
                    How does it work?
                </h4>
            </div>
            <div className="order-content">
                <p className="font-light mb-3">
                    The affiliate system, where 3% of the fee paid by people who register to 
                    <b> growsmmpanel.com</b> with your referral link, is put into use, for all balance 
                    adding transactions."
                </p>
                <p className="font-light">
                    All you have to do is add members to <b>growsmmpanel.com</b> via your invitation link. Remember, you 
                    will only earn bonus from memberships that register through the link defined in your account, 
                    there is no invitation limit!
                </p>

            </div>
        </div>
    )
}

export default HowItWorks;