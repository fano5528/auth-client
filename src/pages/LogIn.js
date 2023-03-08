import React, { useState } from 'react'

export default function LogIn() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const loginUser = async (e) => {
        e.preventDefault()
        fetch('https://sea-turtle-app-ifiyv.ondigitalocean.app/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
                },
            body: JSON.stringify({
                email,
                password
                })
            })
            .then(data => data.json())
            .then(data => {
                if (data.token) {
                    alert("You are logged in!")
                }
                else {
                    alert("Incorrect email or password")
                }
            })
    }

    return (
        <div>
            <h1 className="text-center mt-24 font-bold text-3xl">Log In</h1>
            <form onSubmit={loginUser} className="mt-12 flex w-[50vw] mx-auto border-black shadow-[0_0_15px_5px_rgba(0,0,0,0.05)] p-12 rounded-lg flex-col">
                <input className="rounded-md border-[#e0e0e0] border" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input className="mt-6 border-[#e0e0e0] border rounded-md" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button type="submit" className="mt-12 w-full text-white py-2 bg-[#ff003d] rounded-md mx-auto hover:bg-[#ef002d]">Log In</button>
            </form>
        </div>
    )
}