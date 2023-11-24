import { useEffect } from 'react';
import useMenuContext from '../hooks/use-menu-context';
import useAdminContext from '../hooks/use-admin-context';
import MenuItemAdd from '../components/Menu/MenuItemAdd';
import MenuList from '../components/Menu/MenuList';
import { Link } from 'react-router-dom'

function Home () {

    const { getMenu } = useMenuContext();

    const { admin } = useAdminContext();

    console.log(admin)

    const showMenuItemAdd = (admin.username) ? <MenuItemAdd /> : '';
    const showAdmin = (!admin.username) ? <Link to='/admin'>Admin</Link> : '';

    useEffect(() => {
        getMenu()
    }, [])

    return (
        <>
            { showMenuItemAdd }
            <MenuList />
            { showAdmin }
        </>
    )
}

export default Home;