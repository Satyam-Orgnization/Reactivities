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
    const [editMode, setEditMode] = useState(false);


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

    function handleOpenForm(id?: string)
    {
        id ? handleSelectActivity(id) : handleCancelSelectActivity();
        setEditMode(true);
    }

    function handleCloseForm()
    {
        setEditMode(false);
    }

    function handleCreateOrEditActivity(activity: Activity)
    {
        activity.id ? setActivities([...activities.filter(a => a.id !== activity.id), activity])
            : setActivities([...activities, activity]);
        setEditMode(false);
    }

    function handleDeleteActivity(id: string) {
        setActivities([...activities.filter(a => a.id !== id)]);
            
    }

    return (
        <>
            <NavBar openForm={handleOpenForm} />
            <Container style={{marginTop: '5em'}}>
                <ActivitiesDashbord
                    activities={activities}
                    selectedActivity={selectedActivity}
                    selectActivty={handleSelectActivity}
                    cancelSelectActivity={handleCancelSelectActivity}
                    editMode={editMode}
                    openForm={handleOpenForm}
                    closeForm={handleCloseForm}
                    createOrEdit={handleCreateOrEditActivity}
                    deleteActivity={handleDeleteActivity}
                />
            </Container>
        </>
    )
}

export default App
