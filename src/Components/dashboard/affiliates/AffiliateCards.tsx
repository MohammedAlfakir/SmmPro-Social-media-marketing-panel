import { FC } from "react";

const AffiliateCards : FC = () : JSX.Element => {
    return (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-6">
            <div className="affiliate-card w-full overflow-hidden">
                <div className="px-4 py-5 sm:p-6">
                    <h3 className="text-lg font-medium leading-6 text-[#f8f8f8]">
                        Referral link
                    </h3>
                    <p className="mt-3 max-w-2xl text-sm text-gray-300">    
                        https://growsmmpanel.com/ref/assmi 
                    </p>
                </div>
            </div>
            <div className="affiliate-card w-full overflow-hidden">
                <div className="px-4 py-5 sm:p-6">
                    <h3 className="text-lg font-medium leading-6 text-[#f8f8f8]">
                        Commission rate
                    </h3>
                    <p className="mt-3 max-w-2xl text-sm text-gray-300">
                        3%
                    </p>
                </div>
            </div>
            <div className="affiliate-card w-full overflow-hidden">
                <div className="px-4 py-5 sm:p-6">
                    <h3 className="text-lg font-medium leading-6 text-[#f8f8f8]">
                        Minimum payout
                    </h3>
                    <p className="mt-3 max-w-2xl text-sm text-gray-300">
                        $5.00
                    </p>
                </div>
            </div>
        </div>
    )
}

export default AffiliateCards;