import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addItem } from '../../features/backlogList'
import KanbanBreadcrumbs from './KanbanBreadcrumbs'
import MainTitleArea from './MainTitleArea'
import KanbanTopMenu from './KanbanTopMenu'
import KanbanMainBoard from './KanbanMainBoard'
import NewTaskItem from './NewTaskItem'
import EditTaskItem from './EditTaskItem'
import { TaskItem } from '../../types/mainTypes'

// interface taskType {
//     title: string,
//     description: string,
//     type: string,
//     priority: number,
//     user: string,
//     code: string,
// }

const KanbanBoard = () => {
    const [ showNewTaskCard, setShowTaskCard ] = useState(false);
    const [ showEditTaskCard, setShowEditTaskCard ] = useState(false);
    

    const defaultTask = {
      title: "",
      description: "",
      id: null,
      type: "",
      user: "",
      priority: null,
      code: "",
      status: "",
      main_details: {
        description: "",
        environment: "",
        user_stories: "",
        affected_areas: "",
      },
      side_details: {
        user: "",
        priority: null,
        reporter: "",
        labels: "",
        project_manager: "",
        test: "",
        client: "",
        effort: "",
        start_date: "",
        chargable: "",
        fail_count: null,
      },
    }

    const [ currentTask, setCurrentTask ] = useState({})

    const dispatch = useDispatch();

    const addTask = (task: TaskItem) => {
        task.id = Math.floor(Math.random() * 10000) + 1;

        dispatch(addItem(task));
    }

    const openTask = (item: TaskItem) =>  {
      console.log('open', item);
      setCurrentTask(item);
      setShowEditTaskCard(true);
    }

    return (
        <div className='kanbanMainArea'>
            <KanbanBreadcrumbs />
            <MainTitleArea title='Kanban Board' buttonText='Github Repo' />
            <KanbanTopMenu onOpen={() => setShowTaskCard(true)} />
            <KanbanMainBoard onOpen={(item: TaskItem) => openTask(item)} />
            { showNewTaskCard && <NewTaskItem onClose={() => setShowTaskCard(false)} onAdd={addTask} /> }
            { showEditTaskCard && <EditTaskItem onClose={() => setShowEditTaskCard(false)} editItem={currentTask}  /> }
        </div>
    )
}


export default KanbanBoard
