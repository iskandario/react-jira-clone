import { useState } from 'react'
import styled from 'styled-components';
import FormTextInput from "../simpleComponents/FormTextInput"
import TaskItemArea from "../../styles/TaskPopupStyles";



const NewTaskItem = ({onClose, onAdd}: any) => {
    const [description, setDescription] = useState('');
    const [type, setTicketType] = useState('');
    const [priority, setPriority] = useState('');
    const [user, setUser] = useState('');

    const onSubmit = (e: any) => {
        e.preventDefault();
        if (!description) return;
        onAdd({ description, type, priority, user });

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
                        <FormTextInput label='Description' inputValue={description} setChange={(e: string) => setDescription(e)}/>
                        <FormTextInput inputValue={type} setChange={(e: string) => setTicketType(e)} label='Ticket Type'/>
                    </div>
                    <div className='formTextInputArea'>
                        <FormTextInput inputValue={priority} setChange={(e: string) => setPriority(e)} label='Priority'/>
                        <FormTextInput inputValue={user} setChange={(e: string) => setUser(e)} label='User'/>
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
