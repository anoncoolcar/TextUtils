
import './App.css';
import NavBar from './components/navbar';
import TextForm from './components/TextForm';
function App() {
  return (
  <>
  
  <NavBar />
  <div className='container my-3'>
  <TextForm heading="Enter the text to analyze below"/>

  </div>
  </>
  
  );
}

export default App;
