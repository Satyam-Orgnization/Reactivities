import {
    Card,
    Image,
    Button,
} from 'semantic-ui-react';
import { useStore } from '../../../app/stores/store';
import LoadingComponent from '../../../app/layout/LoadingComponent';

export default function ActivityDetails() {

    const { activityStore } = useStore();
    const { selectedActivity: activity, cancelSelectedActivity, openForm } = activityStore;

    if (!activity)
        return <LoadingComponent />;

    return (
        <Card fluid>
            <Image src={'/assets/categoryImages/' + activity.category.toLowerCase() + '.jpg'} />
            <Card.Content>
                <Card.Header>{activity.title}</Card.Header>
                <Card.Meta>
                    <span>{activity.date}</span>
                </Card.Meta>
                <Card.Description>
                    {activity.description}
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <Button.Group>
                    <Button onClick={() => openForm(activity.id)} color='blue' content='Edit' />
                    <Button onClick={() => cancelSelectedActivity()} color='grey' content='Cancel' />
                </Button.Group>
            </Card.Content>
        </Card>
    )
}