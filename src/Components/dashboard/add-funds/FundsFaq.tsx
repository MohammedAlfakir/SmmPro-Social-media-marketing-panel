'use client';
import { FC, useState } from "react";
import { RiAddFill } from "react-icons/ri";

const FundsFaq : FC = () : JSX.Element => {
    const paymentFaq  = [ 
        {
            id: 1,
            summary: 'Credit Card',
            details: 'We have 3 credit card payment options for you. You can check them from Left Bar.',
        },
        {
            id: 2,
            summary: 'Crypto Payment',
            details: 'Spotify panel always encourage its costumer to pay via crypto. We add %3 dfs for all kind of crypto payment.',
        },
        {
            id: 3,
            summary: 'Payeer',
            details: 'If you make payment via payeer, you will gain %3 extra bonus.',
        },
        {
            id: 4,
            summary: 'Africa Payment',
            details: 'We have 3 credit card payment options for you. You can check them from Left Bar.',
        },
        {
            id: 5,
            summary: 'PayPal',
            details: 'We are ready to accept your paypal payment. Please reach our support team for more details.',
        }
    ];

    const [isActive, setIsActive] = useState<{status: boolean, key?: number}>({
        status: false,
        key: 0,
    });

    const handleToggle = (key: number) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            });
        } else {
            setIsActive({
                status: true,
                key,
            });
        }
    };

    return (
        <ul className="payment-method">
            {
                paymentFaq.map((item) => (
                    <li key={item.id} onClick={() => handleToggle(item.id)}>
                        <details>
                            <summary className="flex justify-between items-center p-4">
                                {item.summary}
                                <RiAddFill
                                    size={20} 
                                    className={`transition-all ${(isActive.key === item.id) ? 'rotate-45' : 'rotate-0'}`} />
                            </summary>
                            <p className="pt-4 px-4">{item.details}</p>
                        </details>
                    </li>
                ))
            }  
		</ul>
    )
}

export default FundsFaq;