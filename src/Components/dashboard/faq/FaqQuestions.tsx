'use client';
import { FC, useState } from "react";
import { RiAddFill } from "react-icons/ri";

const FaqQuestions : FC = () : JSX.Element => {
    const firstFaq  = [ 
        {
            id: 1,
            summary: 'Are the followers and likes real?',
            details: 'Yes, we ensure that the followers and likes provided through our SMM panel come from real and active accounts to maintain authenticity.',
        },
        {
            id: 2,
            summary: 'Is it safe to use Morethanpanel?',
            details: 'Yes, our SMM panel operates within the guidelines of social media platforms, which helps maintain the safety and security of your account.',
        },
        {
            id: 3,
            summary: 'How do I make payments on the SMM panel?',
            details: 'We accept various payment methods, including credit/debit cards, PayPal,wise,paytm, perfectmoney, sterlin bank, payoneer and other secure online payment options.',
        },
        {
            id: 4,
            summary: 'How long does it take to see results after purchasing services?',
            details: 'The delivery time varies depending on the type of service you purchase. Typically, you will see results within a few hours to a few days.',
        },
        {
            id: 5,
            summary: 'Do you offer a refund if I\'m not satisfied with the services?',
            details: 'We strive to provide quality services, but if you encounter any issues, please contact our support team, and they will assist you accordingly.',
        }
    ];

    const secondFaq  = [ 
        {
            id: 6,
            summary: 'I have order problem. What should I do?',
            details: 'For all your order problems or requirement, you can open support ticket. ( Click support button on the right bar ) Our support team will respond you in 0-30 minutes.',
        },
        {
            id: 7,
            summary: 'Is there a discount for Resellers or bulk orders?',
            details: 'Yes, we offer discounts for our reseller snad bulk ordrs up to %30. The more you buy, the more you save!',
        },
        {
            id: 8,
            summary: 'Do you have a referral program?',
            details: 'Yes, we offer referral programs where you can earn %3 rewards by referring new customers to our SMM panel. You can check conditions from referal section on the right bar.',
        },
        {
            id: 9,
            summary: 'Can I resell GrowSmmPanel services? ( Child panel )',
            details: 'Yes, we offer reseller ( child panel ) options for those interested in reselling GrowSmmPanel\'s services to their clients.Please check \"resell services\" section on the left bar.',
        },
        {
            id: 10,
            summary: 'Can I get a free trial of your services?',
            details: 'We might offer free trials for certain services. Reach our support team for any ongoing trials.',
        },
        {
            id: 11,
            summary: 'What if I face a drop in followers,likes or any services after purchasing services?',
            details: 'We offer a retention guarantee for certain services.( please read service desc. for refill guarantee services ) If you experience any significant drop within the guarantee period, contact our support team for a refill.',
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
        <section className="page-container">
            <ul className="payment-method">
                {
                    firstFaq.map((item) => (
                        <li key={item.id} onClick={() => handleToggle(item.id)}>
                            <details>
                                <summary className="flex justify-between items-center p-4">
                                    {item.summary}
                                    <RiAddFill
                                        size={20} 
                                        className={`transition-all ${(isActive.key === item.id) ? 'rotate-45' : 'rotate-0'}`} />
                                </summary>
                                <p className="p-4">{item.details}</p>
                            </details>
                        </li>
                    ))
                }  
            </ul>
            <ul className="payment-method">
                {
                    secondFaq.map((item) => (
                        <li key={item.id} onClick={() => handleToggle(item.id)}>
                            <details>
                                <summary className="flex justify-between items-center p-4">
                                    {item.summary}
                                    <RiAddFill
                                        size={20} 
                                        className={`transition-all ${(isActive.key === item.id) ? 'rotate-45' : 'rotate-0'}`} />
                                </summary>
                                <p className="p-4">{item.details}</p>
                            </details>
                        </li>
                    ))
                }  
            </ul>
        </section>
    )
}

export default FaqQuestions;