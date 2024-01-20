import './App.css';
import { About } from './components/About/About';
import { StackCard } from './components/About/StackCard';
import Timeline from './components/About/Timeline';
import Hero from './components/Hero';
import Nav from './components/Nav';

function App() {
  return (
    <div className='lg:h-[150vh] h-[250vh]'>
      <Nav />
      <Hero />
      <StackCard/>
      {/* <Timeline/> */}

    </div>



  );
}

export default App;
