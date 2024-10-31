import { Menu, Container, Button } from 'semantic-ui-react'

interface Props {
    openForm: () => void;

}
export default function NavBar({ openForm }: Props) {
    return (
        <Menu inverted fixed='top'>
            <Container>
                <Menu.Item header>
                    <img src='/assets/logo.png' alt='logo' />
                </Menu.Item>
                <Menu.Item name='Reactivities' />
                <Menu.Item>
                    <Button onClick={openForm} positive>Create Activity</Button>
                </Menu.Item>
            </Container>
        </Menu>
    )
}