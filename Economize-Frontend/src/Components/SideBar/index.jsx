import React from "react";
import Dashboard from "../Dashboard.jsx";
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined';
import MarkChatUnreadOutlinedIcon from '@mui/icons-material/MarkChatUnreadOutlined';
import PollOutlinedIcon from '@mui/icons-material/PollOutlined';
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined';
import SmsOutlinedIcon from '@mui/icons-material/SmsOutlined';
import DonutSmallOutlinedIcon from '@mui/icons-material/DonutSmallOutlined';
import IntegrationInstructionsOutlinedIcon from '@mui/icons-material/IntegrationInstructionsOutlined';

export default function Sidebar() {
    return (
        <div className="flex flex-col md:flex-row">
            <div className="flex flex-col h-screen p-3 bg-white shadow w-60 pt-4">
                <div className="space-y-3">
                    <div className="flex items-center">
                        <img className="pl-3 h-20" src="https://assets.website-files.com/600afabc21c1827d25ce63dd/601f0cd996ebfbac7a1d687e_Branding.svg" alt="Logo" />
                    </div>
                    <div className="flex items-center">
                        <div className="relative max-w-sm px-1">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="absolute top-0 bottom-0 w-5 h-5 my-auto text-gray-400 left-3"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                />
                            </svg>
                            <input
                                type="text"
                                className="w-full pl-8 py-2 bg-blue-50 border rounded-full"
                                placeholder="Search..."
                            />
                        </div>
                    </div>
                    <div className="flex items-center">
                        <div className="w-full pl-3 py-1  border rounded-full flex">
                            <span className="color-blue-400">
                                <DashboardOutlinedIcon size={30} style={{ color: "#0e7490" }} />
                            </span>
                            <span className="pt-0.5 text-sky-500 font-bold">Dashboard</span>
                        </div>
                    </div>
                    <div className="flex-1">
                        <ul className="pt-2 pb-4 space-y-1 text-sm">
                            <li className="rounded-sm p-1.2">
                                <button className="flex items-center p-2 space-x-3 rounded-md  hover:bg-blue-200 focus:outline-none">
                                    <MarkChatUnreadOutlinedIcon />
                                    <span>Conversations</span>
                                </button>
                            </li>
                            <li className="rounded-sm p-1.2">
                                <button className="flex items-center p-2 space-x-3 rounded-md  hover:bg-blue-200 focus:outline-none">
                                    <TuneOutlinedIcon />
                                    <span>Automations</span>
                                </button>
                            </li>
                            <li className="rounded-sm p-1.2">
                                <button className="flex items-center p-2 space-x-3 rounded-md  hover:bg-blue-200 focus:outline-none">
                                    <PollOutlinedIcon />
                                    <span>Campaigns</span>
                                </button>
                            </li>
                            <li className="rounded-sm p-1.2">
                                <button className="flex items-center p-2 space-x-3 rounded-md  hover:bg-blue-200 focus:outline-none">
                                    <ForumOutlinedIcon />
                                    <span>Popup</span>
                                </button>
                            </li>
                            <li className="rounded-sm p-1.2">
                                <button className="flex items-center p-2 space-x-3 rounded-md  hover:bg-blue-200 focus:outline-none">
                                    <SmsOutlinedIcon />
                                    <span>Live Chat</span>
                                </button>
                            </li>
                            <li className="rounded-sm p-1.2">
                                <button className="flex items-center p-2 space-x-3 rounded-md hover:bg-blue-200 focus:outline-none">
                                    <DonutSmallOutlinedIcon />
                                    <span>Segments</span>
                                </button>
                            </li>
                            <li className="rounded-sm p-1.2">
                                <button className="flex items-center p-2 space-x-3 rounded-md  hover:bg-blue-200 focus:outline-none">
                                    <IntegrationInstructionsOutlinedIcon />
                                    <span>Integrations</span>
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <Dashboard />
        </div>
    );
}
