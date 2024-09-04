// import {Greet,Greet1, Greet2} from "./componets creation/greetings/greet"
// import style from "./componets creation/greetings/greet.module.css"
// import CustomeCards from "./componets creation/boostrap/bootstrap"
// import { CardsData } from "./data/cardsdata"
// import FirstComponent from "./componets creation/boostrap/boostrap-component"
// import DemoCarousel from "./componets creation/tasks/corousal"
import "./App.css"
import ServerData from "./components/axios-task/cards-api"
// import YoutubeButton from "./components/classes_youtube/youtube-button"


const App =()=>{
  return(
    <>
   {/* <YoutubeButton/> */}
   <ServerData/>
</>
  )
}

export default App
