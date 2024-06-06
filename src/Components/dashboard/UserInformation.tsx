import { FC } from "react";
import { RiAlarmWarningLine, RiCoinsFill, RiMoneyDollarBoxFill, RiStarFill, RiWallet3Fill } from "react-icons/ri";

const UserInformation : FC = () => {
    return (
        <div>
            <ul className="p-user-info">
                <li>
                    <div className="p-user-info-icon">
                        <RiWallet3Fill
                            color="#f8f8f8"
                            size={24}
                        />
                    </div>
                    <div className="p-user-info-text">
                        <span className="text-lg">
                            $0.00
                        </span>
                        Balance
                    </div>
                </li>
                <li>
                    <div className="p-user-info-icon">
                        <RiMoneyDollarBoxFill
                            color="#f8f8f8"
                            size={24}
                        />
                    </div>
                    <div className="p-user-info-text">
                        <span className="text-lg">
                            $0.00
                        </span>
                        Spent
                    </div>
                </li>
                <li>
                    <div className="p-user-info-icon">
                        <RiStarFill
                            color="#f8f8f8"
                            size={24}
                        />
                    </div>
                    <div className="p-user-info-text">
                        <span className="text-lg">
                            New
                        </span>
                        User rank
                    </div>
                </li>
                <li>
                    <div className="p-user-info-icon">
                        <RiCoinsFill
                            color="#f8f8f8"
                            size={24}
                        />
                    </div>
                    <div className="p-user-info-text">
                        <span className="text-lg">
                            251388
                        </span>
                        Total order
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default UserInformation;