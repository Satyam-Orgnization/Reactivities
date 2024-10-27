import { Menu, Container, Button } from 'semantic-ui-react'

export default function NavBar() {
    return (
        <Menu inverted fixed='top'>
            <Container>
                <Menu.Item header>
                    <img src='/assets/logo.png' alt='logo' />
                </Menu.Item>
                <Menu.Item name='Reactivities' />
                <Menu.Item>
                    <Button positive>Create Activity</Button>
                </Menu.Item>
            </Container>
        </Menu>
    )
}