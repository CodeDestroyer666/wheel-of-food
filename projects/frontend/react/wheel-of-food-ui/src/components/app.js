import React from 'react';

import { connect } from 'react-redux';

import { withRouter } from 'react-router-dom'

import Button from '@material-ui/core/Button';

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
                <Button variant="contained" color="primary" onClick={this.onAddClick}>
                    Add 7!
                </Button>
                <Button variant="contained" color="primary" onClick={this.onFetchExampleData}>
                    Fetch example data
                </Button>
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