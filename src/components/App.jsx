import {PageTitle} from './PageTitle/PageTitle'
import { EventBoard } from './EventBoard/EventBoard';
import upcomingEvents from '../data/upcomingEvents'

export const App = () => {
  return (
    <>
      <PageTitle text={"24TH core worlds coalition conference"}/>
      <EventBoard events={upcomingEvents}/>
    </>
  );
}

