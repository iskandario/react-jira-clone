import { BiSearch } from 'react-icons/bi';

const KanbanTopMenu = () => {
    const openTaskPopup = () => {
        console.log('clicked');
    }
    
    return (
        <div className='kanbanTopMenu'>
            <div className='kanbanLeftMenu'>
                <div className='searchInputArea'>
                    <BiSearch style={{ color: '#666' }}/>
                    <input className='searchInput' />
                </div>
                <h5 >Only My Issues</h5>
                <h5>Recently Updated</h5>
            </div>
            <button className='btn' onClick={openTaskPopup}>Create</button>
        </div>
    )
}


export default KanbanTopMenu
