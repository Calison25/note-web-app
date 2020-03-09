import React, {Component} from 'react';

class Dashboard extends Component {
    render(){
        return (
            <div>
                <nav className="nav nav-wrapper navbar-fixed-top">
                    <div className='container-fluid'>
                        <ul className="left hide-on-med-and-down">
                            <li><a className='a-nav-bar' href='#'><i className='material-icons left'>menu</i></a></li>
                            <li className='a-nav-bar'><h5>Google Keep</h5></li>
                        </ul>

                        <ul className="right hide-on-med-and-down">
                            <li><a className='a-nav-bar' href='#'><i className='material-icons left'>search</i></a></li>
                            <li><a className='a-nav-bar' href='#'><i className='material-icons left'>refresh</i></a></li>
                            <li><a className='a-nav-bar' href='#'><i className='material-icons left'>settings</i></a></li>
                        </ul>
                    </div>
                </nav>

                <div className="row create-card">
                    <div className="col s12 m6">
                        <div className="card white">
                            <div className="card-content black-text">
                                <input
                                    className='card-title no-input-border no-input-focus'
                                    placeholder='Título'
                                />
                                <textarea
                                    className='materialize-textarea no-textarea-border no-textarea-focus'
                                    placeholder='Criar uma nota...'
                                />
                            </div>
                        </div>
                    </div>
                </div>

            </div>


        );
    }
}

export default Dashboard;