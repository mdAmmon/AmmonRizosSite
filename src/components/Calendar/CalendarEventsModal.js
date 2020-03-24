import React from 'react';

import Modal from "react-bootstrap/Modal";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalBody from "react-bootstrap/ModalBody";
import ModalFooter from "react-bootstrap/ModalFooter";
import ModalTitle from "react-bootstrap/ModalTitle";
import "../../styles/CalendarEventsModal.css"

class CalendarEventsModal extends React.Component {
    render() {
        return (
            <Modal
                dialogClassName='custom-dialog'
                show={this.props.show}
                onHide={this.props.hide}
                id="eventList"
                centered>

                <ModalHeader closeButton>
                    <ModalTitle>Eventos del dia {this.props.date}</ModalTitle>
                </ModalHeader>


                <ModalBody>
                    <div id="eventsContent">


                    </div>

                </ModalBody>

                <ModalFooter>
                    <button type="button" className="btn btn-secondary" id="closeEvents"
                        onClick={this.props.hide}>Close</button>

                    {(this.props.isLogged) ? <button type="submit" className="btn btn-primary" id="addEventButton">Add Event</button> : <></>}
                </ModalFooter>
            </Modal>
        );
    }
}

export default CalendarEventsModal;