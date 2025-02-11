import AppSidebar from "./AppSidebar"
import { SidebarProvider } from "./ui/sidebar"
import { Outlet, } from "react-router-dom"

const Layout = () => {
    return (
        <SidebarProvider>
            <AppSidebar />
            <main className="w-full p-3">
                <Outlet />
            </main>
        </SidebarProvider>
    )
}

export default Layout