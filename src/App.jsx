import { Background } from './components/background'
import { Header } from './components/Header'
import { Description } from './components/description-movie'
import { Movies } from './components/movies'

function App() {

  return (
    <Background>
      <Header />
      <Description />
      <Movies />
    </Background>
  )
}

export default App
