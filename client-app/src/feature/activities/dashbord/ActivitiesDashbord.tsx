
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
    editMode: boolean;
    openForm: (id: string) => void;
    closeForm: () => void;
    createOrEdit: (activity: Activity) => void;
    deleteActivity: (id: string) => void;
    submitting: boolean;
}

export default function ActivitiesDashbord({ activities, selectedActivity, selectActivty, cancelSelectActivity, editMode, openForm, closeForm, createOrEdit, deleteActivity, submitting }: Props)
{
    return (
        <Grid>
            <Grid.Column width='10'>
                <ActivityList activities={activities} selectActivty={selectActivty} deleteActivity={deleteActivity} submitting={submitting} />
            </Grid.Column>
            <Grid.Column width='6'>
                {selectedActivity && !editMode 
                    && <ActivityDetails activity={selectedActivity} cancelSelectActivity={cancelSelectActivity} openForm={openForm} />
                }
                {
                    editMode && <ActivityForm activity={selectedActivity} closeForm={closeForm} createOrEdit={createOrEdit} submitting={ submitting} />
                }
            </Grid.Column>
        </Grid>
    )

}