import './App.css';
import TemperatureConverter from './components/TemperatureConverter';
import "./components/temperatureConverter.css"
import TodoList from './components/TodoList/TodoList';



function App() {
  return (
    <div className="App">
      <TemperatureConverter />
      <TodoList />
    </div>
  );
}

export default App;