import './App.css';
import SideNav from './components/navBar/SideNav';
import MenuNav from './components/navBar/MenuNav';
import KanbanBoard from './components/kanbanBoard/KanbanBoard';
import { createGlobalStyle } from 'styled-components';

const GlobalSyles = createGlobalStyle`
  html {
    --grey: #3A3A3A;
    --midGrey: #666666;
    --lightGrey: #f2f2f2;
    --offWhite: #ededed;
    --bs: 0 12px 24px 0 rgba(0,0,0,0.09);
  }
`;

function App() {
  return (
    <div className="App">
      <GlobalSyles />
      <div className='container'>
        <SideNav />
        <MenuNav />
        <KanbanBoard />
      </div>
    </div>
  );
}

export default App;
