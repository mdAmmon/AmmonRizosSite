import React from 'react';

import Modal from "react-bootstrap/Modal";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalBody from "react-bootstrap/ModalBody";
import ModalFooter from "react-bootstrap/ModalFooter";
import ModalTitle from "react-bootstrap/ModalTitle";

class AddEventModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            actorOfEvent: "",
            principal: "AmmonRizos",
            eventType: "vacation",
            description: "",
            moreThanOneDay: false,
            startDate: "",
            endDate: "NULL",
            validForm: false,

        }
    }

    addEventRequest = (e) => {
        let obj = {}

        obj.nombre = this.state.actorOfEvent;
        obj.principal = this.state.principal;
        obj.tipo = this.state.eventType;
        obj.descripcion = this.state.description;
        obj.fechaInicio = this.state.startDate;
        obj.fechaFin = this.state.endDate;

        this.props.addEvent(JSON.stringify(obj));

        this.setState({
            actorOfEvent: "",
            principal: "AmmonRizos",
            eventType: "vacation",
            description: "",
            moreThanOneDay: false,
            startDate: "",
            endDate: "NULL",
            validForm: false,
        }, this.props.hide());
        
    }


    componentDidMount() {
    }

    componentDidUpdate(oldProps) {
        if (this.props.show === true && oldProps !== this.props) {
            const date = this.props.date.split("/").reverse().join("-");
            this.setState({ startDate: date });
        }
    }

    recordChange = (e) => {
        let obj = {};
        obj[e.target.id] = e.target.value;
        this.setState(obj);
    }

    recordEndDateChange = (e) => {
        let value = "";
        if (e.target.value <= this.state.startDate) {
            e.target.classList.add("redBorder");
            e.target.value = "";
            value = "NULL";

        } else {
            e.target.classList.remove("redBorder");
            value = e.target.value;
        }

        this.setState({ endDate: value });
    }

    validateForm = (e) => {
        if (e.target.value === "") {
            e.target.classList.add("redBorder");
            this.setState({ validForm: false, actorOfEvent: "" });
        } else {
            e.target.classList.remove("redBorder");
            this.setState({ validForm: true, actorOfEvent: e.target.value });
        }
    }

    activateEndDate = (e) => {
        this.setState({ moreThanOneDay: !this.state.moreThanOneDay, endDate: "NULL" });
    }

    render() {
        // console.log(this.props.events);
        return (
            <Modal
                dialogClassName='custom-dialog'
                show={this.props.show}
                onHide={this.props.hide}
                id="addEvent"
                centered>

                <ModalHeader closeButton>
                    <ModalTitle>Add Event</ModalTitle>
                </ModalHeader>


                <ModalBody>
                    <div className="row form-group">
                        <div className="col-6">
                            <input type="text" name="nombreR" onKeyUp={this.validateForm} id="name" className="form-control"
                                placeholder="Nombre Completo" aria-describedby="helpId" required />
                        </div>
                        <div className="col-6">
                            <select id="principal" onChange={this.recordChange} className="custom-select" defaultValue="AmmonRizos">
                                <option value="AmmonRizos">Ammon & Rizos</option>
                                <option value="Astrodyne">Astrodyne</option>
                                <option value="AVX">AVX</option>
                                <option value="Comair">Comair Rotron</option>
                                <option value="Kyocera">Kyocera</option>
                                <option value="Omron">Omron</option>
                                <option value="ON">ON Semiconductor</option>
                                <option value="SunLED">SunLED</option>
                                <option value="Sharp">Sharp</option>
                                <option value="UCC">United Chemi-Con</option>
                                <option value="VAC">VAC</option>
                                <option value="Vexos">Vexos</option>
                                <option value="Zero">Zero</option>
                            </select>
                        </div>

                    </div>

                    <div className="form-group">
                        <label htmlFor="eventType">Event Type</label>
                        <select id="eventType" onChange={this.recordChange} className="custom-select" defaultValue="vacation">
                            <option value="vacation">Vacation</option>
                            <option value="medical">Medical</option>
                            <option value="home_office">Home Office</option>
                            <option value="visit">Visit to A&R</option>
                            <option value="business_trip">Business Trip</option>
                            <option value="meeting">Meeting</option>

                        </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor="description">Description</label>
                        <textarea className="form-control" id="description" onChange={this.recordChange} rows="3"></textarea>
                    </div>

                    <div className="form-group" id="singleDay">
                        <div id="checkDia" className="checkbox form-group" >
                            <label htmlFor="multipleDay">Más de un día <input id="multipleDay" onChange={this.activateEndDate} type="checkbox" value="" /></label>
                        </div>
                    </div>

                    <div>

                        <div className="row">
                            <div className="col-6">
                                <label htmlFor="fechaInit">Fecha Inicio</label>

                            </div>

                            <div className="col-6">
                                {(this.state.moreThanOneDay) ? <label htmlFor="fechaFin">Fecha Fin</label> : ""}
                            </div>
                        </div>

                        <div className="row" id="fechaInp">
                            <div className="col-6">
                                <input type="date" value={this.state.startDate} className="form-control" name="inicio" id="startDate" onChange={this.recordChange} required />
                            </div>

                            <div className="col-6">
                                {(this.state.moreThanOneDay) ? <input type="date" className="form-control" name="fin" id="endDate" onChange={this.recordEndDateChange} /> : ""}


                            </div>
                        </div>

                    </div>


                </ModalBody>

                <ModalFooter>
                    <button type="submit" className="btn btn-success mt-3" id="registroBtn" disabled={!this.state.validForm} onClick={this.addEventRequest}>Guardar</button>

                </ModalFooter>
            </Modal>
        );
    }
}

export default AddEventModal;