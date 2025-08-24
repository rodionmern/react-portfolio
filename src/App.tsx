import './App.css';
import Header from './components/Header/Header'
import Project from './components/Project/Project'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <>
    <Header />
    <main className="main">
      <h2 className='welcome_title'>Добро пожаловать, ниже вы можете увидеть список моих проектов:</h2>
      <div className="projects">
        <Project 
          title="brog" 
          description="Простой блог с бэкендом, админкой, в которой можно создавать и удалять посты, и авторизацмей для неё." 
          button_text="Перейти в репозиторий (фронт)" 
          link="https://github.com/rodionmern/brog-frontend"
          lang="TS и JS" />
        <Project 
          title="minecraft-utils" 
          description="Сайт, с утилитами для майнкрафтеров, который я задумывал как помощник для, в первую очередь, себя. (Проект не окончен)" 
          button_text="Перейти на нетлифаи" 
          link="https://minecraft-utils.netlify.app/"
          lang="JavaScript" />
        <Project 
          title="react-portfolio" 
          description="Если вы не поняли, то это сайт на котором вы сейчас находитесь :D" 
          button_text="Перейти в репозиторий" 
          link="https://github.com/rodionmern/react-portfolio" 
          lang="JavaScript" />
        <Project 
          title="date" 
          description="Обычная штмлька с скриптом, который считает сколько времени прошло с его создания." 
          button_text="Поглядеть сколько воды утекло" 
          link="https://rodionmern.github.io/date" 
          lang="HTML/CSS/JS" />
        <Project 
          title="ymr" 
          description="Телеграм бот для сохранения просмотренных фильмов в список, тут есть прикрученная апишка кинопоиска :)." 
          button_text="Перейти в репозиторий" 
          link="https://github.com/rodionmern/ymr" 
          lang="Python" />
        <Project 
          title="rapp" 
          description="Простой генератор паролей, с красивым оформлением (наверное)." 
          button_text="Перейти в репозиторий" 
          link="https://github.com/rodionmern/rapp" 
          lang="Python" />
        <Project 
          title="ytmusic-search" 
          description='С помощью этого скриптика (рука не позволяет назвать это "программой") можно искать песни с YTМузыки через консоль.' 
          button_text="Перейти в репозиторий" 
          link="https://github.com/rodionmern/youtubemusic-search" 
          lang="Python" />
      </div>
    </main><Footer /></>
  );
}

export default App;
