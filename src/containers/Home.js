import React, {Component} from 'react';
import { connect } from 'react-redux';
import shouldComponentUpdate from 'src/utils/PureRender';
import Grid, {Cell} from 'react-mdl/lib/Grid';
import FABButton from 'react-mdl/lib/FABButton';
import Icon from 'react-mdl/lib/Icon';
import ExampleListItem from '../components/ExampleListItem';

import { addExample } from '../actions/ExampleActions';

export class Home extends Component {
  shouldComponentUpdate = shouldComponentUpdate;

  render() {
    const { examples, dispatch } = this.props;
    return (
      <Grid>
        <Cell className="content" col={10} tablet={12} offsetDesktop={1} shadow={4}>
          <h3>
            <span>Example list  </span>
            <FABButton mini colored ripple
              onClick={() => dispatch(addExample('test'))}
            >
              <Icon name="add" />
            </FABButton>
          </h3>
          <ul>
            {examples.map(example => <ExampleListItem key={example.id} text={example.text} />)}
          </ul>

        </Cell>
      </Grid>
    )
  }
}

function mapStateToProps(state) {
  return { examples: state.examples }
}

export default connect(mapStateToProps)(Home);
