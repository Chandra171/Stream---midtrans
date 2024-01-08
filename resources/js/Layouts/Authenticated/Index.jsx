import Sidebar from "@/Layouts/Authenticated/Sidebar";
import Topbar from "./Topbar";
import { usePage } from '@inertiajs/react'

export default function Authenticated({children}){

    const {auth} = usePage().props; //passing data props {auth} dari Pages/User/Dashboard/Index karena subcomponent info : https://laracasts.com/discuss/channels/inertia/inertia-shared-data-not-passed-to-the-frontend-inertia-with-react

    return(
        <>
            <div className="mx-auto max-w-screen hidden lg:block">
                {/* Sidebar */}
                <Sidebar auth={auth}/>
                {/* End of Sidebar */}

                {/* Content */}
                <div className="ml-[300px] px-[50px]">
                    <div className="py-10 flex flex-col gap-[50px]">
                    {/* <!-- Topbar --> */}
                    <Topbar name={auth.user.name} />
                    {/* End of Topbar */}
                    <main>{children}</main>
                    </div>
                </div>
                {/* End of Content */}
            </div>

            <div className="mx-auto px-4 w-full h-screen lg:hidden flex bg-black">
                <div className="text-white text-2xl text-center leading-snug font-medium my-auto">
                    Sorry, this page only supported on 1024px screen or above
                </div>
            </div>
        </>
    )
}
