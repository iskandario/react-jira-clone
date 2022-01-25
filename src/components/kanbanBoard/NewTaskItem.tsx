import { useState } from 'react'
import FormTextInput from "../simpleComponents/FormTextInput"
import TaskItemArea from "../../styles/TaskPopupStyles";



const NewTaskItem = ({onClose, onAdd}: any) => {
    const [description, setDescription] = useState('');
    const [title, setTitle] = useState('');
    const [type, setTicketType] = useState('');
    const [priority, setPriority] = useState('');
    const [user, setUser] = useState('');

    const onSubmit = (e: any) => {
        e.preventDefault();
        if (!description) return;
        onAdd({ title, description, type, priority, user });

        onClose();
        clearValues();
    }


    const clearValues = () => {
        setDescription('');
        setTicketType('');
        setPriority('');
        setUser('');
    }

    return (
        <TaskItemArea >
            <div className='task-item-popup newTaskPopup'>
                <h3>Add a new task</h3> 
                <div className='formArea'>
                    <div className='formTextInputArea'>
                        <FormTextInput label='Title' inputType='string' inputValue={title} inputWidth='' setChange={(e: string) => setTitle(e)}/>
                        <FormTextInput inputType='string' inputValue={type} inputWidth='' setChange={(e: string) => setTicketType(e)} label='Ticket Type'/>
                    </div>
                    <div>
                        <FormTextInput label='Description' inputType='string' inputValue={description} inputWidth='full' setChange={(e: string) => setDescription(e)}/>
                      </div>
                    <div className='formTextInputArea'>
                        <FormTextInput inputType='string' inputValue={priority} inputWidth='' setChange={(e: string) => setPriority(e)} label='Priority'/>
                        <FormTextInput inputType='string' inputValue={user} inputWidth='' setChange={(e: string) => setUser(e)} label='User'/>
                    </div>
                </div>
                <div className='popupBtnArea'>
                    <button className='btn' style={{ marginRight: '20px' }} onClick={onClose}>Close</button>
                    <button type='submit' className='btn' onClick={onSubmit}>Create</button>
                </div>
            </div>
        </TaskItemArea>
    )
}


export default NewTaskItem
