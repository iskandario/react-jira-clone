import { BiSearch } from 'react-icons/bi';

const KanbanTopMenu = () => {
    return (
        <div className='kanbanTopMenu'>
            <div className='searchInputArea'>
                <BiSearch style={{ color: '#666' }}/>
                <input className='searchInput' />
            </div>
            <h5>Only My Issues</h5>
            <h5>Recently Updated</h5>
        </div>
    )
}


export default KanbanTopMenu
