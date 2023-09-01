import { useState } from 'react'
import './App.css';
import './PhotoViewer/PhotoViewer.css';
import { ImageSelector } from './PhotoViewer/ImageSelector.tsx';
import { PhotoViewer } from './PhotoViewer/PhotoViewer.tsx';


function App() {

  const [imageUrl, setImageUrl] = useState<string>("https://picsum.photos/600/350");
  //const [imageUrl, setImageUrl] = useState<string>("https://picsum.photos/id/600/1600/900.jpg");

  return (
    <div>
      <h1 className='PageTitle'>React Photo Viewer</h1>
      <PhotoViewer imageUrl={imageUrl}/>
      <ImageSelector/>
    </div>

    // <>
    //   <div>
    //     <a href="https://vitejs.dev" target="_blank">
    //       <img src={viteLogo} className="logo" alt="Vite logo" />
    //     </a>
    //     <a href="https://react.dev" target="_blank">
    //       <img src={reactLogo} className="logo react" alt="React logo" />
    //     </a>
    //   </div>
    //   <h1>Vite + React</h1>
    //   <div className="card">
    //     <button onClick={() => setCount((count) => count + 1)}>
    //       count is {count}
    //     </button>
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to test HMR
    //     </p>
    //   </div>
    //   <p className="read-the-docs">
    //     Click on the Vite and React logos to learn more
    //   </p>
    // </>
  )
}

export default App
