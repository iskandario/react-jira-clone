import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addItem } from '../../features/backlogList'
import KanbanBreadcrumbs from './KanbanBreadcrumbs'
import MainTitleArea from './MainTitleArea'
import KanbanTopMenu from './KanbanTopMenu'
import KanbanMainBoard from './KanbanMainBoard'
import NewTaskItem from './NewTaskItem'
import EditTaskItem from './EditTaskItem'

interface taskType {
    description: string,
    type: string,
    priority: number,
    user: string,
}

const KanbanBoard = () => {
    const [ showNewTaskCard, setShowTaskCard ] = useState(false);
    const [ showEditTaskCard, setShowEditTaskCard ] = useState(false);

    const dispatch = useDispatch();

    const addTask = (task: taskType) => {
        const id = Math.floor(Math.random() * 10000) + 1;

        const newTask = { id, ...task };

        dispatch(addItem(newTask));
    }

    return (
        <div className='kanbanMainArea'>
            <KanbanBreadcrumbs />
            <MainTitleArea title='Kanban Board' buttonText='Github Repo' />
            <KanbanTopMenu onOpen={() => setShowTaskCard(true)} />
            <KanbanMainBoard onOpen={() => setShowEditTaskCard(true)} />
            { showNewTaskCard && <NewTaskItem onClose={() => setShowTaskCard(false)} onAdd={addTask} /> }
            { showEditTaskCard && <EditTaskItem onClose={() => setShowEditTaskCard(false)}  /> }
        </div>
    )
}


export default KanbanBoard
