
import './App.css';
import ContactList from './component/ContactList';
import UploadContact from './component/UploadContact';

function App() {
  return (
    <div className="App">
      <UploadContact/>
     <ContactList/>
    </div>
  );
}

export default App;
