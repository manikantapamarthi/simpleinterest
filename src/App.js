import { Container } from 'react-bootstrap';
import Interest from './Interest';
import CopyRights from './CopyRights';
import './App.css';

function App() {
  return (
    <div>
      <h1 className='text-center'>Interest Calculator</h1>
      <Container className='mt-2 p-3 bg-color'>
        <Interest/>
      </Container>
      <CopyRights></CopyRights>
    </div>
  );
}

export default App;
