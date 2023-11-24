import { useState } from 'react';
import MenuItemEdit from './MenuItemEdit';
import useMenuContext from '../../hooks/use-menu-context'

function MenuItemShow({ item }) {

    console.log(item)
    const [showEditMenu, setShowEditMenu] = useState(false)

    const { deleteMenuItem } = useMenuContext();

    const hideEditForm = () => {
        setShowEditMenu(false)
    }

    const handleEditClick = () => {
        setShowEditMenu(true)
    }

    const handleDeleteClick = () => {
        deleteMenuItem(item._id)
    }

    let shownPrice = (item.price) ? <span>₱{item.price}<br /></span> : '';

    let content = <>
        <h3>{item.name}</h3>
        <h4>{item.description}</h4>
        { shownPrice }
        <button onClick={handleEditClick}>Edit</button>
        <button onClick={handleDeleteClick}>Delete</button>
    </>

    if (showEditMenu === true) {
        content = <MenuItemEdit key={item._id} item={item} onFormSubmit={hideEditForm} onCancelClick={hideEditForm} />
    }
    
    return (
        <div key={item._id}>
            { content }
        </div>
    )
}

export default MenuItemShow;