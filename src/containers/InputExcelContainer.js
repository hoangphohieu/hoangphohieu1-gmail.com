import React, { Component } from 'react';
import { connect } from 'react-redux';
import InputExcel from '../components/InputExcel';
import * as actions from '../actions';

function mapStateToProps(state) {
    return {
        items:state.items
    };
}
function mapDispatchToProps(dispatch) {
    return {
        getPCFail:(param)=>dispatch(actions.getPCFail(param)),
        // stateStoreHomeToDefault:()=>dispatch(actions.stateStoreHomeToDefault()),
        
        
    };
}

class HomeContainer extends Component {
    render() {
      
        
        return (
            <React.Fragment>
                <InputExcel {...this.props}/>
            </React.Fragment>
        );
    }
}

export default connect(
    mapStateToProps,mapDispatchToProps
)(HomeContainer);