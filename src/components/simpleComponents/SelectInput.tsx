import styled from "styled-components"
import { BsChevronCompactDown } from 'react-icons/bs';


const SelectInputStyles = styled.select`
cursor: pointer;
  background: #ccc;
  padding: 8px 15px;
  border: none;
  border-radius: 4px;
  margin-bottom: 10px;
  font-weight: medium;
  font-family: Arial, Helvetica, sans-serif;
  appearance: none;

  &:focus {
    outline: none;
  }
`;

interface selectValue {
  text: string,
  value: string,

}

const SelectInput = ( { options, currentValue, onSelected }: any) => {

  return (
      <SelectInputStyles onChange={e => onSelected(e.target.value)} value={currentValue}>
         { options.map((option: selectValue) => {
           return <option value={option.value} key={option.value} >{option.text}</option>
          
         })}
         {/* <BsChevronCompactDown style={{ fontSize: '18px', marginLeft: '12px' }} /> */}
         {/* <option value={option.value} key={option.value} >{option.text}</option> */}
         
      </SelectInputStyles>

  )
}

export default SelectInput
