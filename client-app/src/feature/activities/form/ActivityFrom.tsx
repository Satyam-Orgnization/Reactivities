import { Button, Form, Segment, } from "semantic-ui-react"
import { Activity } from "../../../app/models/Activity";
import { ChangeEvent, useState } from "react";

interface Props
{
    activity: Activity | undefined;
    closeForm: () => void;
    createOrEdit: (activity: Activity) => void;
    submitting: boolean;
}



export default function ActivityForm({ activity: selectedActivity, closeForm, createOrEdit, submitting }: Props) {

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
        createOrEdit(activity);
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
                <Button loading={submitting} floated='right' positive type='submit' content='Submit' />
                <Button Click={closeForm} floated='right' positive type='button' content='Cancel' />
            </Form>
        </Segment>
    )
    
}

