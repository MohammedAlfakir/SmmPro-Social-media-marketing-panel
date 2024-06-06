import { FC } from "react";

interface props {
    show: Boolean
    setShow: (show: boolean) => void
}
const ServiceDetail : FC<props> = ({ show, setShow }) : JSX.Element => {
    const handleWrapperClick = () => {
        setShow(false);
    }

    const handleModalClick = (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
    }

    return (
        <div className="service-wrapper" onClick={handleWrapperClick}>
            <div className="service-modal" onClick={handleModalClick}>
                <h3 className="service-modal-title">
                    4161 - 🟢 Instagram Followers | Lifetime Guarantee | Speed: 5-10K/Day | Max 10K | Best Seller! |
                </h3>
                <div className="service-modal-content">
                    🌴 Instagram Follower Service
                    <br />
                    <br />
                    🌎 Geo: Global
                    ⌚️ Start Time: 1-6h
                    🔼 Min - Max: 100 - 10.000
                    <br />
                    <br />
                    ⚠️ The profile must be set to "public" or the order will don't start. After the completion, you can close it again.
                    <br />
                    <br />
                    🍺 Link Example: https://www.instagram.com/morethanpanel/
                    <br />
                    <br />
                    MTP SERVICE COLOR CATEGORIZATION SYSTEM
                    <br />
                    <br />
                    🟢 MEDIUM: The Medium tier provides services of moderate quality with the added benefit of refills against any drops. We are committed to ensuring that you receive a stable and consistent experience, backed by our refill policy. Services can be carefully used to attracting organic engagement
                    <br />
                    <br />
                    Refill: Lifetime
                    Speed: 5-10K Daily
                </div>
                <button className="service-modal-btn">
                    Buy Now
                </button>
            </div>
        </div>
    )
}

export default ServiceDetail;