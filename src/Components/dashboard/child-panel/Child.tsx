import { FC } from "react";
import ChildPanelForm from "../forms/ChildPanelForm";

const  Resell: FC = () : JSX.Element => {
    return (
        <div className="order add-funds resell">
            <div className="order-top">
                <h4 className="text-lg font-semibold tracking-wider">
                    Apply Resell Panel
                </h4>
            </div>
            <div className="order-content">
                <div className="order-content">
                    <ChildPanelForm />
                </div>
            </div>
        </div>
    )
}

export default Resell;