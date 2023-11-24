import { createContext, useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api/v1/admin';
const AdminContext = createContext();

function AdminContextProvider({ children }) {

    const navigate = useNavigate();

    const [admin, setAdmin] = useState({})

    const login = ({ username, password }) => {
        
        axios.post(`${BASE_URL}/login`, { 
            username, password 
        }).then(function (response) {
            const loggedInAdmin = {
                username: 'panny',
                level: 1
            }
            setAdmin(loggedInAdmin)
            navigate('/')
        }).catch(function (error) {
            alert(error.response.data.message)
        })
    }

    const valueToShare = {
        admin,
        login
    }

    return (
        <AdminContext.Provider value={valueToShare}>
            {children}
        </AdminContext.Provider>
    )
}

export { AdminContextProvider }
export default AdminContext;