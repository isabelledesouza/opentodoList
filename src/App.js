
import './App.css';
import TaskListComponent from './components/container/task_list';
import Disponible from './components/container/Disponible';
function App() {
  return (
    <div className="App">


     <TaskListComponent></TaskListComponent>
     <Disponible></Disponible>
    </div>
  );
}

export default App;
