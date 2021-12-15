
import KanbanBoardSection from "./KanbanBoardSection";

const KanbanMainBoard = () => {
    // const boardTitles = ['Backlog', 'To Do', 'In Progress', 'Ready for QA', 'Done'];

    const boardInfo = [
        {
            title: 'Backlog',
            store: 'backlog',
        },
        {
            title: 'To Do',
            store: 'todo',
        },
        {
            title: 'In Progress',
            store: 'inProgress',
        },
        {
            title: 'Ready for QA',
            store: 'readyForQA',
        },
        {
            title: 'Done',
            store: 'done',
        },
    ]

    return (
        <div className='mainBoardArea'>
            { boardInfo.map((board, idx) => {
                return <KanbanBoardSection sectionName={board.title} storeType={board.store} key={idx} />
            })}
        </div>
    )
}



export default KanbanMainBoard
