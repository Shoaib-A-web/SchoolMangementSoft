import Img from "../assets/dummy/dummy-user.png"
function Student(){
    const tableclass="w-full table-auto divide-y divide-gray-400 rounded-2 text-xs md:text-sm text-center"
    const theadclass="sticky top-0 w-full"
    const thclass=" px-4 py-2 font-medium text-center text-white bg-gray-600"
    const tbodyclass="divide-y divide-gray-300"
    const trclass="hover:bg-red-100 odd:bg-white even:bg-red-50"
    const tdclass="px-2 py-1 text-gray-700"
    return(<div className="bg-white p-3 rounded-lg shadow-xl">
        <div>
            <h2 className="text-2xl pb-4 text-gray-700 font-semibold">Student List</h2>
        </div>
        <div className="h-96 overflow-x-auto overflow-y-auto  rounded-lg border-2 border-gray-300">
            <table className={tableclass}>
                <thead className={theadclass}>
                    <tr className={trclass}>
                        <th className={thclass}>S.NO</th>
                        <th className={thclass}>Date</th>
                        <th className={thclass}>Image</th>
                        <th className={thclass}>S.id</th>
                        <th className={thclass}>Addmition No.</th>
                        <th className={thclass}>Name</th>
                        <th className={thclass}>Gender</th>
                        <th className={thclass}>Date of birth</th>
                        <th className={thclass}>Class</th>
                        <th className={thclass}>Section</th>
                        <th className={thclass}>Roll No.</th>
                        <th className={thclass}>Father Name</th>
                        <th className={thclass}>Father occupation</th>
                        <th className={thclass}>Full details</th>
                    </tr>
                </thead>
                <tbody className={tbodyclass}>
                    <tr className={trclass}>
                        <td className={tdclass}>1</td>
                        <td className={tdclass}>12/1/22</td>
                        <td className={tdclass}><img className="size-10 rounded-full" src={Img} alt="std" /></td>
                        <td className={tdclass}>21</td>
                        <td className={tdclass}>123553</td>
                        <td className={tdclass}>Sultan</td>
                        <td className={tdclass}>Male</td>
                        <td className={tdclass}>12/1/2000</td>
                        <td className={tdclass}>9</td>
                        <td className={tdclass}>A</td>
                        <td className={tdclass}>33</td>
                        <td className={tdclass}>Salim</td>
                        <td className={tdclass}>Docter</td>
                        <td className={tdclass}><a href="#">Detail</a></td>
                    </tr>
                    <tr className={trclass}>
                        <td className={tdclass}>1</td>
                        <td className={tdclass}>12/1/22</td>
                        <td className={tdclass}><img className="size-10 rounded-full" src={Img} alt="std" /></td>
                        <td className={tdclass}>21</td>
                        <td className={tdclass}>123553</td>
                        <td className={tdclass}>Sultan</td>
                        <td className={tdclass}>Male</td>
                        <td className={tdclass}>12/1/2000</td>
                        <td className={tdclass}>9</td>
                        <td className={tdclass}>A</td>
                        <td className={tdclass}>33</td>
                        <td className={tdclass}>Salim</td>
                        <td className={tdclass}>Docter</td>
                        <td className={tdclass}><a href="#">Detail</a></td>
                    </tr>
                    
                    <tr className={trclass}>
                        <td className={tdclass}>1</td>
                        <td className={tdclass}>12/1/22</td>
                        <td className={tdclass}><img className="size-10 rounded-full" src={Img} alt="std" /></td>
                        <td className={tdclass}>21</td>
                        <td className={tdclass}>123553</td>
                        <td className={tdclass}>Sultan</td>
                        <td className={tdclass}>Male</td>
                        <td className={tdclass}>12/1/2000</td>
                        <td className={tdclass}>9</td>
                        <td className={tdclass}>A</td>
                        <td className={tdclass}>33</td>
                        <td className={tdclass}>Salim</td>
                        <td className={tdclass}>Docter</td>
                        <td className={tdclass}><a href="#">Detail</a></td>
                    </tr>
                    
                    <tr className={trclass}>
                        <td className={tdclass}>1</td>
                        <td className={tdclass}>12/1/22</td>
                        <td className={tdclass}><img className="size-10 rounded-full" src={Img} alt="std" /></td>
                        <td className={tdclass}>21</td>
                        <td className={tdclass}>123553</td>
                        <td className={tdclass}>Sultan</td>
                        <td className={tdclass}>Male</td>
                        <td className={tdclass}>12/1/2000</td>
                        <td className={tdclass}>9</td>
                        <td className={tdclass}>A</td>
                        <td className={tdclass}>33</td>
                        <td className={tdclass}>Salim</td>
                        <td className={tdclass}>Docter</td>
                        <td className={tdclass}><a href="#">Detail</a></td>
                    </tr>
                    
                    <tr className={trclass}>
                        <td className={tdclass}>1</td>
                        <td className={tdclass}>12/1/22</td>
                        <td className={tdclass}><img className="size-10 rounded-full" src={Img} alt="std" /></td>
                        <td className={tdclass}>21</td>
                        <td className={tdclass}>123553</td>
                        <td className={tdclass}>Sultan</td>
                        <td className={tdclass}>Male</td>
                        <td className={tdclass}>12/1/2000</td>
                        <td className={tdclass}>9</td>
                        <td className={tdclass}>A</td>
                        <td className={tdclass}>33</td>
                        <td className={tdclass}>Salim</td>
                        <td className={tdclass}>Docter</td>
                        <td className={tdclass}><a href="#">Detail</a></td>
                    </tr>
                    
                    <tr className={trclass}>
                        <td className={tdclass}>1</td>
                        <td className={tdclass}>12/1/22</td>
                        <td className={tdclass}><img className="size-10 rounded-full" src={Img} alt="std" /></td>
                        <td className={tdclass}>21</td>
                        <td className={tdclass}>123553</td>
                        <td className={tdclass}>Sultan</td>
                        <td className={tdclass}>Male</td>
                        <td className={tdclass}>12/1/2000</td>
                        <td className={tdclass}>9</td>
                        <td className={tdclass}>A</td>
                        <td className={tdclass}>33</td>
                        <td className={tdclass}>Salim</td>
                        <td className={tdclass}>Docter</td>
                        <td className={tdclass}><a href="#">Detail</a></td>
                    </tr>
                    
                    <tr className={trclass}>
                        <td className={tdclass}>1</td>
                        <td className={tdclass}>12/1/22</td>
                        <td className={tdclass}><img className="size-10 rounded-full" src={Img} alt="std" /></td>
                        <td className={tdclass}>21</td>
                        <td className={tdclass}>123553</td>
                        <td className={tdclass}>Sultan</td>
                        <td className={tdclass}>Male</td>
                        <td className={tdclass}>12/1/2000</td>
                        <td className={tdclass}>9</td>
                        <td className={tdclass}>A</td>
                        <td className={tdclass}>33</td>
                        <td className={tdclass}>Salim</td>
                        <td className={tdclass}>Docter</td>
                        <td className={tdclass}><a href="#">Detail</a></td>
                    </tr>
                    
                    <tr className={trclass}>
                        <td className={tdclass}>1</td>
                        <td className={tdclass}>12/1/22</td>
                        <td className={tdclass}><img className="size-10 rounded-full" src={Img} alt="std" /></td>
                        <td className={tdclass}>21</td>
                        <td className={tdclass}>123553</td>
                        <td className={tdclass}>Sultan</td>
                        <td className={tdclass}>Male</td>
                        <td className={tdclass}>12/1/2000</td>
                        <td className={tdclass}>9</td>
                        <td className={tdclass}>A</td>
                        <td className={tdclass}>33</td>
                        <td className={tdclass}>Salim</td>
                        <td className={tdclass}>Docter</td>
                        <td className={tdclass}><a href="#">Detail</a></td>
                    </tr>
                    
                    <tr className={trclass}>
                        <td className={tdclass}>1</td>
                        <td className={tdclass}>12/1/22</td>
                        <td className={tdclass}><img className="size-10 rounded-full" src={Img} alt="std" /></td>
                        <td className={tdclass}>21</td>
                        <td className={tdclass}>123553</td>
                        <td className={tdclass}>Sultan</td>
                        <td className={tdclass}>Male</td>
                        <td className={tdclass}>12/1/2000</td>
                        <td className={tdclass}>9</td>
                        <td className={tdclass}>A</td>
                        <td className={tdclass}>33</td>
                        <td className={tdclass}>Salim</td>
                        <td className={tdclass}>Docter</td>
                        <td className={tdclass}><a href="#">Detail</a></td>
                    </tr>
                    
                    <tr className={trclass}>
                        <td className={tdclass}>1</td>
                        <td className={tdclass}>12/1/22</td>
                        <td className={tdclass}><img className="size-10 rounded-full" src={Img} alt="std" /></td>
                        <td className={tdclass}>21</td>
                        <td className={tdclass}>123553</td>
                        <td className={tdclass}>Sultan</td>
                        <td className={tdclass}>Male</td>
                        <td className={tdclass}>12/1/2000</td>
                        <td className={tdclass}>9</td>
                        <td className={tdclass}>A</td>
                        <td className={tdclass}>33</td>
                        <td className={tdclass}>Salim</td>
                        <td className={tdclass}>Docter</td>
                        <td className={tdclass}><a href="#">Detail</a></td>
                    </tr>
                    
                    <tr className={trclass}>
                        <td className={tdclass}>1</td>
                        <td className={tdclass}>12/1/22</td>
                        <td className={tdclass}><img className="size-10 rounded-full" src={Img} alt="std" /></td>
                        <td className={tdclass}>21</td>
                        <td className={tdclass}>123553</td>
                        <td className={tdclass}>Sultan</td>
                        <td className={tdclass}>Male</td>
                        <td className={tdclass}>12/1/2000</td>
                        <td className={tdclass}>9</td>
                        <td className={tdclass}>A</td>
                        <td className={tdclass}>33</td>
                        <td className={tdclass}>Salim</td>
                        <td className={tdclass}>Docter</td>
                        <td className={tdclass}><a href="#">Detail</a></td>
                    </tr>
                    
                    <tr className={trclass}>
                        <td className={tdclass}>1</td>
                        <td className={tdclass}>12/1/22</td>
                        <td className={tdclass}><img className="size-10 rounded-full" src={Img} alt="std" /></td>
                        <td className={tdclass}>21</td>
                        <td className={tdclass}>123553</td>
                        <td className={tdclass}>Sultan</td>
                        <td className={tdclass}>Male</td>
                        <td className={tdclass}>12/1/2000</td>
                        <td className={tdclass}>9</td>
                        <td className={tdclass}>A</td>
                        <td className={tdclass}>33</td>
                        <td className={tdclass}>Salim</td>
                        <td className={tdclass}>Docter</td>
                        <td className={tdclass}><a href="#">Detail</a></td>
                    </tr>
                    
                    <tr className={trclass}>
                        <td className={tdclass}>1</td>
                        <td className={tdclass}>12/1/22</td>
                        <td className={tdclass}><img className="size-10 rounded-full" src={Img} alt="std" /></td>
                        <td className={tdclass}>21</td>
                        <td className={tdclass}>123553</td>
                        <td className={tdclass}>Sultan</td>
                        <td className={tdclass}>Male</td>
                        <td className={tdclass}>12/1/2000</td>
                        <td className={tdclass}>9</td>
                        <td className={tdclass}>A</td>
                        <td className={tdclass}>33</td>
                        <td className={tdclass}>Salim</td>
                        <td className={tdclass}>Docter</td>
                        <td className={tdclass}><a href="#">Detail</a></td>
                    </tr>
                    
                    <tr className={trclass}>
                        <td className={tdclass}>1</td>
                        <td className={tdclass}>12/1/22</td>
                        <td className={tdclass}><img className="size-10 rounded-full" src={Img} alt="std" /></td>
                        <td className={tdclass}>21</td>
                        <td className={tdclass}>123553</td>
                        <td className={tdclass}>Sultan</td>
                        <td className={tdclass}>Male</td>
                        <td className={tdclass}>12/1/2000</td>
                        <td className={tdclass}>9</td>
                        <td className={tdclass}>A</td>
                        <td className={tdclass}>33</td>
                        <td className={tdclass}>Salim</td>
                        <td className={tdclass}>Docter</td>
                        <td className={tdclass}><a href="#">Detail</a></td>
                    </tr>
                    
                    <tr className={trclass}>
                        <td className={tdclass}>1</td>
                        <td className={tdclass}>12/1/22</td>
                        <td className={tdclass}><img className="size-10 rounded-full" src={Img} alt="std" /></td>
                        <td className={tdclass}>21</td>
                        <td className={tdclass}>123553</td>
                        <td className={tdclass}>Sultan</td>
                        <td className={tdclass}>Male</td>
                        <td className={tdclass}>12/1/2000</td>
                        <td className={tdclass}>9</td>
                        <td className={tdclass}>A</td>
                        <td className={tdclass}>33</td>
                        <td className={tdclass}>Salim</td>
                        <td className={tdclass}>Docter</td>
                        <td className={tdclass}><a href="#">Detail</a></td>
                    </tr>
                    
                    <tr className={trclass}>
                        <td className={tdclass}>1</td>
                        <td className={tdclass}>12/1/22</td>
                        <td className={tdclass}><img className="size-10 rounded-full" src={Img} alt="std" /></td>
                        <td className={tdclass}>21</td>
                        <td className={tdclass}>123553</td>
                        <td className={tdclass}>Sultan</td>
                        <td className={tdclass}>Male</td>
                        <td className={tdclass}>12/1/2000</td>
                        <td className={tdclass}>9</td>
                        <td className={tdclass}>A</td>
                        <td className={tdclass}>33</td>
                        <td className={tdclass}>Salim</td>
                        <td className={tdclass}>Docter</td>
                        <td className={tdclass}><a href="#">Detail</a></td>
                    </tr>
                    
                    <tr className={trclass}>
                        <td className={tdclass}>1</td>
                        <td className={tdclass}>12/1/22</td>
                        <td className={tdclass}><img className="size-10 rounded-full" src={Img} alt="std" /></td>
                        <td className={tdclass}>21</td>
                        <td className={tdclass}>123553</td>
                        <td className={tdclass}>Sultan</td>
                        <td className={tdclass}>Male</td>
                        <td className={tdclass}>12/1/2000</td>
                        <td className={tdclass}>9</td>
                        <td className={tdclass}>A</td>
                        <td className={tdclass}>33</td>
                        <td className={tdclass}>Salim</td>
                        <td className={tdclass}>Docter</td>
                        <td className={tdclass}><a href="#">Detail</a></td>
                    </tr>
                    
                    <tr className={trclass}>
                        <td className={tdclass}>1</td>
                        <td className={tdclass}>12/1/22</td>
                        <td className={tdclass}><img className="size-10 rounded-full" src={Img} alt="std" /></td>
                        <td className={tdclass}>21</td>
                        <td className={tdclass}>123553</td>
                        <td className={tdclass}>Sultan</td>
                        <td className={tdclass}>Male</td>
                        <td className={tdclass}>12/1/2000</td>
                        <td className={tdclass}>9</td>
                        <td className={tdclass}>A</td>
                        <td className={tdclass}>33</td>
                        <td className={tdclass}>Salim</td>
                        <td className={tdclass}>Docter</td>
                        <td className={tdclass}><a href="#">Detail</a></td>
                    </tr>
                    
                    <tr className={trclass}>
                        <td className={tdclass}>1</td>
                        <td className={tdclass}>12/1/22</td>
                        <td className={tdclass}><img className="size-10 rounded-full" src={Img} alt="std" /></td>
                        <td className={tdclass}>21</td>
                        <td className={tdclass}>123553</td>
                        <td className={tdclass}>Sultan</td>
                        <td className={tdclass}>Male</td>
                        <td className={tdclass}>12/1/2000</td>
                        <td className={tdclass}>9</td>
                        <td className={tdclass}>A</td>
                        <td className={tdclass}>33</td>
                        <td className={tdclass}>Salim</td>
                        <td className={tdclass}>Docter</td>
                        <td className={tdclass}><a href="#">Detail</a></td>
                    </tr>
                    
                    <tr className={trclass}>
                        <td className={tdclass}>1</td>
                        <td className={tdclass}>12/1/22</td>
                        <td className={tdclass}><img className="size-10 rounded-full" src={Img} alt="std" /></td>
                        <td className={tdclass}>21</td>
                        <td className={tdclass}>123553</td>
                        <td className={tdclass}>Sultan</td>
                        <td className={tdclass}>Male</td>
                        <td className={tdclass}>12/1/2000</td>
                        <td className={tdclass}>9</td>
                        <td className={tdclass}>A</td>
                        <td className={tdclass}>33</td>
                        <td className={tdclass}>Salim</td>
                        <td className={tdclass}>Docter</td>
                        <td className={tdclass}><a href="#">Detail</a></td>
                    </tr>
                    
                    <tr className={trclass}>
                        <td className={tdclass}>1</td>
                        <td className={tdclass}>12/1/22</td>
                        <td className={tdclass}><img className="size-10 rounded-full" src={Img} alt="std" /></td>
                        <td className={tdclass}>21</td>
                        <td className={tdclass}>123553</td>
                        <td className={tdclass}>Sultan</td>
                        <td className={tdclass}>Male</td>
                        <td className={tdclass}>12/1/2000</td>
                        <td className={tdclass}>9</td>
                        <td className={tdclass}>A</td>
                        <td className={tdclass}>33</td>
                        <td className={tdclass}>Salim</td>
                        <td className={tdclass}>Docter</td>
                        <td className={tdclass}><a href="#">Detail</a></td>
                    </tr>
                    
                    <tr className={trclass}>
                        <td className={tdclass}>1</td>
                        <td className={tdclass}>12/1/22</td>
                        <td className={tdclass}><img className="size-10 rounded-full" src={Img} alt="std" /></td>
                        <td className={tdclass}>21</td>
                        <td className={tdclass}>123553</td>
                        <td className={tdclass}>Sultan</td>
                        <td className={tdclass}>Male</td>
                        <td className={tdclass}>12/1/2000</td>
                        <td className={tdclass}>9</td>
                        <td className={tdclass}>A</td>
                        <td className={tdclass}>33</td>
                        <td className={tdclass}>Salim</td>
                        <td className={tdclass}>Docter</td>
                        <td className={tdclass}><a href="#">Detail</a></td>
                    </tr>
               </tbody>  
            </table>
        </div>
        <div className="flex flex-wrap gap-4 justify-between min-h-14 mt-8 p-4 rounded-lg border-2 border-gray-300">
            <input 
            type="text" 
            name="s_name"
            placeholder="Student Name"
            className="w-full md:w-auto p-2 rounded-lg  border-2 border-gray-400"
            />
            <input 
            type="number" 
            name="s_roll"
            placeholder="Student Roll"
            className="w-full md:w-auto p-2 rounded-lg border-2 border-gray-400"

            />
            <input 
            type="number" 
            name="class"
            placeholder="Student Class"
            className="w-full md:w-auto p-2 rounded-lg border-2 border-gray-400"

            />
            <button
            className="p-2 bg-red-400 rounded-lg text-white hover:bg-red-500 w-full"
            
            >Search</button>
        </div>

    </div>)    
}


export default Student