import {PageTitle} from '../PageTitle/PageTitle'
import { EventBoard } from '../EventBoard/EventBoard';
import upcomingEvents from '../../data/upcomingEvents'
import {Container} from './App.styled'

export const App = () => {
  return (
    <Container>
      <PageTitle text={"24TH core worlds coalition conference"}/>
      <EventBoard events={upcomingEvents}/>
    </Container>
  );
}

