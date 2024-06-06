'use client';
import { FC, useState } from "react"
import { RiAlarmWarningLine } from "react-icons/ri"
import Modal from "./Modal";

const ServicesQuality : FC = () : JSX.Element => {
    const [show, setShow] = useState<Boolean>(false);
    return (
        <>
            <div className="services-quality">
                <div className="quality">
                    <div className="quality-icon">
                        <RiAlarmWarningLine
                            color="#f8f8f8"
                        />
                    </div>
                    <div className="service">
                        <strong>
                            GSP Service Color Categorization System
                        </strong>
                        <div className="service-quality">
                            <span className="lg:pr-3 sm:pr-2 ">🟡 Basic</span>
                            <span className="lg:pr-3 sm:pr-2 ">🟢 Medium</span>
                            <span className="lg:pr-3 sm:pr-2 ">🔵 Elite</span>
                        </div>
                    </div>
                </div>
                <button 
                    className="quality-btn"
                    onClick={() => setShow(!show)}
                >See details</button>
            </div>
            {show && (
                <div className="modal-active">
                    <Modal open={show} setOpen={setShow} />
                </div>
            )}
        </>
    )
}

export default ServicesQuality;