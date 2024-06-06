import { FC } from "react";
import Welcome from "@/Components/dashboard/new-order/Welcome";
import ServicesQuality from "@/Components/dashboard/new-order/ServicesQuality";
import Order from "@/Components/dashboard/new-order/Order";
import OrderDetail from "@/Components/dashboard/new-order/OrderDetail";
import UserInformation from "@/Components/dashboard/UserInformation";

const newOrder : FC = () : JSX.Element => {
    return (
        <div className="page">
            <Welcome />

            <UserInformation />

            <ServicesQuality />

            <div className="page-container">
                <Order />
                <OrderDetail />
            </div>

        </div>
    )
}

export default newOrder;