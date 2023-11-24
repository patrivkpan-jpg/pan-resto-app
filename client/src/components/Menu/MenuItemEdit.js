import { useState } from 'react';
import useMenuContext from '../../hooks/use-menu-context'

function MenuItemEdit({ item, onFormSubmit, onCancelClick }) {

    const [description, setdescription] = useState(item.description ?? '');
    const [price, setprice] = useState(item.price ?? '');

    const { editMenuItem } = useMenuContext();

    const handleFormSubmit = (event) => {
        event.preventDefault()
        editMenuItem(item._id, {
            description,
            price
        })
        onFormSubmit()
    }

    const onDescriptionInputChange = (event) => {
        setdescription(event.target.value)
    }

    const onPriceInputChange = (event) => {
        setprice(event.target.value)
    }

    const handleCancelClick = (event) => {
        event.preventDefault()
        onCancelClick()
    }

    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                <h3>{item.name}</h3>
                Description: <input value={description} onChange={onDescriptionInputChange}></input>
                <br />
                Price: <input value={price} onChange={onPriceInputChange}></input>
                <br />
                <button>Save</button>
            </form>
            <button onClick={handleCancelClick}>Cancel</button>
        </div>
    )
}

export default MenuItemEdit;