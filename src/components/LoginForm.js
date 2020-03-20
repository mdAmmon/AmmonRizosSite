import React from 'react';

import Modal from "react-bootstrap/Modal";
import ModalBody from "react-bootstrap/ModalBody";
import ModalHeader from "react-bootstrap/ModalHeader";
// import ModalFooter from "react-bootstrap/ModalFooter";
import ModalTitle from "react-bootstrap/ModalTitle";
// import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

class LoginForm extends React.Component {
    state = {
        usr: '',
        pwd: ''
    }
    login = () => {
        if (this.state.usr === '') {
            document.getElementById("usr").style.borderColor = "red";
        }

        if (this.state.pwd === '') {
            document.getElementById("pwd").style.borderColor = "red";
        }

        if (this.state.usr === '' || this.state.pwd === '') {
            return;
        }

        let body = new FormData();

        body.append('usr', this.state.usr);
        body.append('pwd', this.state.pwd);


        fetch('http://192.168.1.112/includes/loginP.php', {
            method: 'POST',
            body: body
        })
            .then(res =>res.json())
            .then(res => {
                if (!res.length) {
                    alert("Error logging in");
                    document.getElementById("pwd").style.borderColor = "red";
                    document.getElementById("usr").style.borderColor = "red";
                    document.getElementById("pwd").value = "";
                    document.getElementById("usr").value = "";
                    this.setState({
                        usr: '',
                        pwd: '',
                    });
                    return;
                } else{
                    this.props.login(res);
                    this.props.hide();
                }
            }
            )
            .catch(err => alert(err));

    }

    updateInput = (e) => {
        this.setState({ [e.target.name]: e.target.value });
        if (e.target.value) {
            e.target.style.borderColor = 'gray';
        } else {
            e.target.style.borderColor = 'red';
        }
    }

    render() {
        return (
            <Modal
                dialogClassName='custom-dialog'
                show={this.props.show}
                onHide={this.props.hide}
                id="loginModal"
                centered
            >

                <ModalHeader closeButton>
                    <ModalTitle>Admin Login</ModalTitle>
                </ModalHeader>

                <ModalBody>
                    <Form>
                        <Form.Group>
                            <label className="col-12" htmlFor="usr"><i className="fa fa-user fa-form"></i>Username</label>
                            <input type="text" className="form-control" id="usr" name="usr" onChange={this.updateInput}
                                placeholder="Enter Username..." />
                        </Form.Group>

                        <Form.Group>
                            <label className="col-12" htmlFor="pwd"><i className="fa fa-lock fa-form"></i>Password</label>
                            <input type="password" className="form-control" id="pwd" name="pwd"
                                placeholder="Enter Password..." onChange={this.updateInput} />
                        </Form.Group>

                        <Form.Group>
                            <input type="button" className="btn btn-primary btn-block btn-lg" id="submitLogin"
                                name="submit" value="Login" onClick={this.login} />
                        </Form.Group>

                    </Form>

                </ModalBody>
            </Modal>
        );
    }


}

export default LoginForm;