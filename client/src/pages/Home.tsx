import Heading from "../components/Heading"

const Home = () => {
    return (
        <>
            <Heading />
            <div className="h-full flex flex-col gap-16 justify-center items-center">
                <img src="/goaccelerix.png" alt="Go Accelerix" className="p-5 bg-[#03254e] rounded-lg"/>
                <p className="text-2xl text-center font-bold tracking-wide">Welcome to Real State CRM Dashboard</p>
            </div>
        </>
    )
}

export default Home