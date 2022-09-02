import './App.css';
import Header from './components/Header/index'
import Control from './components/control/index'
import Main from './components/Main/index'

function App() {
  return (
    <>
       <Header />
       <div className='app-wrapper' >
       <Control />
       <Main />
       </div>
    </>
  );
}

export default App;
