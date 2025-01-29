import { useEffect } from 'react'
import { Container } from 'semantic-ui-react';
import NavBar from './NavBar';
import 'semantic-ui-css/semantic.min.css';
import ActivitiesDashbord from '../../feature/activities/dashbord/ActivitiesDashbord';
import LoadingComponent from './LoadingComponent';
import { useStore } from '../stores/store';
import { observer } from 'mobx-react-lite';

function App() {

    const {activityStore} = useStore();

    useEffect(() => {
        activityStore.loadActivities();
    }, [activityStore]);

    if (activityStore.loadingInitial) return <LoadingComponent content='Loading Activities' />

    return (
        <>
            <NavBar />
            <Container style={{ marginTop: '5em' }}>
                <ActivitiesDashbord />
            </Container>
        </>
    )
}

export default observer(App)
