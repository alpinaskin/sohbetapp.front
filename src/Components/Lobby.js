import { Form, Button } from "react-bootstrap";
import { useState } from 'react';

const Lobby = ({ joinRoom }) => {
    const [user, setUser] = useState();
    const [room, setRoom] = useState();

    return <Form className="lobby"
        onSubmit ={e => {
            e.preventDefault();
            joinRoom(user, room);
        }} >
                <Form.Group>
                    <Form.Control placeholder="İsim" onChange={e => setUser(e.target.value)} />
                    <Form.Control placeholder="Oda" onChange={e => setRoom(e.target.value)}/>
                </Form.Group>
                <Button variant="success" type="submit" disabled={!user || !room}>Katıl</Button>
            </Form>
}

export default Lobby;