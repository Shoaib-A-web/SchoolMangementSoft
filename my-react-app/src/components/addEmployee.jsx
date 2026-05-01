import { useState } from "react";

function AddEmployee() {
    const [showPopup, setShowPopup] = useState(false);

    return (
        <>
            {/* Buttons */}
            <div className="flex justify-center items-center h-screen">
                <div className="flex flex-col gap-8 bg-white p-4 rounded-xl md:w-1/2">
                    
                    <button 
                        onClick={() => setShowPopup(true)}
                        className="px-6 py-2 bg-red-400 text-white rounded hover:bg-red-500"
                    >
                        Add Staff
                    </button>

                    <button className="px-6 py-2 bg-red-400 text-white rounded hover:bg-red-500">
                        Add Teacher
                    </button>

                    <button className="px-6 py-2 bg-red-400 text-white rounded hover:bg-red-500">
                        Add Guard
                    </button>
                </div>
            </div>

            {/* Popup */}
            {showPopup && (
                <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
                    
                    <div className="bg-white p-6 rounded-xl w-96 shadow-lg">
                        <h2 className="text-lg font-semibold mb-4">
                            Add Staff
                        </h2>

                        <p className="mb-4">This is a popup like alert box</p>

                        <div className="flex justify-end gap-2">
                            <button
                                onClick={() => setShowPopup(false)}
                                className="px-4 py-2 bg-gray-300 rounded"
                            >
                                Cancel
                            </button>

                            <button
                                onClick={() => {
                                    alert("Submitted!");
                                    setShowPopup(false);
                                }}
                                className="px-4 py-2 bg-red-400 text-white rounded"
                            >
                                Submit
                            </button>
                        </div>
                    </div>

                </div>
            )}
        </>
    );
}

export default AddEmployee;