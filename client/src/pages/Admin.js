import { useState } from 'react';
import useAdminContext from '../hooks/use-admin-context'

function Admin() {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const { login } = useAdminContext();

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