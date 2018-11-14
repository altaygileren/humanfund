import React, { Component } from 'react';
import Modal from 'react-responsive-modal';

class Moda extends Component {
    state = {
        open: true,
    };

    onCloseModal = () => {
        this.setState({ open: false });
    };

    render() {
        const { open } = this.state;
        return (
            <div>
                <Modal open={open} onClose={this.onCloseModal} center>
                    <h3>
                        Thank you for signing up for our fund, in the meantime
                        you should sign up for our newsletter so you can stay
                        up to date with all of our latest news by scrolling down
                        to the bottom of the page!
                    </h3>
                </Modal>
            </div>
        );
    }
}

export default Moda;