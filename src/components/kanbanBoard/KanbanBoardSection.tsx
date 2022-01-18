import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import KanbanCard from "./KanbanCard";
interface boardArea {
    sectionName: string,
    storeType: string,
    onOpen: any
}

const KanbanBoardSection = ( { sectionName, storeType, onOpen }: boardArea) => {


    const sectionItems = useSelector((state: RootState) => {
        switch (storeType) {
            case 'backlog':
                return state.backlog.value
            // case 'todo':
            //     return state.todo.value
            // case 'inProgress':
            //     return state.inProgress.value
            // case 'readyForQA':
            //     return state.readyForQA.value
            // case 'done':
            //     return state.done.value
            default: 
                return [];
        }
    });

    return (
        <div className='sectionBoardArea'>
            <div className='boardTitle'>
                <h5>{ sectionName }</h5>
                <h5>{sectionItems.length}</h5>
            </div>
            { sectionItems.map((item, idx) => {
                return <div onClick={() => onOpen(item)} key={idx}>
                        <KanbanCard {...item}  />
                    </div>
            })}
        </div>
    )
}


export default KanbanBoardSection
