import React from 'react';

import Modal from "react-bootstrap/Modal";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalBody from "react-bootstrap/ModalBody";
import ModalTitle from "react-bootstrap/ModalTitle";
// import "../styles/employeeModal.css"


class InsertCrossModal extends React.Component {
    state = {
        competitors: [],
        manufacturers: [],
        selectedCompetitor: "",
        competitorPart: "",
        selectedPrincipal: "",
        principalPart: "",
        direct: "YES",
        comments: "",
    }

    componentDidMount() {
        let comps, mfgs;
        fetch("http://127.0.0.1/includes/getCompetitors.php")
            .then(res => res.json())
            .then(res => {
                comps = res;
                this.setState({ competitors: comps, selectedCompetitor: comps[0].competitor_id });
            });

        fetch("http://127.0.0.1/includes/getPrincipals.php")
            .then(res => res.json())
            .then(res => {
                mfgs = res;
                this.setState({ manufacturers: mfgs, selectedPrincipal: mfgs[0].brand_id });
            });

    }

    recordChange = (e) => {
        let obj = {};
        obj[e.target.id] = e.target.value;
        this.setState(obj);

        if (e.target.id === "competitorPart" || e.target.id === "principalPart") {
            this.validateForm(e);
        }
    }

    validateForm = (e) => {
        if (e.target.value === "") {
            e.target.classList.add("redBorder");
        } else {
            e.target.classList.remove("redBorder");
        }
    }

    insertCross = (e) => {
        if (this.state.competitorPart === "" || this.state.selectedCompetitor === "" || this.state.direct === "" ||
            this.state.selectedPrincipal === "" || this.state.principalPart === "") {
            alert("Error. Something went Wrong");
            return;
        }


        let body = new FormData();

        body.append('comp_id', this.state.selectedCompetitor);
        body.append('comp_model', this.state.competitorPart);
        body.append('brnd_id', this.state.selectedPrincipal);
        body.append('brnd_model', this.state.principalPart);
        body.append('direct', this.state.direct);
        body.append('comments', this.state.comments);


        let response = fetch("http://127.0.0.1/includes/insertCrossP.php", {
            method: "POST",
            body: body
        })
            .then(res => res.json())
            .catch(error => alert("something went wrong. :("))
            .then(response =>{
                if(response.success){
                    alert(response.success);
                    this.props.updateTable();
                } else if(response.error){
                    alert(response.error);
                }

                this.props.hide();
            });

    }

    render() {

        return (
            <Modal
                dialogClassName='custom-dialog'
                show={this.props.show}
                onHide={this.props.hide}
                id="insertCrossModal"
                centered>

                <ModalHeader closeButton>
                    <ModalTitle>Insert Cross</ModalTitle>
                </ModalHeader>

                <ModalBody>
                    <div className="form-group">
                        <label htmlFor="compSelect">Competitor:</label>

                        <select name="competitor" className="custom-select" id="selectedCompetitor" onChange={this.recordChange}>
                            {this.state.competitors.map(
                                element => <option key={element.competitor_id} value={element.competitor_id}>{element.competitor_name}</option>
                            )}
                        </select>
                    </div>

                    <div className="row form-group">
                        <div className="col-12">
                            <input type="text" name="nombreR" id="competitorPart" className="form-control"
                                onKeyUp={this.recordChange} onBlur={this.validateForm}
                                placeholder="Competitor's Part Number..." aria-describedby="helpId" />
                        </div>

                    </div>

                    <div className="form-group">
                        <label htmlFor="compSelect">A&R Manufacturer:</label>
                        <select
                            onChange={this.recordChange}
                            name="principal" className="custom-select" id="selectedPrincipal">
                            {this.state.manufacturers.map(
                                element => <option key={element.brand_id} value={element.brand_id}>{element.brand_name}</option>
                            )}
                        </select>
                    </div>

                    <div className="row form-group">
                        <div className="col-12">
                            <input type="text" name="nombreR" id="principalPart" className="form-control"
                                placeholder="AR Manufacturer's Part Number..." aria-describedby="helpId"
                                onKeyUp={this.recordChange} onBlur={this.validateForm} />
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="directCross">Direct:</label>
                        <select name="direct" className="custom-select" onChange={this.recordChange} id="direct">
                            <option value="YES">Yes</option>
                            <option value="NO">No</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor="comments">Comments</label>
                        <textarea className="form-control" onKeyUp={this.recordChange} id="comments" rows="2"></textarea>
                    </div>

                    {(this.state.competitorPart !== "" && this.state.principalPart !== "") ? <button className="btn btn-AR col-3"
                        id="sendReg" onClick={this.insertCross}>Send</button> : <button disabled className="btn btn-AR col-3"
                            id="sendReg">Send</button>}

                </ModalBody>
            </Modal>
        );
    }


}

export default InsertCrossModal;