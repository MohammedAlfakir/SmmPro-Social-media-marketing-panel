import NotSupported from "@/Components/dashboard/NotSupported";
import SearchOrdersHistory from "@/Components/dashboard/order-history/SearchOrdersHistory";
import UpdateList from "@/Components/dashboard/updates/UpdateList";
import { FC } from "react";

const Update : FC = () : JSX.Element => {
    return (
        <div className="page">
            <SearchOrdersHistory />

            <section className="mt-4">
                <UpdateList />
            </section>
        </div>
    )
}

export default Update;