import './App.css';
import Header from './components/header/header';
import Sidebar from './components/sidebar/Sidebar';
import Feed from './components/feed/Feed';
import Widgets from './components/widgets/Widgets';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='app_body'>
        <Sidebar/>
        <Feed/>
        {/* <Widgets/> */}
      </div>

    </div>
  );
}

export default App;
