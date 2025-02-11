import { Link, Search, X } from "lucide-react"
import { useState } from "react"

const LeadSearch = () => {

    const [searchTerm, setSearchTerm] = useState("")

    const reset = () => {
        const form = document.querySelector('.search-form') as HTMLFormElement;

        if (form) form.reset();
    }

    return (
        <form
            action={"/leads/"}
            className=' md:min-w-[25rem] max-w-[35rem] border border-gray-500 mx-auto rounded-md flex items-center gap-3 px-3'>

            <input
                type="text"
                placeholder="Search Leads by Name and Contact"
                name="query"
                className="h-8 placeholder:text-[#88859b] font-medium outline-0 w-full"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />

            <div className='flex gap-2'>
                {
                    searchTerm &&
                    <button
                        type='reset'
                        onClick={reset}>
                        <Link href={"/"}>
                            <X />
                        </Link>
                    </button>
                }

                <button
                    type='submit'
                    className='search-btn'>
                    <Search />
                </button>
            </div>

        </form>
    )
}

export default LeadSearch