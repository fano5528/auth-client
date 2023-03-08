import React, { useState } from 'react'

export default function Register() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')

    const registerUser = async (e) => {
        e.preventDefault()
        fetch('https://sea-turtle-app-ifiyv.ondigitalocean.app/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
                },
            body: JSON.stringify({
                email,
                password,
                firstName,
                lastName
                })
            })
            .then(data => data.json())
            .then(data => {
                if(data.auth) {
                    window.location.href = '/dashboard'
                }
            })
    }

    return (
        <div>
            <h1 className="text-center mt-24 font-bold text-3xl">Register</h1>
            <form onSubmit={registerUser} className="mt-12 flex w-[50vw] mx-auto border-black shadow-[0_0_15px_5px_rgba(0,0,0,0.05)] p-12 rounded-lg flex-col">
                <input className="rounded-md border-[#e0e0e0] border" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input className="mt-6 border-[#e0e0e0] border rounded-md" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <input className="mt-6 border-[#e0e0e0] border rounded-md" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                <input className="mt-6 border-[#e0e0e0] border rounded-md" placeholder="Last Name" value={lastName} onChange={ (e)=> setLastName(e.target.value) }/>
                <button type="submit" className="mt-12 w-full text-white py-2 bg-[#ff003d] rounded-md mx-auto hover:bg-[#ef002d]">Register</button>
            </form>
        </div>
    )
}