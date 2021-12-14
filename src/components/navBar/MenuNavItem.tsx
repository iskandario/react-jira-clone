import { FiCreditCard, FiSettings } from 'react-icons/fi';

interface MenuNavItemType {
    name: string;

}

const MenuNavItem = ({ name}: MenuNavItemType) => {

    const icons = (textname: string) => {
        switch (textname) {
            case 'Kanban Board':
                return <FiCreditCard style={{ fontSize: '16px' }} />
            case 'Project Settings':
                return <FiSettings style={{ fontSize: '16px' }} />
        }
    }

    return (
        <div className={`menuNavItem ${name === 'Kanban Board' ? 'active' : ''}`}>
            <div>{icons(name)}</div>
            <div style={{ marginLeft: '10px' }} >{name}</div>

        </div>
    )
}

export default MenuNavItem
