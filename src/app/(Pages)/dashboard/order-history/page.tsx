import { FC } from "react";
import SearchOrdersHistory from '@/Components/dashboard/order-history/SearchOrdersHistory';
import NoOrder from '@/Components/dashboard/order-history/NoOrder';
import Link from "next/link";
import { RiCustomerService2Line, RiExternalLinkFill, RiExternalLinkLine } from "react-icons/ri";
import OrdersList from "@/Components/dashboard/order-history/OrdersList";

const orderHistory : FC = () : JSX.Element => {
    return (
        <div className="page">
            <SearchOrdersHistory />

            {/* if the user has no orders yet */}
            <NoOrder />

            {/* <ordersList /> */}
            <div>
                <OrdersList />
            </div>
        </div>
    )
}

export default orderHistory;