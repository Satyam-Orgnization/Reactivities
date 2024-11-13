import { useEffect, useState } from 'react'
import { Container } from 'semantic-ui-react';
import { Activity } from '../models/Activity';
import NavBar from './NavBar';
import 'semantic-ui-css/semantic.min.css';
import ActivitiesDashbord from '../../feature/activities/dashbord/ActivitiesDashbord';
import agent from '../api/agent';
import LoadingComponent from './LoadingComponent';

import { v4 as uuid } from 'uuid'
import { useStore } from '../stores/store';

function App() {

    const {activityStore} = useStore();
    const [activities, setActivities] = useState<Activity[]>([]);
    const [selectedActivity, setSelectedActivity] = useState<Activity>();
    const [editMode, setEditMode] = useState(false);
    const [submitting, setSubmitting] = useState(false);


    useEffect(() => {
        activityStore.loadActivities();
        console.log( "activityStore.loadActivities()")
    }, [activityStore]);


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
    console.log("if (activityStore.loadingInitial)")
    if (activityStore.loadingInitial) return <LoadingComponent content='Loading Activities' />

    return (
        <>
            <NavBar openForm={handleOpenForm} />
            <Container style={{ marginTop: '5em' }}>
                <h1>{activityStore.activities.toString()}</h1>
                <ActivitiesDashbord
                    activities={activityStore.activities}
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
