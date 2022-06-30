import { useEffect, useState } from 'react';
import './App.css';
import Gallary from './Components/Gallary';
import MySlider from './Components/MySlider';

function App() {
  const [suggestion, setSuggestion] = useState([])

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/photos?_limit=10')
    .then(res=> res.json())
    .then(data=>{
      
      setSuggestion(data)
      
    })
  });
  



  return (
    <div>

        {/* <Gallary 
        
          suggestion={suggestion}

        />       */}

        <MySlider 
          suggestion={suggestion}
        />

    </div>
  );
}

export default App;
