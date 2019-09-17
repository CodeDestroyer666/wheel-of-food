import React from 'react';

import { connect } from 'react-redux';

import { withRouter } from 'react-router-dom'

import { addNumber, fetchExampleData } from '../redux/actions';

class Counter extends React.Component {



    onAddClick = () => {
        this.props.addNumber(7);
    }

    onFetchExampleData = () => {
        this.props.fetchExampleData();
    }

    render() {
        return (
            <div className="counter">
                <div>
                    {this.props.count}
                </div>
                <div>
                    {this.props.exampleData}
                </div>
                <button onClick={this.onAddClick}>
                    Add 7!
                </button>
                <button onClick={this.onFetchExampleData}>
                    Fetch example data
                </button>
            </div>
        );
    }
}

const mapStateToProps = function (state) {
    return {
        count: state.count,
        exampleData: state.exampleData,
    };
};

export default withRouter(connect(mapStateToProps, { addNumber, fetchExampleData })(Counter));