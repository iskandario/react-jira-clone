
interface inputInfo {
    label: string,
    inputValue: any,
    setChange: any
}

const FormTextInput = ({ label, inputValue, setChange }: inputInfo) => {
    return (

        <div >
            <h5>{label}</h5>
            <input className='formTextInput' value={inputValue} onChange={(e) => setChange(e.target.value)}  />
        </div>

    )
}



export default FormTextInput
