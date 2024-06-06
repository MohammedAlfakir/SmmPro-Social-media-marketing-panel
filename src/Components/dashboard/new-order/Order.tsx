'use client';
import { FC, useState } from "react";
import { RiAppleFill, RiAppleLine, RiFacebookCircleLine, RiFacebookLine, RiInstagramLine, RiSoundcloudFill, RiSpotifyFill, RiSpotifyLine, RiTelegramLine, RiTiktokLine, RiTwitterXLine, RiYoutubeFill, RiYoutubeLine } from "react-icons/ri";
import OrderForm from "../forms/OrderForm";
import Link from "next/link";

const Order : FC = () : JSX.Element => {
    const [switchBtn, setSwitchBtn] = useState<string>('new order');

    return (
        <div className="order">
            <div className="order-top">
                <h4 className="text-lg font-semibold tracking-wider">
                    New order
                </h4>

                <div className="order-switch">
                    <button 
                        className={`${ switchBtn === 'new order' ? 'active' : ''}`}
                        onClick={() => setSwitchBtn('new order')}
                    >New Order</button>
                    <button 
                        className={`${ switchBtn === 'favorites' ? 'active' : ''}`}
                        onClick={() => setSwitchBtn('favorites')}
                    >Favorites</button>
                </div>
            </div>
            <div className="order-content">

                <div className="order-content">
                    {switchBtn === 'new order' ? (
                        <>
                            <div className="order-category">
                                <button>
                                    <RiInstagramLine />
                                </button>
                                <button>
                                    <RiFacebookLine />
                                </button>
                                <button>
                                    <RiTwitterXLine />
                                </button>
                                <button>
                                    <RiTelegramLine />
                                </button>
                                <button>
                                    <RiAppleFill />
                                </button>
                                <button>
                                    <RiSpotifyFill />
                                </button>
                                <button>
                                    <RiYoutubeFill />
                                </button>
                                <button>
                                    <RiTiktokLine />
                                </button>
                                <button>
                                    <RiSoundcloudFill />
                                </button>
                            </div>
                            
                            <OrderForm />
                        </>
                    ) : 
                        <div className="order-favorite">
                            You have not added any services to favorites. You can add the desired service 
                            to your favorites, using the <Link href={'/dashboard/services'} className="text-gray-500 underline">Services List</Link>.
                        </div>
                    }
                </div>

            </div>
        </div>
    )
}

export default Order;