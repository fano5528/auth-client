import { Link } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'

export default function Home() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function trySubmit(e) {
        e.preventDefault()
        axios.post('https://sea-turtle-app-ifiyv.ondigitalocean.app/login',{email: email, password: password})
        .then(res => {
            console.log(res)
        })
    }

    return (
        <div>
            <h1 className="text-center mt-24 font-bold text-3xl">Log In</h1>
            <form onSubmit={(e)=> trySubmit(e)} className="mt-12 flex w-[50vw] mx-auto border-black shadow padding-24 rounded-lg flex-col">
                <input className="" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button type="submit" className="mt-12 w-[90%] bg-red-500 rounded-md mx-auto">Log In</button>
            </form>
        </div>
      )
}