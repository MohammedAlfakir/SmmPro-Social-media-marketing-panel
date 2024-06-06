import { FC } from "react";
import { RiCloseLargeLine } from "react-icons/ri";

interface Props {
    open: Boolean
    setOpen: any
}

const Modal : FC<Props> = ({ open, setOpen }) : JSX.Element => {

    return (
        <div className={`modal ${open ? 'modal-active' : ''}`}>
            <div className="modal-top">
                <h3>MTP Service Color Categorization System</h3>
                <RiCloseLargeLine
                    className="cursor-pointer"
                    onClick={() => setOpen(!open)}
                />
            </div>
            <div className="modal-content">
                <p className="modal-content-top">
                    We tag all our services quality with appropriate color tagging in order to simplified 
                    your smm panel experince and services quality. Here's a short and clean explanation for 
                    categorizing our panel's services into three color tiers: Basic (🟡) Medium (🟢) and 
                    Elite (🔵) Services.
                </p>
                <div className="modal-cards flex items-start justify-between">
                    <div className="modal-card">
                        <span className="card-scs bg-[#fff100]">
                            Basic
                        </span>
                        <p className="mt-3">
                            Our Basic tier offers the most affordable BOT services with fairly lower quality. While we strive to provide satisfactory results, please note that there might be occasional drops or slowdown, and we cannot offer any guarantees for this tier.
                        </p>
                    </div>
                    <div className="modal-card">
                        <span className="card-scs bg-[#16c60c]">
                            Medium
                        </span>
                        <p className="mt-3">
                            The Medium tier provides services of moderate quality with the added benefit of refills against any drops. We are committed to ensuring that you receive a stable and consistent experience, backed by our refill policy. Services can be carefully used to attracting organic engagement.
                        </p>
                    </div>
                    <div className="modal-card">
                        <span className="card-scs bg-[#0078d7]">
                            Elite
                        </span>
                        <p className="mt-3">
                            Our Premium tier offers the best-in-class services, created through organic methods, ensuring a stable and reliable performance. With Elite services, you can expect top-notch quality without any drops, making it the most expensive but highly worthwhile option for a seamless experience. Services can %100 attract your organic engagement.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal;