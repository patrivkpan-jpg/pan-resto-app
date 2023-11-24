import useMenuContext from '../../hooks/use-menu-context'
import MenuItemShow from './MenuItemShow';

function MenuList() {
    
    const { menu } = useMenuContext();

    const renderedMenu = menu.map((item) => {
        return <MenuItemShow key={item._id} item={item} />
    })

    return (
        <div className='menu-list'>
            {renderedMenu}
        </div>
    )
}

export default MenuList;