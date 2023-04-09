// import logo from './logo.svg';
import {AboutMe} from './component/AboutMe';
import {Contact} from './component/Contact';
import {Footer} from './component/Footer';
import {Header} from "./component/Header";
import {Navigation} from "./component/Navigation";
import {Project} from "./component/Project"
import {Resume} from "./component/Resume"
import {Skills} from "./component/Skills";


const App = () => {
  return (
    <div className='App'>
      <Navigation />
      <header className="header">
        <Header />
        <AboutMe />
      </header>
      <main>
        <Skills/>
        <Project/>
        <Resume />
      </main>
      <footer>
        <Footer/>
        <Contact/>
      
      </footer>
    </div>
  );
}
export default App