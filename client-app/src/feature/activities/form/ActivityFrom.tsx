import { Button, Form, Segment, } from "semantic-ui-react"
import { ChangeEvent, useState } from "react";
import { useStore } from "../../../app/stores/store";
import { observer } from "mobx-react-lite";


export default observer(function ActivityForm() {

    const { activityStore } = useStore();
    const { selectedActivity, closeForm, updateActivity, createActivity, loading } = activityStore;


    const initialState = selectedActivity ??
    {
        id: '',
        title: '',
        date: '',
        description: '',
        category: '',
        city: '',
        venue: ''
    };

    const [activity, setActivity] = useState(initialState);

    function handleSubmit() {
        activity.id ? updateActivity(activity) : createActivity(activity);
    }

    function handleinputChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)
    {
        const { name, value } = event.target;
        setActivity({ ...activity, [name]: value });
    }

    return (
        <Segment clearing>
            <Form onSubmit={handleSubmit} autoComplete='off'>
                <Form.Input placeholder='Title' value={activity.title} name='title' onChange={handleinputChange} />
                <Form.TextArea placeholder='Description' value={activity.description} name='description' onChange={handleinputChange} />
                <Form.Input placeholder='Category' value={activity.category} name='category' onChange={handleinputChange} />
                <Form.Input placeholder='Date' value={activity.date} name='date' onChange={handleinputChange} />
                <Form.Input placeholder='City' value={activity.city} name='city' onChange={handleinputChange} />
                <Form.Input placeholder='Venue' value={activity.venue} name='venue' onChange={handleinputChange} />
                <Button loading={loading} floated='right' positive type='submit' content='Submit' />
                <Button onClick={() => closeForm()} floated='right' positive type='button' content='Cancel' />
            </Form>
        </Segment>
    )
    
})

