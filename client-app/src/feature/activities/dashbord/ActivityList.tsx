import { Button, Item, Label, Segment } from "semantic-ui-react";
import { Activity } from "../../../app/models/Activity"
import { SyntheticEvent, useState } from "react";

interface Props
{
    activities: Activity[];
    selectActivty: (id: string) => void;
    deleteActivity: (id: string) => void;
    submitting: boolean;
}
export default function ActivityList({ activities, selectActivty, deleteActivity, submitting } : Props)
{
    const [target, setTarget] = useState('');

    function handleDeleteActivity(e: SyntheticEvent<HTMLButtonElement>, id: string)
    {
        setTarget(e.currentTarget.name);
        deleteActivity(id);
    }

    const a= 
    (
        <Segment>
            <Item.Group divided>
                {activities.map(activity => (
                    <Item key={activity.id}>
                        <Item.Content>
                            <Item.Header as='a'>
                                {activity.title}
                            </Item.Header>
                            <Item.Meta>
                                {activity.date}
                            </Item.Meta>
                            <Item.Description>
                                <div>{activity.description}</div>
                                <div>{activity.city}, {activity.venue}</div>
                            </Item.Description>
                            <Item.Extra>
                                <Button onClick={() => selectActivty(activity.id)} floated='right' content='View' color='blue' />
                                <Button name={activity.id} loading={submitting && target === activity.id} onClick={(e) => handleDeleteActivity(e, activity.id)} floated='right' content='Delete' color='red' />
                                <Label basic content={activity.category}/>
                            </Item.Extra>
                        </Item.Content>
                    </Item>
                
                ))}
            </Item.Group>
        </Segment>
        )
    return a;
}