import React, {useState,useEffect} from 'react';
import { Button } from 'reactstrap';
import { useSelector, useDispatch } from 'react-redux'
import { openModal } from '../../features/homepage/homepageSlice'
import NewEventModal from '../modal/NewEventModal';
import PostList from '../postlist/PostList';

export function Homepage () {
    const dispatch = useDispatch();
    const [events, setEvents] = useState([]);

    useEffect(() => {
      console.log(events)
    
      return;
    }, [events]);

    return (
      <div>
        <Button 
            color="primary"
            onClick={() => dispatch(openModal("OPEN_MODAL"))}
        >Create Event</Button>{' '}
        
        <NewEventModal events={events} setEvents={setEvents}/>
        <PostList events={events} setEvents={setEvents}/>
      </div>
    );
}

export default Homepage;