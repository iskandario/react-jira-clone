import KanbanBoardSection from "./KanbanBoardSection";

const KanbanMainBoard = () => {
    const boardTitles = ['Backlog', 'To Do', 'In Progress', 'Ready for QA', 'Done'];

    return (
        <div className='mainBoardArea'>
            { boardTitles.map(title => {
                return <KanbanBoardSection sectionName={title} />
            })}
        </div>
    )
}



export default KanbanMainBoard
