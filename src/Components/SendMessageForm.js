import {Form} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import {FormControl} from 'react-bootstrap';
import {InputGroup} from 'react-bootstrap';
import { useState } from 'react';

const SendMessageForm = ({ sendMessage }) => {
    const [message, setMessage] = useState('');

    return (
        <Form
            onSubmit={e => {
                e.preventDefault();
                sendMessage(message);
                setMessage('');
            }}>
            <InputGroup>
                <FormControl placeholder="Mesaj..."
                    onChange={e => setMessage(e.target.value)} value={message} />
                    <Button variant="primary" type="submit" disabled={!message}>Yolla</Button>
            </InputGroup>
        </Form>
        );
};

export default SendMessageForm;