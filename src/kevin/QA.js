import React, { Component } from 'react';
import './QA.css';
import axios from 'axios'

class QA extends Component {

    constructor(props) {
        super(props)

        this.state = {
            qas: []
        };
    }

    componentDidMount() {
        axios.get('http://jsonplaceholder.typicode.com/posts')
        .then(res => {
            const qas = res.data.slice(0, 10);
            this.setState({ qas });
        })
    }

    render() {
        return (
            <div>
                <div className="container">
                    <section className="section">
                        <h1 className="title">QA</h1>
                        <h2 className="subtitle is-4">Commonly asked questions</h2>

                        <div className="columns">
                            {this.state.qas.map(qa =>
                            <div className="column is-one-third">
                                <div className="card">
                                    <div className="card-content">
                                        <p className="titles">{ qa.title }</p>
                                        <p className="answer">{ qa.body }</p>
                                    </div>
                                </div>
                            </div>
                            )}
                        </div>
                    </section>
                </div>
            </div>
        );
    }
}

export default QA;