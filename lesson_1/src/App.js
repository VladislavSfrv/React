import Message from './components/Message/Message.jsx';
import './style/Message/Message.css';
function App() {
  return (
    <div className = "app">
      <Message name = "Vladislav" mood = "Замечательно"/>
      <Message name = "Andrew" mood = "Плохо"/>
      <Message name = "Oleg" mood = "Отлично"/>
      <Message name = "Sergey" mood = "Средне"/>
    </div>
  );
}

export default App;