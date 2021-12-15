import { AiOutlineArrowUp, AiOutlineArrowDown } from 'react-icons/ai';
import { IoMdCheckbox } from 'react-icons/io';
import { BsFillBookmarkFill } from 'react-icons/bs';

interface kanbanCardTypes {
    description: string,
    user: string,
    type: string,
    id: number,
    priority: number
}

const KanbanCard = (cardItem: kanbanCardTypes)  => {

    const arrowColour = (priority: number) => {
        switch (priority) {
            case 1:
                return { color: '#FF5630'}
            case 2:
                return { color: '#FFAB00'}
            case 3:
                return { color: '#FFC400'}
            case 4:
                return { color: '#36B37E'}
            case 5:
                return { color: '#2684FF'}
        }
    }

    return (
        <div className='kanbanCardArea'>
            <p>{ cardItem.description }</p>
            <div className='kanbanCardBottom'>
                <div className='kanbanCardBottom'>
                    <div>
                        { cardItem.type === 'task' ? <IoMdCheckbox style={{ color: '#4C9AFF', fontSize: '15px'}} /> : <BsFillBookmarkFill style={{ color: '#36B37E' }}/> }
                    </div>
                    <div style={{ marginLeft: '10px', fontSize: '14px' }}>
                        { cardItem.priority > 3 ? <AiOutlineArrowUp style={arrowColour(cardItem.priority)} /> : <AiOutlineArrowDown style={arrowColour(cardItem.priority)}/> }
                    </div>
                </div>
                <div>{ cardItem.user }</div>
            </div>
            
            
        </div>
    )
}



export default KanbanCard
