import './App.css';
import Search from './components/Search/Search';
import Notes from './components/Notes/Notes';
import Form from './components/Form/Form';

function App() {
  return (
    <div className='notesApp'>
      <h1 className='title'>Notes App</h1>
      <div className='notesApp'>
        <Search />
        <Form />
        <Notes />
      </div>
    </div>
  );
}

export default App;
