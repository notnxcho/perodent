
import './App.css';
import PeriodontalChart from './components/PeriodontalChart/PeriodontalChart';
import keystrokes from './assets/keystrokes.png'


function App() {
  return (
    <div className="flex flex-col w-screen min-h-screen items-center justify-center gap-4 ">
      <PeriodontalChart />
      <img src={keystrokes} height={188} width={609}/>
    </div>
  );
}

export default App;
