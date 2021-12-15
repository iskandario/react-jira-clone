
interface inputInfo {
    label: string
}

const FormTextInput = ({ label }: inputInfo) => {
    return (

        <div >
            <h5>{label}</h5>
            <input className='formTextInput'   />
        </div>

    )
}



export default FormTextInput
