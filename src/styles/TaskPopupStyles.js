import styled from "styled-components";

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

  .task-item-popup {
    background: white;
    padding: 20px;
    border-radius: 4px;
    box-shadow: 4px 5px 2px rgb(146, 146, 146);
    overflow: auto;
  }

  .task-title {
    font-size: 22px;
    margin-top: 30px; 
  }
 
  .main-flex-line {
    display: flex;
    justify-content: space-between;
  }

  .left-task-panel {
    flex: 2;
  }
  .right-task-panel {
    flex: 1;
    margin-top: 30px;
  }

  .top-button-area {
    display: flex;
    margin-bottom: 30px;
  }

  .details-panel {
    display: flex;
    flex-direction: column;
    border: 1px solid var(--lightGrey);
    border-radius: 4px;
  }

  .ticket-details-area {
    display: flex;
    width: 100%;
    padding: 10px;
  }

  .detail-info {
    font-size: 15px;
    color: #666;
    padding: 10px 0 10px 0;
    height: 38px;
  }

  .main-ticket-body {
    width: 100%;
    padding-right: 40px;
  }

  .main-ticket-detail {
    margin-top: 20px;
  }

`;


export default TaskItemArea;