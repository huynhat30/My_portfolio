import { useState } from "react";
import { createContext } from "react";
import { onAuthStateChanged, signInWithEmailAndPassword, signOut, sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../firebase";
import { useEffect } from "react";
import { useContext } from "react";

const UserContext = createContext({});

export const useUserContext = () => useContext(UserContext)

export const UserContextProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState()
    const [error, setError] = useState("")

    useEffect(() => {
        setLoading(true)
        const unsubscribe = onAuthStateChanged(auth, (res) => {
            res ? setUser(res) : setUser(null)
            setError("")
            setLoading(false)
        })

        return unsubscribe
    }, [])

    const signInUser = (email, password) => {
        setLoading(true)
        signInWithEmailAndPassword(auth, email, password)
        .then((res) => console.log(res))
        .catch((err) => setError(err.message))
        .finally(() => setLoading(false))
    }

    const logoutDashboard = () => {
        signOut(auth)
    }

    const forgetPassword = (email) => {
        return sendPasswordResetEmail(auth, email)
    }

    const contextValue = {user, loading, error, signInUser, logoutDashboard, forgetPassword}

     return <UserContext.Provider value={contextValue}>
        {children}
     </UserContext.Provider>
}