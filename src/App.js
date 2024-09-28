import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header'
import Project from './components/Project/Project'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <><Header /><main className="main">
      <div className="projects">
        <Project title="RAPP" description="A simple CLI password generator." buttontext="Get more about RAPP" lang="Python" link="https://github.com/rodionmern/rapp" />
        <Project title="YTMusic-Search" description="A small project that uses the API to search for songs in YTMusic." buttontext="Get more about YTMS" lang="Python" link="https://github.com/rodionmern/youtubemusic-search" />
        <Project title="This site" description="A simple portfolio page written in ReactJS." buttontext="Get more about this site" lang="JS" link="https://github.com/rodionmern/react-portfolio" />
      </div>
    </main><Footer /></>
  );
}

export default App;
