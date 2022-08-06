import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, FormText} from 'reactstrap';
import { useSelector, useDispatch } from 'react-redux'
import { closeModal } from '../../features/homepage/homepageSlice'

export function NewEventModal ({events, setEvents}) {
    const [form, setForm] = useState({
        eventName: "",
        eventDate: "",
        eventTime: "",
    });

    // These methods will update the state properties.
    function updateForm(value) {
        return setForm((prev) => {
        return { ...prev, ...value };
        });
    }
    
    const dispatch = useDispatch()
    const homepageState = useSelector((state) => state.homepage.value)

    async function onSubmit(e) {
        e.preventDefault();
      
        // When a post request is sent to the create url, we'll add a new record to the database.
        const newEvent = { ...form };
      
        await fetch("http://localhost:5000/event/add", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newEvent),
        })
        .catch(error => {
          window.alert(error);
          return;
        });
      
        setForm({ eventName: "", eventDate: "", eventTime: "" });
        dispatch(closeModal("CLOSE_MODAL"));
        debugger
        let newArry = events.map(a=>({...a}));
        newArry.push(newEvent)
        setEvents(newArry);
      }



    return (
    <div>
        <Modal isOpen={homepageState=="open"?true:false}>
        <Form onSubmit={onSubmit}>
        <ModalHeader >Modal title</ModalHeader>
            <ModalBody>
                <FormGroup>
                    <Label for="eventName">Event</Label>
                    <Input type="textarea" name="eventText" id="eventName" placeholder="E.G. Pickleball Nerds" 
                        value={form.eventName}
                        onChange={(e) => updateForm({ eventName: e.target.value })}/>
                    <Label for="eventDate">Date</Label>
                    <Input type="date" name="date" id="eventDate" 
                        value={form.eventDate}
                        onChange={(e) => updateForm({ eventDate: e.target.value })}/>
                    <Label for="eventTime">Time</Label>
                    <Input type="time" name="time" id="eventTime" 
                        value={form.eventTime}
                        onChange={(e) => updateForm({ eventTime: e.target.value })}/>
                </FormGroup>
            </ModalBody>
            <ModalFooter>
                <Button color="primary" 
                    type="submit">Add Event</Button>{' '}
                <Button color="secondary" 
                    onClick={() => dispatch(closeModal("CLOSE_MODAL"))}
                >Cancel</Button>
            </ModalFooter>
        </Form>
        </Modal>
    </div>
    );
}

export default NewEventModal;