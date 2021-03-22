import './App.css';
import Header from './Header';
import SwipeButtons from './SwipeButtons';
import TinderCards from './TinderCards';

function App() {
  return (
    <div className="app">
      {/* Header */}
      <Header/>
      {/* Tinder-card */}
      <TinderCards/>
      {/* Swipe Button */}
      <SwipeButtons/>
    </div>
  );
}

export default App;
