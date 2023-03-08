import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import jwt_decode from 'jwt-decode'

export default function Dashboard() {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')

    async function populateDashboard() {
        const token = localStorage.getItem('token')

        const response = await fetch('https://sea-turtle-app-ifiyv.ondigitalocean.app/dashboard', {
            method: 'GET',
            headers: {
                'x-access-token': token
            }
        })
        const data = await response.json()
        setFirstName(data.user.firstName)
        setLastName(data.user.lastName)
        console.log(data)
    }

    useEffect(() => {
        const token = localStorage.getItem('token')
        if (token) {
            const user = jwt_decode(token)
            console.log("si hay token")
            if(!user) {
                console.log("no hay user")
                localStorage.removeItem('token')
                window.location.href = '/login'
            } else {
                console.log("si hay user")
                populateDashboard()
            }
        } else {
            console.log("no hay token")
            window.location.href = '/login'
        }
    }, [])

    return (
        <div className="flex flex-col items-center">
        <h1 className="text-center mt-24 font-bold text-3xl"></h1>
        <ul>
            <li>First Name: {firstName}</li>
            <li>Last Name: {lastName}</li>
        </ul>
        <Link to="/" className="mt-12 w-[90%] bg-red-500 rounded-md mx-auto text-center">Go to Home</Link>
        </div>
    )
}