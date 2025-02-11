import { useState } from "react"
import { json_data } from "./MOCK_DATA"
import Pagination from '@mui/material/Pagination';
import LeadSearch from "./LeadSearch"

const LeadCard = () => {

    const [limit, setLimit] = useState(40);
    const [page, setPage] = useState(1);

    return (
        <>
            <div className="md:hidden mb-5">
                <LeadSearch />
            </div>

            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
                {
                    json_data.slice((page * limit) - limit, limit * page).map((item, index) =>
                        <div className='flex flex-col gap-1 border p-3'>
                            <div className='flex gap-2'>
                                <div className='font-semibold shrink-0'>
                                    Name :-
                                </div>
                                <div>
                                    {item.name}
                                </div>
                            </div>
                            <div className='flex gap-2'>
                                <div className='font-semibold shrink-0'>
                                    Contact :-
                                </div>
                                <div className="break-all">
                                    {item.contact}
                                </div>
                            </div>
                        </div>
                    )}
            </div>

            <div className="pt-10">
                <Pagination
                    count={json_data.length / limit}
                    color="primary"
                    onChange={(_, value) => setPage(value)}
                    className="mx-auto bg-[#c4c1c77c] w-fit py-2 rounded-md shrink-0" />
            </div>
        </>
    )
}

export default LeadCard