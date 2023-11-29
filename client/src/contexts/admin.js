import { createContext, useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api/v1/admin';
const AdminContext = createContext();

function AdminContextProvider({ children }) {

    const navigate = useNavigate();

    const [admin, setAdmin] = useState({})

    const getLoginUser = () => {
        axios.get(BASE_URL, {
            withCredentials: true
        })
        .then(function (response) {
            console.log('getLoginUser', response.data.result)
            setAdmin(response.data.result)
        }).catch(function (error) {
            console.log('getLoginUser', error)
            // alert(error.response.data.message)
        })
    }

    const login = ({ username, password }) => {
        axios.post(`${BASE_URL}/login`, { 
            username, password 
        }, {
            withCredentials: true
        }).then(function (response) {
            setAdmin(response.data.result)
            navigate('/')
        }).catch(function (error) {
            alert(error.response.data.message)
        })
    }

    const valueToShare = {
        admin,
        getLoginUser,
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