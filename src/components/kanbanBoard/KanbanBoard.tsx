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
    title: string,
    description: string,
    type: string,
    priority: number,
    user: string,
    code: string,
}

const KanbanBoard = () => {
    const [ showNewTaskCard, setShowTaskCard ] = useState(false);
    const [ showEditTaskCard, setShowEditTaskCard ] = useState(false);
    const [ currentTask, setCurrentTask ] = useState({
      description: '',
      type: '',
      priority: 1,
      user: '',
    })

    const dispatch = useDispatch();

    const addTask = (task: taskType) => {
        const id = Math.floor(Math.random() * 10000) + 1;

        const newTask = { id, ...task };

        dispatch(addItem(newTask));
    }

    const openTask = (item: taskType) =>  {
      console.log('open', item);
      setCurrentTask(item);
      setShowEditTaskCard(true);
    }

    return (
        <div className='kanbanMainArea'>
            <KanbanBreadcrumbs />
            <MainTitleArea title='Kanban Board' buttonText='Github Repo' />
            <KanbanTopMenu onOpen={() => setShowTaskCard(true)} />
            <KanbanMainBoard onOpen={(item: taskType) => openTask(item)} />
            { showNewTaskCard && <NewTaskItem onClose={() => setShowTaskCard(false)} onAdd={addTask} /> }
            { showEditTaskCard && <EditTaskItem onClose={() => setShowEditTaskCard(false)} editItem={currentTask}  /> }
        </div>
    )
}


export default KanbanBoard
