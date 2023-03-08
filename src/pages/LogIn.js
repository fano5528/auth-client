import { Link } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'
import PropTypes from 'prop-types'

async function loginUser(credentials) {
    return fetch('https://sea-turtle-app-ifiyv.ondigitalocean.app/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
      .then(data => data.json())
}

export default function LogIn({setToken}) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const trySubmit = async (e) => {
        e.preventDefault()
        const token = await loginUser({
            email,
            password
        })
        setToken(token)
    }

    return (
        <div>
            <h1 className="text-center mt-24 font-bold text-3xl">Log In</h1>
            <form onSubmit={(e)=> trySubmit(e)} className="mt-12 flex w-[50vw] mx-auto border-black shadow-[0_0_15px_5px_rgba(0,0,0,0.05)] p-12 rounded-lg flex-col">
                <input className="rounded-md border-[#e0e0e0] border" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input className="mt-6 border-[#e0e0e0] border rounded-md" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button type="submit" className="mt-12 w-full text-white py-2 bg-[#ff003d] rounded-md mx-auto hover:bg-[#ef002d]">Log In</button>
            </form>
        </div>
      )
}

LogIn.propTypes = {
    setToken: PropTypes.func.isRequired
}