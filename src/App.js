import './App.css';
import Todo from "./components/Todo"
import img1 from './images/f3.png';
import img2 from './images/f4.png';
import img3 from './images/f5.png';

function App() {
  return (
    <main class="main">
      <div className="container">
        <h2 className="main_title">Что Вам необходимо?</h2>
          <div className="main_block">
            <div className="blocks"><Todo title = "Первый блок" img={img1} text="Lorem ipsum dolor sit amet consectetur adipisicing elit"/></div>
            <div className="blocks"><Todo title = "Второй блок" img={img2} text="Lorem ipsum dolor sit amet consectetur adipisicing elit?"/></div>
            <div className="blocks"><Todo title = "Третий блок" img={img3} text="Lorem ipsum dolor sit amet consectetur adipisicing elit"/></div>
          </div>
      </div>
    </main>
  );
}

export default App;
