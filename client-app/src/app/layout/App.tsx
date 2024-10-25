import { useEffect, useState } from 'react'
import axios from 'axios';
import { Container } from 'semantic-ui-react';
import { Activity } from '../models/Activity';
import NavBar from './NavBar';
import 'semantic-ui-css/semantic.min.css';
import ActivitiesDashbord from '../../feature/activities/dashbord/ActivitiesDashbord';

function App() {
    const [activities, setActivities] = useState<Activity[]>([]);

    useEffect(() => {
        axios.get<Activity[]>('http://localhost:5000/api/activities')
            .then(response => {
                setActivities(response.data);
            });
    }, []);

    return (
        <>
                <NavBar />
                <ActivitiesDashbord activities={activities}/>
        </>
    )
}

export default App
