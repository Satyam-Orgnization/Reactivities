import React from 'react'
import { Container, List, ListItem } from 'semantic-ui-react'
import { Activity } from '../../../app/models/Activity'

interface Props
{
    activities: Activity[];
}

export default function ActivitiesDashbord({ activities }: Props)
{
    return (
        <Container>
            <List>
                {activities.map(activity => (
                    <ListItem key={activity.id}>
                        {activity.title}</ListItem>
                ))}
            </List>
        </Container>
    )

}