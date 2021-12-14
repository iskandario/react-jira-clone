
interface boardArea {
    sectionName: string
}

const KanbanBoardSection = ( { sectionName }: boardArea) => {
    return (
        <div className='sectionBoardArea'>
            <div className='boardTitle'>
                <h5>{ sectionName }</h5>
                <h5>0</h5>
            </div>
            
        </div>
    )
}


export default KanbanBoardSection
