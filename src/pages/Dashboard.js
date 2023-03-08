import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Dashboard() {

    return (
        <div className="flex flex-col items-center">
        <h1 className="text-center mt-24 font-bold text-3xl">Dashboard</h1>
        <ul>
            <li>Hola</li>
        </ul>
        <Link to="/" className="mt-12 w-[90%] bg-red-500 rounded-md mx-auto text-center">Go to Home</Link>
        </div>
    )
}