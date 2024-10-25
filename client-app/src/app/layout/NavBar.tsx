import { Menu, Container, Button } from 'semantic-ui-react'

const ButtonExamplePositive = () => (
    <div>
        <Button positive>Create Activity</Button>
    </div>
)

export default function NavBar() {
    return (
        <Menu inverted stackable className="custom-nav">
            <Container>
                <Menu.Item header>
                    <img src='/assets/logo.png' alt='logo' />
                </Menu.Item>
                <Menu.Item name='Reactivities' />
                <Menu.Item>
                    <ButtonExamplePositive />
                </Menu.Item>
            </Container>
        </Menu>
    )
}