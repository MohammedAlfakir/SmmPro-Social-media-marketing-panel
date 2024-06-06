'use client';
import React, { FC, useState } from "react";
import Sidebar from "@/Components/dashboard/SideBar";
import DashboardHeader from "@/Components/dashboard/DashboardHeader";

const HeaderAndSideBar : FC = () : JSX.Element => {
    const [open, setOpen] = useState(false);

    return (
        <div
            className={`relative ${open ? 'sidebar-active' : ''}`}
        >
            <Sidebar 
                open={open}
                setOpen={setOpen} 
            />

            <DashboardHeader
                open={open}
                setOpen={setOpen}
            />
        </div>
    );
}

export default HeaderAndSideBar;