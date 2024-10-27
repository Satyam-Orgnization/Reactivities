
import { Grid } from 'semantic-ui-react'
import { Activity } from '../../../app/models/Activity'
import ActivityList from './ActivityList';
import ActivityDetails from '../details/ActivityDetails';
import ActivityForm from '../form/ActivityFrom';

interface Props {
    activities: Activity[];
    selectedActivity: Activity | undefined;
    selectActivty: (id: string) => void;
    cancelSelectActivity: () => void;
}

export default function ActivitiesDashbord({ activities, selectedActivity, selectActivty, cancelSelectActivity }: Props)
{
    return (
        <Grid>
            <Grid.Column width='10'>
                <ActivityList activities={activities} selectActivty={selectActivty} />
            </Grid.Column>
            <Grid.Column width='6'>
                {selectedActivity
                    && <ActivityDetails
                    activity={selectedActivity} cancelSelectActivity={cancelSelectActivity} />
                }
                <ActivityForm />
            </Grid.Column>
        </Grid>
    )

}