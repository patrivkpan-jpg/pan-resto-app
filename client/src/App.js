import { useEffect } from 'react';
import useMenuContext from './hooks/use-menu-context';
import MenuItemAdd from './components/Menu/MenuItemAdd';
import MenuList from './components/Menu/MenuList';

function App() {

    const { getMenu } = useMenuContext();

    useEffect(() => {
        getMenu()
    }, [])

    return (
        <div>
            Pan Resto!
            <MenuItemAdd />
            <MenuList />
        </div>
    );
}

export default App;
