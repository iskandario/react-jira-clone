
interface inputInfo {
    label: string,
    inputValue: any,
    inputType: string,
    inputWidth: string,
    setChange: any
}

const FormTextInput = ({ label, inputValue, inputType, inputWidth, setChange }: inputInfo) => {
    return (

        <div >
            <h5>{label}</h5>
            <input style={inputWidth === 'full' ? { width:'100%'} : {}} className='formTextInput' type={inputType} value={inputValue} onChange={(e) => setChange(e.target.value)}  />
        </div>

    )
}



export default FormTextInput
