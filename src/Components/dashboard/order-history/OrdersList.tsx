import Link from "next/link";
import { FC } from "react"
import { RiCustomerService2Line, RiExternalLinkFill } from "react-icons/ri";


const OrdersList : FC= () : JSX.Element => {
    return (
        <div className="order-list">
            <div className="list-top">
                <span className={`order-id bg-[#0038FF]`}>ID 37111</span>
                <p className="order-title">Instagram Followers | 15 Day Refill | Instant | Max 100k</p>
                <Link href={'/'} className="list-link">
                    <RiExternalLinkFill size={22} />
                    https://isntagram-link.dev
                </Link>
                <span className="order-date">2022-09-24 03:03:28</span>
                <span className={`order-id bg-[#0038FF]`}>Pending</span>
            </div>
            <div className="list-bottom">
                <div className="order-info">
                    <span>Quantity: <strong>10000</strong></span>
                    <span>Charge: <strong>1.50</strong></span>
                    <span>Start count</span>
                    <span>Remains: <strong>10000</strong></span>
                </div>
                <Link href={'/dashboard/support'} className="order-support">
                    <RiCustomerService2Line />
                </Link>
            </div>
        </div>
    )
}

export default OrdersList;