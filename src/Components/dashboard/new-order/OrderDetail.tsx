import { FC } from "react";
import { RiAlarmWarningLine, RiCheckLine, RiSoundModuleLine } from "react-icons/ri";

const OrderDetail : FC = () : JSX.Element =>{
    return (
        <div className="order">
            <div className="order-top">
                <h4 className="font-semibold tracking-wider text-sm">
                    4553 - 🔵 TrustPilot Custom Reviews | 30 Day Refill | 5 Stars | Max 1K | Provided 
                    By US! | - $3500.00
                </h4>
            </div>
            <div className="order-content">
                <div className="order-details flex justify-between items-start">
                    <div className="order-detail">
                        <p className="font-xs">
                            Guarantee
                        </p>
                        <div className="o-detail">
                            <div className="quality-icon">
                                <RiAlarmWarningLine
                                    color="#f8f8f8"
                                />
                            </div>
                            <RiCheckLine className="text-green-600 text-2xl font-extrabold" />
                            30 Day
                        </div>
                    </div>
                    <div className="order-detail">
                        <p className="font-xs">
                            Speed
                        </p>
                        <div className="o-detail">
                            <div className="quality-icon">
                                <RiSoundModuleLine
                                    color="#f8f8f8"
                                />
                            </div>
                            200 Daily
                        </div>
                    </div>
                </div>
                <div className="order-desc mt-5">
                        <p className="">
                            Description
                        </p>
                        <div className="o-detail">
                        🌴 Trust Reviews Services <br />
                        🌎 Geo: Global <br />
                        ⌚️ Start Time: 0-12 Hours <br />
                        🔼 Max: 1000 <br />
                        <br />
                        🔵 ELITE SERVICE : Our Premium tier offers the best-in-class services, created through organic methods, ensuring a stable and reliable performance. With Elite services, you can expect top-notch quality without any drops, making it the most expensive but highly worthwhile option for a seamless experience.Services can %100 attract your organic engagement.
                        <br />
                        <br />
                        ⚠️ The profile must be set to "public" or the order will don't start. After the completion, you can close it again.
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default OrderDetail;