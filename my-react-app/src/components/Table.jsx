
function TablaFormate({  data = [], columns = [], detailsButton}){
    const tableclass="w-full table-auto divide-y divide-gray-400 rounded-2 text-xs md:text-sm text-center"
    const theadclass="sticky top-0 w-full"
    const thclass=" px-4 py-2 font-medium text-center text-white bg-gray-600"
    const tbodyclass="divide-y divide-gray-300"
    const trclass="hover:bg-red-100 odd:bg-white even:bg-red-50"
    const tdclass="px-2 py-1 text-gray-700"
    
    return(
        <div className="h-96 overflow-x-auto overflow-y-auto  rounded-lg border-2 border-gray-300">
            <table className={tableclass}>
                <thead className={theadclass}>

                    <tr className={trclass}>
                        <th className={thclass}>S.No</th>
                        {columns.map((col, index) => (
                        <th key={index} className={thclass}>
                            {col.header}
                        </th>
                        ))}

                        {detailsButton && <th className={thclass}>Details</th>}
                    </tr>
                    
                </thead>
                <tbody className={tbodyclass}>
                    {data.length > 0 ? 
                        (data.map((row, i) => (
                            <tr className={trclass} key={row.id || i} >
                                <td className={tdclass}>{i+1}</td>
                                {columns.map((col, index) => (
                                <td className={tdclass} key={index}>
                                    {col.render ? col.render(row) : row[col.accessor]}
                                </td>
                                ))}

                                {detailsButton && (
                                <td className={tdclass}>
                                    {detailsButton(row)}
                                </td>
                                )}
                            </tr>
                            ))
                        ) : (
                            <tr>
                            <td colSpan={columns.length + 1} className="text-center p-4">
                                No Data Found
                            </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>

    );
}
export default TablaFormate;