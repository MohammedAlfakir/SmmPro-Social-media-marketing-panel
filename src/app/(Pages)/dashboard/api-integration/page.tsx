import { FC } from "react";
import Instruction from "@/Components/dashboard/Instruction";
import ApiDetails from "@/Components/dashboard/api/ApiDetails";
import { RiCodeLine } from "react-icons/ri";
import OrdersApiDetails from "@/Components/dashboard/api/OrdersApiDetails";

interface ApiBlock {
    id: number;
    title: string;
    action: string;
    example: string;
    param_key?: string;
    param?: string;
}

const api_block: ApiBlock[] = [
    {
        id: 1,
        title: "Service list",
        action: "services",
        example: `
        [
            {
                "service": 1,
                "name": "Followers",
                "type": "Default",
                "category": "First Category",
                "rate": "0.90",
                "min": "50",
                "max": "10000",
                "refill": true,
                "cancel": true
            },
            {
                "service": 2,
                "name": "Comments",
                "type": "Custom Comments",
                "category": "Second Category",
                "rate": "8",
                "min": "10",
                "max": "1500",
                "refill": false,
                "cancel": true
            }
        ]
        `
    },
    {
        id: 2,
        title: "Order status",
        action: "status",
        param_key: 'Order',
        param: "Order ID",
        example: `
        {
            "charge": "0.27819",
            "start_count": "3572",
            "status": "Partial",
            "remains": "157",
            "currency": "USD"
        }
        `
    },
    {
        id: 3,
        title: "Multiple orders status",
        action: "status",
        param_key: 'Orders',
        param: "Order IDs (separated by a comma, up to 100 IDs)",
        example: `
        {
            "1": {
                "charge": "0.27819",
                "start_count": "3572",
                "status": "Partial",
                "remains": "157",
                "currency": "USD"
            },
            "10": {
                "error": "Incorrect order ID"
            },
            "100": {
                "charge": "1.44219",
                "start_count": "234",
                "status": "In progress",
                "remains": "10",
                "currency": "USD"
            }
        }`
    },
    {
        id: 4,
        title: "Create Refill",
        action: "refill",
        param_key: 'Order',
        param: "Order ID",
        example: `
        {
            "refill": "1"
        }
        `
    },
    {
        id: 5,
        title: "Create multiple refill",
        action: "refill",
        param_key: 'Orders',
        param: "Order IDs (separated by a comma, up to 100 IDs)",
        example: `
        [
            {
                "order": 1,
                "refill": 1
            },
            {
                "order": 2,
                "refill": 2
            },
            {
                "order": 3,
                "refill": {
                    "error": "Incorrect order ID"
                }
            }
        ]
        `
    },
    {
        id: 6,
        title: "Get refill status",
        action: "refill_status",
        param_key: 'Refill',
        param: "Refill ID",
        example: `
        [
            "status": "Completed"
        ]
        `
    },
    {
        id: 7,
        title: "Get multiple refill status",
        action: "refill_status",
        param_key: 'Refills',
        param: "Refill IDs (separated by a comma, up to 100 IDs)",
        example: `
        [
            {
                "refill": 1,
                "status": "Completed"
            },
            {
                "refill": 2,
                "status": "Rejected"
            },
            {
                "refill": 3,
                "status": {
                    "error": "Refill not found"
                }
            }
        ]
        `
    },
    {
        id: 8,
        title: "Create cancel",
        action: "cancel",
        param_key: 'Orders',
        param: "Order IDs (separated by a comma, up to 100 IDs)",
        example: `
        [
            {
                "order": 9,
                "cancel": {
                    "error": "Incorrect order ID"
                }
            },
            {
                "order": 2,
                "cancel": 1
            }
        ]`
    },
    {
        id: 9,
        title: "User balance",
        action: "balance",
        example: `
        {
            "balance": "100.84292",
            "currency": "USD"
        }
        `
    }
];

/**
 * The main page component for the API Integration page.
 * Renders the page content with instructions and API details.
 *
 * @returns The JSX element for the API Integration page.
 */
const Page: FC = (): JSX.Element => {
    return (
        <div className="page">
            {/* Instruction for getting the API key */}
            <Instruction
                icon={<RiCodeLine />} // Icon for the instruction
                title="API" // Title of the instruction
                text="You can get your API key from the My Account page." // Text of the instruction
            />

            {/* API details */}
            <div className="api">
                {/* API URL and HTTP method */}
                <section className="api-block">
                    <table className="api-table">
                        <thead>
                            <tr>
                                <td>HTTP Method</td>
                                <td>POST</td>
                            </tr>
                            <tr>
                                <td>API URL</td>
                                <td>https://growsmmpanel.ma/api/v2</td>
                            </tr>
                            <tr>
                                <td>API KEY</td>
                                <td>Get an API key on the Account page</td>
                            </tr>
                            <tr>
                                <td>Response Format</td>
                                <td>JSON</td>
                            </tr>
                        </thead>
                    </table>
                </section>

                {/* Render the component for displaying API details */}
                <OrdersApiDetails />

                {/* Render the API details for each item in the api_block array */}
                {api_block.map((item) => (
                    <ApiDetails key={item.id} api_detail={item} />
                ))}
            </div>
        </div>
    );
};

export default Page;