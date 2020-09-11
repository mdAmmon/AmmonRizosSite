import React from 'react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectIsLoggedIn } from '../../redux/User/user.selectors';

import Modal from "react-bootstrap/Modal";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalBody from "react-bootstrap/ModalBody";
import ModalFooter from "react-bootstrap/ModalFooter";
import ModalTitle from "react-bootstrap/ModalTitle";
import ModalEventDetail from './ModalEventDetail';
import "../../styles/CalendarEventsModal.css"

const CalendarEventsModal = ({show, hide, date, events, isLogged, deleteEvent, showModalAddEvent } ) =>(
            <Modal
                dialogClassName='custom-dialog'
                show={show}
                onHide={hide}
                id="eventList"
                centered>

                <ModalHeader closeButton>
                    <ModalTitle>Eventos del dia {date}</ModalTitle>
                </ModalHeader>


                <ModalBody>
                    <div id="eventsContent">
                        {events.map( (element, id) => <ModalEventDetail isLogged={isLogged} deleteEvent={deleteEvent} key={element.id} element={element}/>)}
                    </div>

                </ModalBody>

                <ModalFooter>
                    <button type="button" className="btn btn-secondary" id="closeEvents"
                        onClick={hide}>Close</button>

                    {(isLogged) ? <button type="submit" className="btn btn-primary" onClick={showModalAddEvent} id="addEventButton">Add Event</button> : null}
                </ModalFooter>
            </Modal>
        );


const mapStateToProps = createStructuredSelector({
    isLogged: selectIsLoggedIn,
})

const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(CalendarEventsModal);