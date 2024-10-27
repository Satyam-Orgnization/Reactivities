import {
    Card,
    Image,
    Button,
} from 'semantic-ui-react'
import { Activity } from '../../../app/models/Activity'

interface Props
{
    activity: Activity;
    cancelSelectActivity: () => void;
}

const ActivityDetails = ({ activity, cancelSelectActivity }: Props) => (
    <Card>
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
                <Button color='blue' content='Edit' />
                <Button onClick={cancelSelectActivity} color='grey' content='Cancel' />
            </Button.Group>
        </Card.Content>
    </Card>
)

export default ActivityDetails