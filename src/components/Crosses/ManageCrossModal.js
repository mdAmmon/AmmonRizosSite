import React from 'react';

import Modal from "react-bootstrap/Modal";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalBody from "react-bootstrap/ModalBody";
import ModalTitle from "react-bootstrap/ModalTitle";
// import "../styles/employeeModal.css"


class ManageCrossModal extends React.Component {
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
        let mfgs;

        // https://arizoslocal.herokuapp.com/includes/getPrincipals.php
        fetch("https://arback-node.herokuapp.com/principals")
            .then(res => res.json())
            .then(res => {
                mfgs = res;
                this.setState({ manufacturers: mfgs, selectedPrincipal: mfgs[0].brand_id });
            });

        this.fetchCompetitors();

    }

    fetchCompetitors = () => {
        let comps;

        // https://arizoslocal.herokuapp.com/includes/getCompetitors.php
        fetch("https://arback-node.herokuapp.com/competitors")
            .then(res => res.json())
            .then(res => {
                comps = res;
                this.setState({ competitors: comps, selectedCompetitor: comps[0].competitor_id });
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

    deleteCross = (id) =>{
        fetch(`https://arback-node.herokuapp.com/crosses/${id}`, {
            method: "DELETE" //,
            // body: body
        })
            .then(res => res.json())
            .then(response => {
                if (response) {
                    alert("Cross Deleted Successfully");
                    this.props.hide();
                    this.props.updateTable();
                }
            })
            .catch(error => alert(error));
    }
    

    render() {
        const {CROSS_ID, BRAND, COMPETITOR, COMPETITOR_PART, GENERIC, comments, direct} = this.props.cross;

        let brand = this.state.manufacturers.find(element => element.brand_name===BRAND);
        let competitor = this.state.competitors.find(element => element.competitor_name===COMPETITOR)


        return (
            <Modal
                dialogClassName='custom-dialog'
                show={this.props.show}
                onHide={this.props.hide}
                id="manageCrossModal"
                centered>

                <ModalHeader closeButton>
                    <ModalTitle>Manage Cross No. {CROSS_ID}  </ModalTitle>
                </ModalHeader>

                <ModalBody style={{ transition: 'all 0.5s ease-out' }}>
                    <div className="form-group">

                        <div className='row form-group'>

                            <div className='col-12'>
                                <label htmlFor="compSelect">Competitor:</label>
                                <select name="competitor" className="custom-select col-12" 
                                    disabled defaultValue={(competitor)?competitor.competitor_id: "9"}
                                    id="selectedCompetitor" onChange={this.recordChange} >
                                    {this.state.competitors.map(
                                        element => <option key={element.competitor_id} 
                                        value={element.competitor_id}>{element.competitor_name}</option>
                                    )}
                                </select>
                            </div>
                        </div>
                    </div>


                    <div className="row form-group">
                        <div className="col-12">
                            <input type="text" name="nombreR" id="competitorPart" className="form-control"
                                onChange={this.recordChange} onBlur={this.validateForm}
                                placeholder="Competitor's Part Number..." value={COMPETITOR_PART} aria-describedby="competitorPartNumber" />
                        </div>

                    </div>

                    <div className="form-group">
                        <label htmlFor="compSelect">A&R Manufacturer:</label>
                        <select
                            disabled defaultValue={(brand)?brand.brand_id:"8"} onChange={this.recordChange}
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
                                onChange={this.recordChange} value={GENERIC} onBlur={this.validateForm} />
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="directCross">Direct:</label>
                        <select name="direct" className="custom-select" defaultValue={direct} onChange={this.recordChange} id="direct">
                            <option value="YES">Yes</option>
                            <option value="NO">No</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor="comments">Comments</label>
                        <textarea className="form-control" onChange={this.recordChange} value={comments} id="comments" rows="2"></textarea>
                    </div>

                    {(this.state.competitorPart !== "" && this.state.principalPart !== "") ? <button className="btn btn-success col-3"
                        id="UpdateCrossBtn" onClick={()=>{alert("Working on this feature")}}>Update</button> : <button disabled className="btn btn-success col-3"
                            id="UpdateCrossBtn">Update</button>}
                    <button style={{float: "right"}} className="btn btn-danger col-3" onClick={()=>{if(window.confirm("Do you really want to delete this cross?"))this.deleteCross(CROSS_ID)}}
                        id="deleteCrossBtn">Delete</button>
                </ModalBody>
            </Modal >
        );
    }


}

export default ManageCrossModal;