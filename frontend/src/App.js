import './App.css';
import axios from 'axios';

function App() {
  return (
    <div className="App">
      <button onClick={getBackend}>Send request</button>
    </div>
  );
}
const getBackend = () => {
axios.get('/button')
.then((response) => {
console.log(response.data)
})
}

export default App;
