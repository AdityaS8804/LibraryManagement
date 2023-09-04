import { createContext, useState, useEffect } from 'react'
import jwt_decode from "jwt-decode"
import { useNavigate } from 'react-router-dom'

const AuthContext = createContext()
export default AuthContext;

export const AuthProvider = ({ children }) => {

    const [authTokens, setAuthTokens] = useState(localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null)
    const [user, setUser] = useState(null)

    const [status, setStatus] = useState(null)
    //const navigate = useNavigate()
    const loginUser = async (vals) => {
        console.log("From Login User", vals)
        let response = await fetch('http://127.0.0.1:8000/api/token/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                {
                    //'username': 'aditya',
                    'email': vals.email,
                    'password': vals.password
                }
            )
        })
        let data = await response.json()
        if (response.status === 200) {
            setAuthTokens(data)
            setUser(jwt_decode(data.access))
            localStorage.setItem('authTokens', JSON.stringify(data))
            window.location.href = "/"
        }
        else if (response.status === 401) {
            setStatus(401)
        }
        else {
            alert('Something went wrong')
        }

    }

    let contextData = {
        user: user,
        authTokens: authTokens,
        status: status,
        loginUser: loginUser,

    }
    return (
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    )
}