'use client';
import { FC, useState } from "react";
import { RiArrowDropDownLine, RiFilter3Line } from "react-icons/ri";
import SearchForm from "../forms/SearchForm";

const SearchOrdersHistory : FC = () : JSX.Element => {
    const [showFilterItems, setShowFilterItems] = useState<boolean>(false);
    return (
        <div className="search">
            <button className="search-btn" onClick={() => setShowFilterItems(!showFilterItems)}>
                <RiFilter3Line className="font-xl" />
                Filter Orders
                <RiArrowDropDownLine className="font-xl" />

                {showFilterItems && (
                    <ul className="account-info">
                        <li
                            className="p-2"
                        >
                            All
                        </li>
                        <li
                            className="p-2"
                        >
                            Pending
                        </li>
                        <li
                            className="p-2"
                        >
                            In progress
                        </li>
                        <li
                            className="p-2"
                        >
                            Completed
                        </li>
                        <li
                            className="p-2"
                        >
                            Partial
                        </li>
                        <li
                            className="p-2"
                        >
                            Processing
                        </li>
                        <li
                            className="p-2"
                        >
                            Canceled
                        </li>
                    </ul>
                )}
            </button>

            <SearchForm />
        </div>
    )
}

export default SearchOrdersHistory;