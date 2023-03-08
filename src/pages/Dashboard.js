import { Link } from 'react-router-dom'
import jwt from 'jsonwebtoken'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Dashboard() {

    const navigate = useNavigate()

    async function populate() {
        const data = await fetch('https://sea-turtle-app-ifiyv.ondigitalocean.app/dashboard', {
            method: 'GET',
            headers: {
                'x-access-token': localStorage.getItem('token')
            }
        })
    }

    useEffect(() => {
        const token = localStorage.getItem('token')
        if (token) {
            const user = jwt.verify(token)
            if(!user) {
                localStorage.removeItem('token')
                navigate.replace('/login')
            } else {
                populate()
            }
        }
    }, [])


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