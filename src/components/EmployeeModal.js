import React from 'react';

import Modal from "react-bootstrap/Modal";

import ModalBody from "react-bootstrap/ModalBody";
import "../styles/employeeModal.css"
class EmployeeModal extends React.Component {

    render() {
        const { name, position, email, phone, mobile, extension, manager, priority } = this.props;

        return (
            <Modal
                dialogClassName='custom-dialog'
                show={this.props.show}
                onHide={this.props.hide}
                id="employeeDetailModal"
                centered>

                <ModalBody>
                    <button type="button" id="closeModal" className="close" aria-label="Close" onClick={this.props.hide}>
                        <span aria-hidden="true">&times;</span>
                    </button>
                    <div className={"employeeImage priority"+priority}  id="modalEmpImage"></div>
                    <div className="employeeInfo">
                        <div className="row"><label>Name:</label>
                            <p id="EmpName">{name}</p>
                        </div>
                        <div className="row"><label>Position:</label>
                            <p id="Position">{position}</p>
                        </div>
                        <div className="row"><label>Email:</label>
                            <p id="Email">{email}</p>
                        </div>
                        <div className="row"><label>Phone:</label>
                            <p id="Phone">{phone}</p>
                        </div>
                        <div className="row"><label>Mobile:</label>
                            <p id="Mobile">{mobile}</p>
                        </div>

                        <div className="row"><label>Extension:</label>
                            <p id="Ext">{extension}</p>
                        </div>
                        <div className="row"><label>Manager:</label>
                            <p id="Manager">{manager}</p>
                        </div>

                    </div>
                </ModalBody>
            </Modal>
        );
    }


}

export default EmployeeModal;