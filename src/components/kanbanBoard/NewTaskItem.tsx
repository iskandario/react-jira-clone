import FormTextInput from "../simpleComponents/FormTextInput"

const NewTaskItem = () => {
    return (
        <div className='taskItemArea'>
            <div className='taskItemPopup'>
                <h3>Add a new task</h3> 
                <div className='formArea'>
                    <div className='formTextInputArea'>
                        <FormTextInput label='Description'/>
                        <FormTextInput label='Ticket Type'/>
                    </div>
                    <div className='formTextInputArea'>
                        <FormTextInput label='Priority'/>
                        <FormTextInput label='User'/>
                    </div>
                </div>
                <div className='popupBtnArea'>
                    <button className='btn' style={{ marginRight: '20px' }}>Close</button>
                    <button className='btn'>Create</button>
                </div>
            </div>
        </div>
    )
}


export default NewTaskItem
