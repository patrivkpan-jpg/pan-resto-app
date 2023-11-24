import { useState } from 'react';
import MenuItemEdit from './MenuItemEdit';
import useMenuContext from '../../hooks/use-menu-context'
import useAdminContext from '../../hooks/use-admin-context';

function MenuItemShow({ item }) {

    const [showEditMenu, setShowEditMenu] = useState(false)

    const { deleteMenuItem } = useMenuContext();

    const { admin } = useAdminContext();

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

    let showAdminActions = (admin.username) ? <>
        <button onClick={handleEditClick}>Edit</button>
        <button onClick={handleDeleteClick}>Delete</button>
    </> : '';

    let content = <>
        <h3>{item.name}</h3>
        <h4>{item.description}</h4>
        { shownPrice }
        { showAdminActions }
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