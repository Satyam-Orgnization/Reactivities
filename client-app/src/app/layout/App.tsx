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
import { observer } from 'mobx-react-lite';

function App() {

    const {activityStore} = useStore();
    const [activities, setActivities] = useState<Activity[]>([]);
    const [submitting, setSubmitting] = useState(false);


    useEffect(() => {
        activityStore.loadActivities();
    }, [activityStore]);

    function handleCreateOrEditActivity(activity: Activity)
    {
        setSubmitting(true);

        if (activity.id) {
            agent.Activities.update(activity).then(() => {
                setActivities([...activities.filter(a => a.id !== activity.id), activity]);
                setSubmitting(false);
            })
        }
        else
        {
            activity.id = uuid();
            agent.Activities.create(activity).then(() => {
                setActivities([...activities, activity]);
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

    if (activityStore.loadingInitial) return <LoadingComponent content='Loading Activities' />

    return (
        <>
            <NavBar />
            <Container style={{ marginTop: '5em' }}>
                <ActivitiesDashbord
                    activities={activityStore.activities}
                    createOrEdit={handleCreateOrEditActivity}
                    deleteActivity={handleDeleteActivity}
                    submitting={submitting}
                />
            </Container>
        </>
    )
}

export default observer(App)
