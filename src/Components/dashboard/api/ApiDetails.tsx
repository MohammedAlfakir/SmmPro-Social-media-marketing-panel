import { FC } from "react";

/**
 * The props interface for the ApiDetails component.
 * 
 * @interface
 * @property {Object} api_detail - The API details object.
 * @property {number} api_detail.id - The ID of the API.
 * @property {string} api_detail.title - The title of the API.
 * @property {string} api_detail.action - The action of the API.
 * @property {string} api_detail.example - The example of the API.
 * @property {string} [api_detail.param_key] - The parameter key of the API.
 * @property {string} [api_detail.param] - The parameter of the API.
 */
interface props {
    // The API details object.
    api_detail: {
        // The ID of the API.
        id: number;
        // The title of the API.
        title: string;
        // The action of the API.
        action: string;
        // The example of the API.
        example: string;
        // The parameter key of the API (optional).
        param_key?: string;
        // The parameter of the API (optional).
        param?: string;
    };

}

/**
 * Component for rendering API details.
 * @param {Object} props - The props object.
 * @param {Object} props.api_detail - The API details object.
 * @param {number} props.api_detail.id - The ID of the API.
 * @param {string} props.api_detail.title - The title of the API.
 * @param {string} props.api_detail.action - The action of the API.
 * @param {string} props.api_detail.example - The example of the API.
 * @param {string} [props.api_detail.param_key] - The parameter key of the API.
 * @param {string} [props.api_detail.param] - The parameter of the API.
 * @returns {JSX.Element} The rendered API details component.
 */
const ApiDetails: FC<props> = ( { api_detail } ) : JSX.Element => {
    // Render the API details
    return (
        <section className="api-details">
            {/* Render the API title */}
            <h2 className="text-2xl font-bold mb-4">{api_detail.title}</h2>
            <div className="api-block">
                {/* Render the API table */}
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
                        <tr>
                            <td>Action</td>
                            <td>{ api_detail.action}</td>
                        </tr>
                        {/* Render the parameter if it exists */}
                        { api_detail.param && (
                            <tr>
                                <td>{ api_detail.param_key}</td>
                                <td>{ api_detail.param}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
            {/* Render the example response */}
            <p className="font-semibold py-4">Example response</p>
            <pre className="w-full bg-[#003dfd2a] rounded-xl">
                {/* Render the example response */}
                { api_detail.example }
            </pre>
        </section>
    );
};

export default ApiDetails;