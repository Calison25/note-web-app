import React, {Component} from 'react';
import Header from "../components/Header";
import ModalNote from "../components/ModalNote";

class Dashboard extends Component {
    render(){
        return (
            <div>
                <Header/>
                <ModalNote/>
                {/*<div className="row create-card">*/}
                {/*    <div className="col s12 m6">*/}
                {/*        <div className="card white">*/}
                {/*            <div className="card-content black-text">*/}
                {/*                <input*/}
                {/*                    className='card-title no-input-border no-input-focus'*/}
                {/*                    placeholder='Título'*/}
                {/*                />*/}
                {/*                <textarea*/}
                {/*                    className='materialize-textarea no-textarea-border no-textarea-focus'*/}
                {/*                    placeholder='Criar uma nota...'*/}
                {/*                />*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}

            </div>


        );
    }
}

export default Dashboard;