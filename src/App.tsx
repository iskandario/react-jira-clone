import './App.css';
import SideNav from './components/navBar/SideNav';
import MenuNav from './components/navBar/MenuNav';
import KanbanBoard from './components/kanbanBoard/KanbanBoard';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <SideNav />
        <MenuNav />
        <KanbanBoard />
      </div>
    </div>
  );
}

export default App;
