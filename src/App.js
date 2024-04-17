import './App.css';
import img1 from "./images/logo512.png";
import img2 from "./images/flowchart.png";
import img3 from "./images/rocket-launch.png";
import { useState } from 'react';
function App() {
  const [img , setImg] = useState(img1);
  return (
    <div className="App">
      <div>
      <img
        height="200px"
        src={img}
      ></img>
      </div>
      <div className='button'>
        <button
          onClick={async () => {
            setTimeout(() => {
              const imgs = [img1 , img2, img3];
              const num = Math.floor(Math.random() * 3);
              setImg(imgs[num]);
            } , 3000);
          }}
        >Change</button>
      </div>
    </div>
  );
}

export default App;
