import { AiOutlineArrowUp, AiOutlineArrowDown } from 'react-icons/ai';
import { IoMdCheckbox } from 'react-icons/io';
import { BsFillBookmarkFill } from 'react-icons/bs';

interface kanbanCardTypes {
    title: string,
    description: string,
    user: string,
    priority: string,
    type: string,
    id: number
}

const KanbanCard = (cardItem: kanbanCardTypes)  => {

    const arrowColour = (priority: string) => {
        switch (priority) {
            case '1':
                return { color: '#FF5630'}
            case '2':
                return { color: '#FFAB00'}
            case '3':
                return { color: '#FFC400'}
            case '4':
                return { color: '#36B37E'}
            case '5':
                return { color: '#2684FF'}
        }
    }

    const ticketColor = (type: string) => {
      switch(type) {
        case 'task': 
          return { borderLeft: '2px solid #4C9AFF' }
        case 'story': 
          return {borderLeft: '2px solid #36B37E' }
        case 'bug': 
          return {borderLeft: '2px solid #FF5630' }
      }
    }

    return (
        <div className='kanbanCardArea' style={ticketColor(cardItem.type)} >
            <p>{ cardItem.title }</p>
            <div className='kanbanCardBottom'>
                <div className='kanbanCardBottom'>
                    <div>
                        { cardItem.type === 'task' ? <IoMdCheckbox style={{ color: '#4C9AFF', fontSize: '15px'}} /> : <BsFillBookmarkFill style={{ color: '#36B37E' }}/> }
                    </div>
                    <div style={{ marginLeft: '10px', fontSize: '14px' }}>
                        { cardItem.priority > '3' ? <AiOutlineArrowUp style={arrowColour(cardItem.priority)} /> : <AiOutlineArrowDown style={arrowColour(cardItem.priority)}/> }
                    </div>
                </div>
                <div>{ cardItem.user }</div>
            </div>
        </div>
    )
}



export default KanbanCard
