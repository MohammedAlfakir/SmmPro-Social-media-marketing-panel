'use client';
import { FC, useState } from "react";


const api_block = [
    {
        title: "default",
        action: "add",
        service: "service ID",
        link: "link to page",
        quantity: "needed quantity",
        runs: "Runs of deliver",
        interval: "interval in minutes",
    },
    {
        title: "Package",
        action: "add",
        service: "service ID",
        link: "link to page",
    },
    {
        title: "Custom Comments",
        action: "add",
        service: "service ID",
        link: "link to page",
        comments: "Comments list separated by \r\n or \n",
    },
    {
        title: "Mention with hashtags",
        action: "add",
        service: "service ID",
        link: "link to page",
        quantity: "needed quantity",
        usernames: "usernames list separated by \r\n or \n",
        hashtags: "hashtags list separated by \r\n or \n",
    },
    {
        title: "Mentions Custom List",
        action: "add",
        service: "service ID",
        link: "link to page",
        usernames: "usernames list separated by \r\n or \n",
    },
    {
        title: "Mentions User Followers",
        action: "add",
        service: "service ID",
        link: "link to page",
        usernames: "usernames list separated by \r\n or \n",
    },
    {
        title: "Mentions Media Likers",
        action: "add",
        service: "service ID",
        link: "link to page",
        quantity: "needed quantity",
        media: "Media URL to scrape likers from",
    },
    {
        title: "Comment Likes",
        action: "add",
        service: "service ID",
        link: "link to page",
        quantity: "needed quantity",
        usernames: "Username of the comment owner",
    },
    {
        title: "Poll",
        action: "add",
        service: "service ID",
        link: "link to page",
        quantity: "needed quantity",
        answer_number: "Answer number of the poll",
    },
    {
        title: "Invites from Groups",
        action: "add",
        service: "service ID",
        link: "link to page",
        quantity: "needed quantity",
        groups: "Groups list separated by \r\n or \n",
    },
    {
        title: "Subscriptions",
        action: "add",
        service: "service ID",
        username: "Username",
        min: "Quantity min",
        max: "Quantity max",
        posts: "Use this parameter if you want to limit the number of new (future) posts that will be parsed and for which orders will be created. If posts parameter is not set, the subscription will be created for an unlimited number of posts",
        old_posts: "Number of existing posts that will be parsed and for which orders will be created, can be used if this option is available for the service.",
        delay: "Delay in minutes. Possible values: 0, 5, 10, 15, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 360, 420, 480, 540, 600",
        expiry: "Expiry date. Format d/m/Y"
    }
];

/**
 * Component for displaying API details for adding orders.
 * Users can select the title of the API and see the parameters and descriptions for that title.
 * After selecting the title, the user can see an example response from the API.
 */
const OrdersApiDetails: FC = (): JSX.Element => {
    // State for storing the selected title
    const [selectedTitle, setSelectedTitle] = useState<string>("default");

    // Filtered API blocks based on the selected title
    const filteredBlocks = selectedTitle
        ? api_block.filter(item => item.title === selectedTitle)
        : api_block;

    /**
     * Event handler for when the selected title changes.
     * Updates the selected title in state.
     * @param {React.ChangeEvent<HTMLSelectElement>} e - The event object
     */
    const handleTitleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedTitle(e.target.value);
    };

    return (
        <section className="api-details">
            <h2 className="text-2xl font-bold mb-4">Add Orders</h2>
            <div className="w-1/5 my-4">
                {/* Select input for selecting the title of the API */}
                <select 
                    className="order-input mt-6"
                    id="titleSelect" onChange={handleTitleChange} value={selectedTitle}>
                    <option value="" disabled>Select Title</option>
                    {api_block.map((item, index) => (
                        <option key={index} value={item.title}>
                            {item.title}
                        </option>
                    ))}
                </select>
            </div>
            <div>
                <div className="api-block">
                    {/* Display the parameters and descriptions for each filtered API block */}
                    {filteredBlocks.map(block => (
                        <table className="api-table">
                            <thead>
                                <tr>
                                    <th>Parameters</th>
                                    <th>Description</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Key</td>
                                    <td>Your Api Key</td>
                                </tr>
                                {Object.entries(block).map(([key, value]) => (
                                    key === 'title' // Don't display the title parameter
                                    ? null
                                    : <tr key={key}>
                                        <td>{key}</td>
                                        <td>{value}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    ))}
                </div>
                <p className="font-semibold py-4">Example response</p>
                <pre className="w-full bg-[#003dfd2a] rounded-xl">
                    {/* Example response from the API */}
                    {`
                        {
                            "order": 23501
                        }
                    `}
                </pre>
            </div>
        </section>
    );
};

export default OrdersApiDetails;