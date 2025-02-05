import { Button, Item, Label, Segment } from "semantic-ui-react";
import { SyntheticEvent, useState } from "react";
import { useStore } from "../../../app/stores/store";
import { NavLink } from "react-router-dom";

export default function ActivityList()
{
    const [target, setTarget] = useState('');
    const { activityStore } = useStore();
    const { deleteActivity, loading, activityByDate } = activityStore;

    function handleDeleteActivity(e: SyntheticEvent<HTMLButtonElement>, id: string)
    {
        setTarget(e.currentTarget.name);
        deleteActivity(id);
    }

    return (

        <Segment>
            <Item.Group divided>
                {activityByDate.map((activity, index) => (
                    <Item key={index}>
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
                                <Button as={NavLink} to={`/activities/${activity.id}`} floated='right' content='View' color='blue' />
                                <Button name={activity.id} loading={loading && target === activity.id} onClick={(e) => handleDeleteActivity(e, activity.id)} floated='right' content='Delete' color='red' />
                                <Label basic content={activity.category}/>
                            </Item.Extra>
                        </Item.Content>
                    </Item>
                
                ))}
            </Item.Group>
        </Segment>
        )
}