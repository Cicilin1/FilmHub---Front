import { Background } from './components/background';
import { Header } from './components/Header';
import { Description } from './components/description-movie';
import { Movies } from './components/movies';
import { Video } from './components/video';


function App() {

  return (
    <Background>
      <Header />
      <Description />
      <Movies />
      <Video />
    </Background>
  )
}

export default App
