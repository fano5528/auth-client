import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className="flex flex-col items-center">
        <h1 className="text-center mt-24 font-bold text-3xl">Home</h1>
        <Link to="/dashboard" className="mt-12 w-[90%] bg-red-500 rounded-md mx-auto text-center">Go to Dashboard</Link>
        </div>
    )
}