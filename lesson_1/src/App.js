import Message from './components/Message/Message.jsx';
import './style/Message/Message.css';
function App() {
  return (
    <div className = "app">
      <Message name = "Владислав" mood = "Замечательно"/>
      <Message name = "Андрей" mood = "Плохо"/>
      <Message name = "Олег" mood = "Отлично"/>
      <Message name = "Сергей" mood = "Средне"/>
    </div>
  );
}

export default App;