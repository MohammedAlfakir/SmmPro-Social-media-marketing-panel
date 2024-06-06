import SearchOrdersHistory from "@/Components/dashboard/order-history/SearchOrdersHistory";
import ServicesList from "@/Components/dashboard/services/ServicesList";
import { FC } from "react";

const Services : FC = () : JSX.Element => {
    return (
        <div className="page">
            <SearchOrdersHistory />

            <section className="services">
                <ServicesList />
            </section>
        </div>
    )
}

export default Services;