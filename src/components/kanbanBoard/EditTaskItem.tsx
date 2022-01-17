import FormTextInput from "../simpleComponents/FormTextInput";
import { IoMdCheckbox, IoMdClose } from 'react-icons/io';
import { IoEllipsisHorizontal } from 'react-icons/io5';
import { BsFillBookmarkFill } from 'react-icons/bs';
import { FaBullhorn } from 'react-icons/fa';
import { AiOutlineEye, AiOutlineLike, AiOutlinePartition } from 'react-icons/ai';
import styled from 'styled-components'


const Button = styled.button`
  background: #ccc;
  font-weight: bold;
  padding: 8px 15px;
  border: none;
  border-radius: 4px;
  margin-bottom: 10px;
  font-family: Arial, Helvetica, sans-serif;
  letter-spacing: 1.2px;

  &:hover {
    background: #ddd;
    cursor: pointer;
  }
`;

const TaskItemArea = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  background-color:rgba(80, 79, 79, 0.5);
  flex-direction: column;
  justify-content: center;
  align-items: center;
 
`;

const TaskItemPopup = styled.div`
  background: white;
  padding: 20px;
  border-radius: 4px;
  box-shadow: 4px 5px 2px rgb(146, 146, 146);
  overflow: auto;
  border: 2px solid green;
`;

const TaskTitle = styled.h1`
  font-size: 22px;
  margin-top: 30px;
`;

const PopupTopLine = styled.div`
  display: flex;
  justify-content: space-between;
`;

const MainTaskPanel = styled.div`
  display: flex;
  justify-content: space-between;
  
  `;

const DetailsPanel = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const DetailsPanelTitle = styled.h4`
  color: black;
  border-bottom: 1px solid #666;
  padding: 10px 15px;
  font-family: Arial, Helvetica, sans-serif;
  letter-spacing: 1px;
`;

const TicketDetail = styled.div`
  display: flex;
  width: 100%;
  padding: 10px;
`;

const TicketLeftDetails = styled.div`
  flex: 1;
`;

const TicketRightDetails = styled.div`
  flex 2;
  padding-left: 30px;
`;

const LeftTaskPanel = styled.div`
  flex: 2;
`;

const RightTaskPanel = styled.div`
  flex: 1;
  margin-top: 30px;
`;

const DetailTitle = styled.p`
  font-size: 13px;
  colour: black;
  font-weight: bold;
  padding: 10px 0 10px 0;

`;

const DetailInfo = styled.p`
  font-size: 16px;
  color: #666;

  padding: 10px 0 10px 0;
  height: 38px;
`;

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


    return (
        <TaskItemArea>
            <TaskItemPopup className='editTaskPopup'>
                <PopupTopLine>
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
                </PopupTopLine>

                <MainTaskPanel>

                  <LeftTaskPanel>
                    <TaskTitle>Edit task</TaskTitle> 
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
                  </LeftTaskPanel>
                  <RightTaskPanel>
                    <Button>On Hold</Button>
                    <DetailsPanel>
                      <DetailsPanelTitle>Details</DetailsPanelTitle>
                      <TicketDetail>
                        <TicketLeftDetails>
                          { Object.keys(ticketDetails).map((info) =>  <DetailTitle>{info}</DetailTitle>)  }
                        </TicketLeftDetails>
                        <TicketRightDetails>
                          { Object.values(ticketDetails).map((info) => <DetailInfo>{info || 'None'}</DetailInfo>)}
                        </TicketRightDetails>
                      </TicketDetail>
                        {/* { Object.keys(ticketDetails).map((info) => {
                          return <TicketDetail>
                            <DetailTitle>{info}</DetailTitle>
                            <DetailInfo>{ ticketDetails[info] }</DetailInfo>
                          </TicketDetail>
                        })} */}
                    </DetailsPanel>
                  </RightTaskPanel>

                
                </MainTaskPanel>

                </TaskItemPopup>
        </TaskItemArea>
    )
}



export default EditTaskItem