import '../src/styles/App.scss';
import { Chat } from './components/chat/Chat';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Chat />
      </header>
    </div>
  );
}

export default App;
