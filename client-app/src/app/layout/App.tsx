import { useEffect, useState } from 'react'
import { Container } from 'semantic-ui-react';
import { Activity } from '../models/Activity';
import NavBar from './NavBar';
import 'semantic-ui-css/semantic.min.css';
import ActivitiesDashbord from '../../feature/activities/dashbord/ActivitiesDashbord';
import agent from '../api/agent';
import LoadingComponent from './LoadingComponent';

import { v4 as uuid } from 'uuid'

function App() {
    const [activities, setActivities] = useState<Activity[]>([]);
    const [selectedActivity, setSelectedActivity] = useState<Activity>();
    const [editMode, setEditMode] = useState(false);
    const [loading, setLoading] = useState(true);
    const [submitting, setSubmitting] = useState(false);


    useEffect(() => {
        agent.Activities.list().then(response => {
            setActivities(response);
            setLoading(false);
        })
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
        setSubmitting(true);

        if (activity.id) {
            agent.Activities.update(activity).then(() => {
                setActivities([...activities.filter(a => a.id !== activity.id), activity]);
                setSelectedActivity(activity);
                setEditMode(false);
                setSubmitting(false);
            })
        }
        else
        {
            activity.id = uuid();
            agent.Activities.create(activity).then(() => {
                setActivities([...activities, activity]);
                setSelectedActivity(activity);
                setEditMode(false);
                setSubmitting(false);
            })
        }
    }

    function handleDeleteActivity(id: string) {
        setSubmitting(true);
        agent.Activities.delete(id).then(() => {
            setActivities([...activities.filter(a => a.id !== id)]);
            setSubmitting(false);
        })
            
    }

    if (loading) return <LoadingComponent content='Loading Activities' />

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
                    submitting={submitting}
                />
            </Container>
        </>
    )
}

export default App
