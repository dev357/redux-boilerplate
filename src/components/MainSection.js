import React, {Component, PropTypes} from 'react';
import ExampleItem from './ExampleItem';

export default class MainSection extends Component {
  static propTypes = {
    examples: PropTypes.array.isRequired
  }

  render() {
    const { examples } = this.props;

    return (
      <section className="main">
        <ul className="example-list">
          {examples.map(example =>
            <ExampleItem key={example.id} example={example} />
          )}
        </ul>
      </section>
    );
  }
}