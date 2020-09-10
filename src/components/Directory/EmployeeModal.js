import React from 'react';
import { connect } from 'react-redux';

import { selectActiveEmployeeInfo } from '../../redux/Directory/directory.selectors';

import Modal from "react-bootstrap/Modal";
import ModalBody from "react-bootstrap/ModalBody";
import "../../styles/employeeModal.css"

class EmployeeModal extends React.Component {
    render() {
        const { name, position, email, phone, mobile, extension, manager, priority, url } = this.props.activeEmployeeInfo;
        const img = require(`../../img/${url}`);

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
                    <div className={"employeeImage priority" + priority}
                        style={{ backgroundImage: `url(${img})` }}
                        id="modalEmpImage" />

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

const mapStateToProps = state => ({
    activeEmployeeInfo: selectActiveEmployeeInfo(state)
})

const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeModal);