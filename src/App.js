import { Container } from 'react-bootstrap';
import './App.css';
import Interest from './Interest';

function App() {
  return (
    <div className="App">
      <h1>Simple Interest Calculator</h1>
      <Container className='bg-info mt-2 p-3'>
        <Interest></Interest>
      </Container>
    </div>
  );
}

export default App;
