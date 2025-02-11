import { MapPinHouse, UsersRound } from "lucide-react"
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "./ui/sidebar"
import { Link, NavLink } from "react-router-dom"

const AppSidebar = () => {

    // Menu items.
    const items = [
        {
            title: "Leads",
            url: "leads",
            icon: UsersRound,
        },
        {
            title: "Property",
            url: "property",
            icon: MapPinHouse,
        }
    ]

    return (
        <Sidebar>
            <SidebarHeader className="items-center">
                <Link to={"/"}>
                    <img src="/goaccelerix.png" alt="Go Accelerix" className="w-28 py-2" />
                </Link>
            </SidebarHeader>

            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {items.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild>
                                        <NavLink to={item.url}>
                                            <item.icon />
                                            <span className="text-[1rem]">{item.title}</span>
                                        </NavLink>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    )
}

export default AppSidebar