import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import jwt_decode from 'jwt-decode'

export default function Dashboard() {

    async function populateDashboard() {
        const token = localStorage.getItem('token')
        const [firstName, setFirstName] = useState('')
        const [lastName, setLastName] = useState('')

        const response = await fetch('https://sea-turtle-app-ifiyv.ondigitalocean.app/dashboard', {
            method: 'GET',
            headers: {
                'x-access-token': token
            }
        })
        const data = await response.json()
        setFirstName(data.firstName)
        setLastName(data.lastName)
    }

    useEffect(() => {
        const token = localStorage.getItem('token')
        if (token) {
            const user = jwt_decode(token)
            if(!user) {
                localStorage.removeItem('token')
                window.location.href = '/login'
            } else {
                populateDashboard()
            }
        } else {
            window.location.href = '/login'
        }
    }, [])

    return (
        <div className="flex flex-col items-center">
        <h1 className="text-center mt-24 font-bold text-3xl"></h1>
        <ul>
            <li>First Name: { firsName || "nose" }</li>
            <li>Last Name: { lastName || "nose" }</li>
        </ul>
        <Link to="/" className="mt-12 w-[90%] bg-red-500 rounded-md mx-auto text-center">Go to Home</Link>
        </div>
    )
}