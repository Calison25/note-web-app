import React, { Fragment} from 'react';
import { Modal} from 'react-bootstrap';

const ModalNote = () => {
    return (
        <Fragment>
            <Modal show={true} size="lg" onHide={false} centered>
                <Modal.Header className='no-modal-header-border'>
                    <Modal.Title >
                        <input
                        className='card-title no-input-border no-input-focus'
                        placeholder='Título'
                        />
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <textarea
                    className='materialize-textarea no-textarea-border no-textarea-focus'
                    placeholder='Criar uma nota...'
                    />
                </Modal.Body>
                <Modal.Footer className='custom-modal-footer'>
                        <div className='container-fluid'>
                            <div className="left">
                                <a href="#" className="icons-space icons-modal"><i className="material-icons modal-icons">add_alert</i></a>
                                <a href="#" className="icons-space icons-modal"><i className="material-icons modal-icons">person_add</i></a>
                                <a href="#" className="icons-space icons-modal"><i className="material-icons modal-icons">palette</i></a>
                                <a href="#" className="icons-space icons-modal"><i className="material-icons modal-icons">photo</i></a>
                                <a href="#" className="icons-space icons-modal"><i className="material-icons modal-icons">archive</i></a>
                                <a href="#" className="icons-space icons-modal"><i className="material-icons modal-icons">more_vert</i></a>
                            </div>

                            <div className="right hide-on-med-and-down">
                                <a className="modal-button background-modal-button" href="#">
                                    Fechar
                                </a>
                            </div>
                        </div>
                </Modal.Footer>
            </Modal>
        </Fragment>
    );
};

export default ModalNote;