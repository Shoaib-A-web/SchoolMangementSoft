import { useState } from "react";
import { Outlet } from "react-router-dom";

import Sidebar from "../components/Sidebar";
import TopBar from "../components/TopBar";

const Main2LayOut= ()=>{
    const [sideOpen, setSideOpen] = useState(false);;;           // downloaded content while it is installed
    const setsideToggle= () => setSideOpen(!sideOpen)
    
    return(<>
        <div className="flex h-screen">
            {/* LEFT NAVBAR */}
            {/* <Sidebar
            isOpen={sideOpen}
            setSideOpen={setSideOpen}
            /> */}
            <div className="w-1/6">
                <aside className="bg-gray-600 text-white  text-sm md:text-lg h-screen flex-shrink-0">
                    <div className="bg-red-400 text-center text-lg md:text-xl lg:text-2xl font-bold p-2 mb-4 md:mb-4">logo</div>
                        <div className="flex flex-col items-center overflow-y-auto  ">
                            <div>option</div>
                            <div>option</div>
                            <div>option</div>
                            <div>option</div>
                            <div>option</div>
                            <div>option</div>
                            <div>option</div>
                            <div>option</div>
                            <div>option</div>
                            <div>option</div>
                            <div>option</div>
                            <div>option</div>
                            <div>option</div>
                            <div>option</div>
                            <div>option</div>
                            <div>option</div>
                            <div>option</div>
                            <div>option</div>
                            <div>option</div>
                            <div>option</div>
                            <div>option</div>
                            <div>option</div>
                            <div>option</div>
                            <div>option</div>
                            <div>option</div>
                            <div>option</div>
                        </div>
                    <div>logout</div>
                </aside>
            </div>

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
export default Main2LayOut;