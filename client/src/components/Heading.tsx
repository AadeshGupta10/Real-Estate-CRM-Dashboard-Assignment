import LeadSearch from "./LeadSearch"
import PropertySearch from "./PropertySearch"
import { Button } from "./ui/button"
import { SidebarTrigger } from "./ui/sidebar"

const Heading = ({ heading }: { heading?: string }) => {
    return (
        <div className={`flex items-center ${heading && "mb-5"}`}>
            <SidebarTrigger />
            {
                heading &&
                <div className="w-full h-fit flex items-center justify-between">
                    <div className="text-[1.3rem] font-semibold">
                        {heading}
                    </div>

                    <div className="hidden md:block">
                        {
                            heading === "Leads" ?
                                <LeadSearch />
                                :
                                heading === "Property" ?
                                    <PropertySearch />
                                    :
                                    ""
                        }
                    </div>

                    <Button variant={"default"} className="cursor-pointer">
                        {
                            heading === "Leads" ?
                                "Create Lead"
                                :
                                heading === "Property" ?
                                    "Create Property"
                                    :
                                    ""
                        }
                    </Button>
                </div>
            }
        </div>
    )
}

export default Heading