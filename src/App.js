
import './App.css';
import DateTime from './Components/DateTime';
import Video3 from './Components/General3.mp4';


function App() {

  return (
    <div className="App">

    
      
      <div className='overlay'>    </div>      

      <video src={Video3} autoPlay loop muted></video>
      
      <div className='content'>
      <h1>“Where there’s tea there’s hope.” <br /> – Arthur Wing Pinero </h1>
      <DateTime />
      </div>


    </div>
  );
}

export default App;
