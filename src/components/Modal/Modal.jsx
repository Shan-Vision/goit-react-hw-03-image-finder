import { Component } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { ModalBackdrop, ModalWindow } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
  static propTypes = {
      children: PropTypes.node.isRequired,
      onClose: PropTypes.func.isRequired,
  };

  componentDidMount() {
    window.addEventListener('keydown', this.onEscapeClick);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.onEscapeClick);
  }
  onBackdropClick = event => {
    if (event.target === event.currentTarget) {
      this.props.onClose();
    }
  };
  onEscapeClick = event => {
    if (event.code === 'Escape') {
      this.props.onClose();
    }
  };

  render() {
    return createPortal(
      <ModalBackdrop onClick={this.onBackdropClick}>
        <ModalWindow>{this.props.children}</ModalWindow>
      </ModalBackdrop>,
      modalRoot
    );
  }
}
export default Modal;
