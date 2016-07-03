import React, {Component} from 'react';
import shouldComponentUpdate from 'src/utils/PureRender';
import Grid, {Cell} from 'react-mdl/lib/Grid';

export default class About extends Component {

  shouldComponentUpdate = shouldComponentUpdate;

  render() {
    return (
      <Grid>
        <Cell className="content" col={10} tablet={12} offsetDesktop={1} shadow={4}>
          <h4>Powered by:</h4>
          <div>React, Redux, MDL</div>
        </Cell>
      </Grid>
    );
  }
}
