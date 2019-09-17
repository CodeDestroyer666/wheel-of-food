import React from 'react';

import { connect } from 'react-redux';

import { withRouter } from 'react-router-dom'

import { addNumber } from '../redux/actions';

class Counter extends React.Component {

    onAddClick = () => {
        this.props.addNumber(7);
    }

    render() {
        return (
            <div className="counter">
                <div>
                    {this.props.count}
                </div>
                <button onClick={this.onAddClick}>
                    Add 7!
                </button>
            </div>
        );
    }
}

const mapStateToProps = function (state) {
    return { count: state.count };
};

export default withRouter(connect(mapStateToProps, { addNumber })(Counter));