import { useState } from "react";
import { Outlet } from "react-router-dom";

import Sidebar from "../components/Sidebar";
import TopBar from "../components/TopBar";

const MainLayOut= ()=>{
    const [sideOpen, setSideOpen] = useState(false);;;           // downloaded content while it is installed
    const setsideToggle= () => setSideOpen(!sideOpen)
    
    return(<>
        <div className="flex h-screen">
            {/* LEFT NAVBAR */}
            <Sidebar
            isOpen={sideOpen}
            setSideOpen={setSideOpen}
            />

            {/* RIGHT CONTENT */}
            <div className="flex flex-col w-full">
                {/* top bar */}
                <TopBar isOpen={sideOpen} sideToggle={setsideToggle} />
                <main className="w-fullh h-full overflow-x-auto bg-gray-200 p-2 md:p-4 lg:p-6 ">
                    <Outlet/>
                </main>
            </div>

        </div>
    </>)
}
export default MainLayOut;