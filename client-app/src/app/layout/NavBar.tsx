import { Menu, Container, Button } from 'semantic-ui-react'
import { useStore } from '../stores/store'


export default function NavBar() {

    const { activityStore } = useStore();
    const { openForm } = activityStore;

    return (
        <Menu inverted fixed='top'>
            <Container>
                <Menu.Item header>
                    <img src='/assets/logo.png' alt='logo' />
                </Menu.Item>
                <Menu.Item name='Reactivities' />
                <Menu.Item>
                    <Button onClick={()=> openForm()} positive>Create Activity</Button>
                </Menu.Item>
            </Container>
        </Menu>
    )
}