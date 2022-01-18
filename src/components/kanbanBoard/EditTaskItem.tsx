import FormTextInput from "../simpleComponents/FormTextInput";
import { IoMdCheckbox, IoMdClose } from 'react-icons/io';
import { IoEllipsisHorizontal } from 'react-icons/io5';
import { BsFillBookmarkFill, BsChevronCompactDown } from 'react-icons/bs';
import { FaBullhorn } from 'react-icons/fa';
import { AiOutlineEye, AiOutlineLike, AiOutlinePartition } from 'react-icons/ai';
import { HiOutlinePaperClip } from 'react-icons/hi';
import { BiLink } from 'react-icons/bi';
import { MdOutlineLibraryAddCheck } from 'react-icons/md';
import TaskItemArea from "../../styles/TaskPopupStyles";

import { LightButton, BoldTitle, SmallMainTitle } from "../../styles/GeneralStyles";
import SelectInput from "../simpleComponents/SelectInput";
import { useState } from "react";
 




const EditTaskItem = ({ onClose, editItem }: any) => {

  const [ selectedStatus, setSelectedStatus] = useState('dev_review');
  console.log('status', selectedStatus);

    console.log('to edit', editItem);

    const options = [
      {
        text: 'To Do',
        value: 'todo',
      },
      {
        text: 'In Progress',
        value: 'in_progress',
      },
      {
        text: 'Dev Review',
        value: 'dev_review',
      },
      {
        text: 'Done',
        value: 'done',
      },
    ];

    const popupStyle = {
        margin: '0 10px 0 10px',
        color: 'rgb(95, 94, 94)',
        fontSize: '25px',
        cursor: 'pointer',
    }

    const buttonIconStyle = {
      paddingRight: '10px',
      fontSize: '35px',
    }

    interface TicketDetailsObject {
      [key: string]: String;
    }

    const ticketDetails = {
      'Assignee': 'Ewa',
      'Reporter': 'EJ',
      'Development': '',
      'Labels': '',
      'Project Manager': '',
      'Test': '',
      'Client': '',
      'Effort': 'S',
      'Start Date': '',
      'Chargable?': '',
      'Fail Count': '',
    } as TicketDetailsObject;

    const mainDetails = {
      'Description': '',
      'Environment': '',
      'User Stories': '',
      "Area's Affected": '',
    } as TicketDetailsObject;


    return (
        <TaskItemArea>
            <div className='task-item-popup editTaskPopup'>
                <div className='main-flex-line'>
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
                        <IoMdClose style={popupStyle} onClick={onClose} />

                    </div>
                </div>

                <div className="main-flex-line">

                  <div className="left-task-panel">
                    <div className='task-title'> { editItem.title }</div> 
                    <div className="top-button-area">
                      <LightButton>
                        <HiOutlinePaperClip style={buttonIconStyle} />
                        <p>Attach</p>
                      </LightButton>
                      <LightButton>
                        <MdOutlineLibraryAddCheck style={buttonIconStyle} />
                        <p>Create subtask</p>
                        </LightButton>
                      <LightButton>
                        <BiLink style={buttonIconStyle} />
                        <p>Link issue</p>
                      </LightButton>
                      <LightButton>
                        <IoEllipsisHorizontal style={{ fontSize: '18px' }}/>
                      </LightButton>
                    </div>
                    <div className="main-ticket-body">
                      { Object.keys(mainDetails).map(key => {
                        return <div className="main-ticket-detail">
                                  <h5>{ key }</h5>
                                  <div> {mainDetails[key] || 'None' } </div>
                                </div>
                      })}
                       
                    </div>

                  </div>
                  <div className='right-task-panel'>
                    <SelectInput options={ options } onSelected={(e: string) => setSelectedStatus(e) } currentValue={selectedStatus} />
                    {/* <Button>
                      <p>On Hold</p>
                      <BsChevronCompactDown style={{ fontSize: '18px', marginLeft: '12px' }} />
                      </Button> */}
                    <div className="details-panel">
                      <BoldTitle>Details</BoldTitle>
                      <div className='ticket-details-area'>
                        <table>
                          {Object.keys(ticketDetails).map(info => {
                            return <tr>
                              <td><SmallMainTitle>{ info }</SmallMainTitle></td>
                              <td>{ ticketDetails[info] }</td>
                            </tr>
                          })}
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
        </TaskItemArea>
    )
}



export default EditTaskItem