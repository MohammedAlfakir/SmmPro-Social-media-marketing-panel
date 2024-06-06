'use client';
import { FC, useState } from "react";
import { RiBookmark3Fill } from "react-icons/ri";
import ServiceDetail from "./ServiceDetail";

const ServicesList : FC = () : JSX.Element => {
    const [showDetail, setShowDetail] = useState<boolean>(false);
    
    return (
        <div className="services-list">
            <div className="services-top">
                <h2 className="service-title">
                🎯 Provided By GSP! ( Always Stable, Best Prices! )
                </h2>
            </div>
            <div className="services-content">
                <table>
                    <thead>
                        <tr>
                            <th>Fav</th>
                            <th>ID</th>
                            <th>Service</th>
                            <th>Rate per 1000</th>
                            <th>Min - Max</th>
                            <th>Details</th>
                        </tr>
                    </thead>
                    <tbody className="mt-6">
                        <tr>
                            <td><span className="quality-icon"><RiBookmark3Fill /></span></td>
                            <td>4555</td>
                            <td className="min-w-80">🔵 TrustPilot Custom Reviews | 30 Day Refill | 5 Stars | Max 1K | Provided By US! |</td>
                            <td>$3500.00</td>
                            <td><span className="text-green-500">1</span> - <span className="text-red-500">1000</span></td>
                            <td><button className="view-detail" onClick={() => setShowDetail(!showDetail)}>View</button></td>
                        </tr>
                        <tr>
                            <td><span className="quality-icon"><RiBookmark3Fill /></span></td>
                            <td>4555</td>
                            <td className="min-w-80">🔵 TrustPilot Custom Reviews | 30 Day Refill | 5 Stars | Max 1K | Provided By US! |</td>
                            <td>$3500.00</td>
                            <td><span className="text-green-500">1</span> - <span className="text-red-500">1000</span></td>
                            <td><button className="view-detail" onClick={() => setShowDetail(!showDetail)}>View</button></td>
                        </tr>
                        <tr>
                            <td><span className="quality-icon"><RiBookmark3Fill /></span></td>
                            <td>4555</td>
                            <td className="min-w-80">🔵 TrustPilot Custom Reviews | 30 Day Refill | 5 Stars | Max 1K | Provided By US! |</td>
                            <td>$3500.00</td>
                            <td><span className="text-green-500">1</span> - <span className="text-red-500">1000</span></td>
                            <td><button className="view-detail" onClick={() => setShowDetail(!showDetail)}>View</button></td>
                        </tr>
                        <tr>
                            <td><span className="quality-icon"><RiBookmark3Fill /></span></td>
                            <td>4555</td>
                            <td className="min-w-80">🔵 TrustPilot Custom Reviews | 30 Day Refill | 5 Stars | Max 1K | Provided By US! |</td>
                            <td>$3500.00</td>
                            <td><span className="text-green-500">1</span> - <span className="text-red-500">1000</span></td>
                            <td><button className="view-detail" onClick={() => setShowDetail(!showDetail)}>View</button></td>
                        </tr>
                        <tr>
                            <td><span className="quality-icon"><RiBookmark3Fill /></span></td>
                            <td>4555</td>
                            <td className="min-w-80">🔵 TrustPilot Custom Reviews | 30 Day Refill | 5 Stars | Max 1K | Provided By US! |</td>
                            <td>$3500.00</td>
                            <td><span className="text-green-500">1</span> - <span className="text-red-500">1000</span></td>
                            <td><button className="view-detail" onClick={() => setShowDetail(!showDetail)}>View</button></td>
                        </tr>
                        <tr>
                            <td><span className="quality-icon"><RiBookmark3Fill /></span></td>
                            <td>4555</td>
                            <td className="min-w-80">🔵 TrustPilot Custom Reviews | 30 Day Refill | 5 Stars | Max 1K | Provided By US! |</td>
                            <td>$3500.00</td>
                            <td><span className="text-green-500">1</span> - <span className="text-red-500">1000</span></td>
                            <td><button className="view-detail" onClick={() => setShowDetail(!showDetail)}>View</button></td>
                        </tr>
                        <tr>
                            <td><span className="quality-icon"><RiBookmark3Fill /></span></td>
                            <td>4555</td>
                            <td className="min-w-80">🔵 TrustPilot Custom Reviews | 30 Day Refill | 5 Stars | Max 1K | Provided By US! |</td>
                            <td>$3500.00</td>
                            <td><span className="text-green-500">1</span> - <span className="text-red-500">1000</span></td>
                            <td><button className="view-detail" onClick={() => setShowDetail(!showDetail)}>View</button></td>
                        </tr>
                        <tr>
                            <td><span className="quality-icon"><RiBookmark3Fill /></span></td>
                            <td>4555</td>
                            <td className="min-w-80">🔵 TrustPilot Custom Reviews | 30 Day Refill | 5 Stars | Max 1K | Provided By US! |</td>
                            <td>$3500.00</td>
                            <td><span className="text-green-500">1</span> - <span className="text-red-500">1000</span></td>
                            <td><button className="view-detail" onClick={() => setShowDetail(!showDetail)}>View</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            { showDetail && <ServiceDetail show={showDetail} setShow={setShowDetail} /> }
        </div>
    )
}

export default ServicesList;