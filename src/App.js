import './App.css';
import FavoriteNumber from './components/FavoriteNumber';
import { WithNumberGenerator } from './components/WithNumberGenerator';

const EnhancedHello = WithNumberGenerator(FavoriteNumber)

function App() {
  return (
    <div className="App">
      <EnhancedHello/>
   </div>
  );
}

export default FavoriteNumber(App);
