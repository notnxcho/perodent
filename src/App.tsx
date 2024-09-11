
import './App.css';
import PeriodontalChart from './components/PeriodontalChart/PeriodontalChart';

function App() {
  return (
    <div className="flex flex-col w-screen min-h-screen items-center justify-center gap-4 ">
      <h1>Periodontal Chart</h1>
      <PeriodontalChart />
    </div>
  );
}

export default App;
