import FormTextInput from "../simpleComponents/FormTextInput";
import { IoMdCheckbox, IoMdClose } from 'react-icons/io';
import { IoEllipsisHorizontal } from 'react-icons/io5';
import { BsFillBookmarkFill } from 'react-icons/bs';
import { FaBullhorn } from 'react-icons/fa';
import { AiOutlineEye, AiOutlineLike, AiOutlinePartition } from 'react-icons/ai';

const EditTaskItem = ({ onClose }: any) => {

    const editItem = {
        type: 'story',
        code: 'MET-701',
        title: 'Review Changes needed for New Platform',
        status: 'Backlog',
    };

    const popupStyle = {
        margin: '0 10px 0 10px',
        color: 'rgb(95, 94, 94)',
        fontSize: '25px',
    }



    return (
        <form className='taskItemArea'>
            <div className='taskItemPopup editTaskPopup'>
                <div className='popupTopLine'>
                    <div className='main-flex' >
                        { editItem.type === 'task' ? <IoMdCheckbox style={{ color: '#4C9AFF', fontSize: '15px'}} /> : <BsFillBookmarkFill style={{ color: '#36B37E' }}/> }
                        <p className='main-text' style={{ marginLeft: '10px' }}>{editItem.code}</p>
                    </div>
                    <div className='main-flex' >
                        <div className='main-flex' style={{ marginRight: '10px'}}>
                            <div style={{ marginRight: '10px' }}><FaBullhorn /></div>
                            <p className='main-text'>Give FeedBack</p>
                        </div>
                        <AiOutlineEye style={popupStyle} />
                        <AiOutlineLike style={popupStyle} />
                        <AiOutlinePartition style={popupStyle} />
                        <IoEllipsisHorizontal style={popupStyle} />
                        <IoMdClose style={popupStyle} />

                    </div>
                </div>
            <h3>Edit task</h3> 
                <div className='formArea'>
                    <div className='formTextInputArea'>
                        <div >
                            <h5>Description</h5>
                            <input className='formTextInput'  />
                        </div>
                    </div>
                </div>
                <div className='popupBtnArea'>
                    <button className='btn' style={{ marginRight: '20px' }} onClick={onClose}>Close</button>
                    <button type='submit' className='btn'>Save</button>
                </div>
            </div>
        </form>
    )
}



export default EditTaskItem