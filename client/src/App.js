import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Admin from './pages/Admin'

function App() {

    return (
        <div>
            Pan Resto!
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/admin' element={<Admin />}></Route>
            </Routes>
        </div>
    );
}

export default App;
