import { useState, useEffect } from 'react';
import useAdminContext from '../hooks/use-admin-context'
import { useNavigate } from 'react-router-dom';

function Admin() {

    const navigate = useNavigate();

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const { admin, login, getLoginUser } = useAdminContext();

    useEffect(() => {
        getLoginUser()
    }, [])

    if (admin.username) {
        alert('Already logged in!')
        navigate('/')
    }

    const handleFormSubmit = (event) => {
        event.preventDefault()
        login({ username, password })
    }

    const onUsernameInputChange = (event) => {
        setUsername(event.target.value)
    }

    const onPasswordInputChange = (event) => {
        setPassword(event.target.value)
    }

    return (
        <form onSubmit={handleFormSubmit}>
            <input type='text' placeholder='Username' value={username} onChange={onUsernameInputChange}></input>
            <input type='password' placeholder='Password' value={password} onChange={onPasswordInputChange}></input>
            <button>Login</button>
        </form>
    )
}

export default Admin;