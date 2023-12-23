import { Container } from 'react-bootstrap';
import Interest from './Interest';

function App() {
  return (
    <div>
      <h1 className='text-center'>Interest Calculator</h1>
      <Container className='mt-2 p-3 bg-light'>
        <Interest/>
      </Container>
    </div>
  );
}

export default App;
