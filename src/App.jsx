import { useEffect, useState } from 'react';
import { Background } from './components/background';
import { Header } from './components/Header';
import { Description } from './components/description-movie';
import { Movies } from './components/movies';
import { Video } from './components/video';
import { apiData } from './api/data';
import axios from 'axios'


const DEFAULT_MOVIE = {
  title: "Top Gun: Maverick",
  description:
    "Depois de mais de 30 anos de serviço como um dos principais aviadores da Marinha, Pete 'Maverick' Mitchell está de volta, rompendo os limites como um piloto de testes corajoso. No mundo contemporâneo das guerras tecnológicas, Maverick enfrenta drones e prova que o fator humano ainda é essencial.",
  imageSmall:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLwLcGilpZtu8bCySl48IJJ3mvQGfen9HWiyIUc1A9HEFClsfLHar0FKSlirVEf_xABR4&usqp=CAU",
  imageBanner:
    "https://ntvb.tmsimg.com/assets/p14325539_v_h8_aj.jpg?w=960&h=540",
  linkVideo: "7aOCYTflp8o",
  category: "movies",
}


function App() {
  const [video, setVideo] = useState(DEFAULT_MOVIE)
  const [playVideo, setPlayVideo] = useState(false);
  const [movieData, setmovieData] = useState([])
  const baseUrl = 'http://localhost:3004'

  const { title, description, linkVideo, imageBanner } = video;

  const apiDataMovies = movieData?.movies?.length > 0 ? movieData : apiData

  useEffect(() => {
    const getMoviesAndCategories = async () => {
      const { data } = await axios.get(`${baseUrl}/movies-categories`);
      setmovieData(data);
    }
    getMoviesAndCategories()
  }, [])

  const handleOpenPlayVideo = () => setPlayVideo(true);
  const handleClosePlayVideo = () => setPlayVideo(false);
  const handleVideo = (data) => {
    setVideo(data)
    window.scrollTo({ top: 0 })
  }


  return (
    <Background imageBanner={imageBanner}>
      <Header />
      <Description
        title={title}
        description={description}

        handleOpenPlayVideo={handleOpenPlayVideo} />
      <Movies
        data={apiDataMovies}
        handleVideo={(data) => handleVideo(data)}
      />
      <Video
        playVideo={playVideo}
        handleClosePlayVideo={handleClosePlayVideo}
        linkVideo={linkVideo}
      />
    </Background>
  )
}

export default App
