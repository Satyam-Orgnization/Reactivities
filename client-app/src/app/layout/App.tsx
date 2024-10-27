import { useEffect, useState } from 'react'
import axios from 'axios';
import { Container } from 'semantic-ui-react';
import { Activity } from '../models/Activity';
import NavBar from './NavBar';
import 'semantic-ui-css/semantic.min.css';
import ActivitiesDashbord from '../../feature/activities/dashbord/ActivitiesDashbord';

function App() {
    const [activities, setActivities] = useState<Activity[]>([]);
    const [selectedActivity, setSelectedActivity] = useState<Activity>();


    useEffect(() => {
        axios.get<Activity[]>('http://localhost:5000/api/activities')
            .then(response => {
                setActivities(response.data);
            });
    }, []);


    function handleSelectActivity(id: string)
    {
        setSelectedActivity(activities.find(x => x.id === id));
    }

    function handleCancelSelectActivity() {
        setSelectedActivity(undefined);
    }

    return (
        <>
            <NavBar />
            <Container style={{marginTop: '5em'}}>
                <ActivitiesDashbord
                    activities={activities}
                    selectedActivity={selectedActivity}
                    selectActivty={handleSelectActivity}
                    cancelSelectActivity={handleCancelSelectActivity}
                />
            </Container>
        </>
    )
}

export default App
