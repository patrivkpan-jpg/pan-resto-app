import { useState } from 'react';
import useMenuContext from '../../hooks/use-menu-context'

function MenuItemAdd() {
    
    const [name, setName] = useState('');
    const [description, setdescription] = useState('');
    const [price, setprice] = useState('');

    const { addMenuItem } = useMenuContext();

    const onFormSubmit = (event) => {
        event.preventDefault()
        addMenuItem({
            name,
            description,
            price
        })
        setName('')
        setdescription('')
        setprice('')
    }

    const onNameInputChange = (event) => {
        setName(event.target.value)
    }

    const onDescriptionInputChange = (event) => {
        setdescription(event.target.value)
    }

    const onPriceInputChange = (event) => {
        setprice(event.target.value)
    }

    return (
        <div className='add-menu-item'>
            <form onSubmit={onFormSubmit}>
                <label>Add new menu item</label>
                <br />
                Name: <input type='text' value={name} onChange={onNameInputChange}></input>
                <br />
                Description: <input type='text' value={description} onChange={onDescriptionInputChange}></input>
                <br />
                Price: <input type='text' value={price} onChange={onPriceInputChange}></input>
                <br />
                <button>Add menu item</button>
            </form>
        </div>
    )
}

export default MenuItemAdd;