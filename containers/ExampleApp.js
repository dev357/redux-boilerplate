import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Header from '../components/Header';
import MainSection from '../components/MainSection';
import * as ExampleActions from '../actions/ExampleActions';

class ExampleApp extends Component {
  render() {
    const {examples, actions} = this.props;
    
    return (
      <div>
        <Header addExample={actions.addExample} />
        <MainSection examples={examples} actions={actions} />
      </div>
    );
  }
}

function mapState(state) {
  return {
    examples: state.examples
  };
}

function mapDispatch(dispatch) {
  return {
    actions: bindActionCreators(ExampleActions, dispatch)
  };
}

export default connect(mapState, mapDispatch)(ExampleApp);
