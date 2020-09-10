import React, { Component } from 'react';
import { CSVReader } from 'react-papaparse';
import ExistingCrossesList from '../components/CrossesVerify/ExistingCrossesList';

export default class CrossFinder extends Component {
    constructor() {
        super();
        
        this.state = {
            crosses: []
        }
    }

    handleOnDrop = (data) => {
        this.setState({crosses: data});
        console.log(data);
    }

    handleOnError = (err, file, inputElem, reason) => {
        console.log(err)
    }

    handleOnRemoveFile = (data) => {
        console.log('---------------------------')
        console.log(data)
        console.log('---------------------------')
    }

    render() {
        return (
            <div>
                <div style={{ width: "60%", height: "150px", margin: "5% auto" }}>
                    <CSVReader
                        onDrop={this.handleOnDrop}
                        onError={this.handleOnError}
                        addRemoveButton
                        removeButtonColor='#002060'
                        onRemoveFile={this.handleOnRemoveFile}
                        style={{
                            dropArea: {
                                borderColor: '#4c628f',
                                backgroundColor: "#fff",
                                borderRadius: 20,
                            },
                            dropFile: {
                                width: "auto",
                                height: 120,
                                background: '#4c628f',
                            },
                            fileNameInfo: {
                                color: '#fff',
                                background: '#4c628f',
                                fontSize: 16,
                                padding: '0.3em 0.8em',
                            },
                            progressBar: {
                                backgroundColor: '#002060',
                            },
                        }}
                    >
                        <span>Drop CSV to get existing crosses.</span>
                    </CSVReader>
                </div>

                <ExistingCrossesList isLoading={false} />

                {
                    this.state.crosses? this.state.crosses.map((el, i)=><li key={i}>{el.data[0]}</li>): null
                }
            </div>

        )
    }
}
