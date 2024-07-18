import './App.css';
import Counter from './components/Counter';
import Tabs from './components/Tabs';
import SocialPost from './components/SocialPost';
import Games from './components/Games';
import ProgressBar from './components/ProgressBar';
import Images from './components/Images';


function App() {


  return (
    <div className='container d-flex flex-column gap-3'>
      <Counter />
      <hr />
      <Tabs />
      <hr />
      <SocialPost />
      <hr />
      <Games />
      <hr />
      <ProgressBar />
      <hr />
      <Images />
      <hr />
    </div>
  )
}

export default App
