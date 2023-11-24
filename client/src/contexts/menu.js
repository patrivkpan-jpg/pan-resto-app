import { createContext, useState } from "react";
import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api/v1/menu';
const MenuContext = createContext();

function Provider({ children }) {
    const [menu, setMenu] = useState([]);

    const getMenu = () => {
        axios.get(BASE_URL)
            .then(function (response) {
                setMenu(response.data.result)
            }).catch(function (error) {
                console.log(error)
            })
    }

    const addMenuItem = ({ name, description, price }) => {
        axios.post(BASE_URL, {
            name, description, price,
        }).then(function (response) {
            console.log(response)
            const updatedMenu = [
                ...menu,
                response.data.result
            ]
            setMenu(updatedMenu);
        }).catch(function (error) {
            console.log(error)
        })
    }

    const editMenuItem = (_id, { description, price }) => {
        axios.put(BASE_URL, {
            _id, description, price,
        }).then(function (response) {
            console.log(response.data.result)
            const updatedMenu = menu.map((item) => {
                if (item._id === _id) {
                    return response.data.result
                }
                return item;
            })
            setMenu(updatedMenu);
        }).catch(function (error) {
            console.log(error)
        })
    }

    const deleteMenuItem = (_id) => {
        axios.delete(`${BASE_URL}/${_id}`)
        .then(function (response) {
            console.log(response)
            const updatedMenu = menu.filter((item) => {
                return item._id !== _id;
            })
            setMenu(updatedMenu);
        }).catch(function (error) {
                console.log(error)
            })
    }

    const valueToShare = {
        menu,
        getMenu,
        addMenuItem,
        editMenuItem,
        deleteMenuItem
    }

    return (
        <MenuContext.Provider value={valueToShare}>
            {children}
        </MenuContext.Provider>
    )
}

export { Provider }
export default MenuContext;