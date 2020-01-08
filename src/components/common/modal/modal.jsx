import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { CloseIcon } from '../../../icons/icons';

import styles from './modal.module.scss';

class Modal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalClass: 'overlay'
        };
        this.hendleOverlayClick = this.hendleOverlayClick.bind(this);
        this.hadnleEscKey = this.hadnleEscKey.bind(this);
        this.handleClose = this.handleClose.bind(this);

    }

    componentDidMount() {
        window.setTimeout(() => {
            this.setState({
                modalClass: 'overlayActive'
            });
        }, 10);
        window.addEventListener('keydown', this.hadnleEscKey, false);
    }

    hadnleEscKey(evt) {
        if (evt.key === 'Escape') {
            this.handleClose();
        }
    }

    hendleOverlayClick(e) {
        e.stopPropagation();
        if (e.target === e.currentTarget) {
            this.handleClose();
        }
    }

    handleClose() {

        this.setState({
            modalClass: 'overlay'
        });
        window.setTimeout(() => {
            this.props.close();
        }, 300);
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.hadnleEscKey, false);
    }

    render() {

        return (
            <div className={styles[this.state.modalClass]} onClick={this.hendleOverlayClick}>
                <div className={styles.modal}> 
                    <span className={styles.closeBtn} onClick={this.handleClose}>
                        <CloseIcon />
                    </span>
                    <div className={styles.body}>
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}

Modal.propTypes = {
    close: PropTypes.func.isRequired
};

export default Modal;