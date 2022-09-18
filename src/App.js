
import './App.css';
import TaskListComponent from './components/container/task_list';
import Disponible from './components/container/Disponible';
import Ejemplo1 from "./hooks/Ejemplo1.jsx"
import Ejemplo2 from './hooks/Ejemplo2';
import MiComponenteConContexto from './hooks/Ejemplo';
function App() {
  return (
    <div className="App">


     <TaskListComponent></TaskListComponent>
     <Disponible></Disponible>
     <Ejemplo1></Ejemplo1>
     <Ejemplo2></Ejemplo2>
    <MiComponenteConContexto></MiComponenteConContexto>
    </div>
  );
}

export default App;
