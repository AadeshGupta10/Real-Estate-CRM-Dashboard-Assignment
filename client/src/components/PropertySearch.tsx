import { SearchIcon } from "lucide-react"
import { useState } from "react"

const PropertySearch = () => {
    const [searchTerm, setSearchTerm] = useState("")

    return (
        <div className=" md:min-w-[25rem] max-w-[35rem] border border-gray-500 mx-auto rounded-md flex items-center gap-3 px-3">

            <SearchIcon color="#44405a" />

            <input
                type="text"
                placeholder="Search Leads by Name and Contact"
                className="h-8 placeholder:text-[#88859b] font-medium outline-0 w-full"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
        </div>
    )
}

export default PropertySearch