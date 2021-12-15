import KanbanBreadcrumbs from './KanbanBreadcrumbs'
import MainTitleArea from './MainTitleArea'
import KanbanTopMenu from './KanbanTopMenu'
import KanbanMainBoard from './KanbanMainBoard'
import NewTaskItem from './NewTaskItem'

const KanbanBoard = () => {
    const showNewTaskCard = false;

    return (
        <div className='kanbanMainArea'>
            <KanbanBreadcrumbs />
            <MainTitleArea title='Kanban Board' buttonText='Github Repo' />
            <KanbanTopMenu />
            <KanbanMainBoard />
            { showNewTaskCard && <NewTaskItem /> }
        </div>
    )
}


export default KanbanBoard
