var React = require('react');

export default class TableHeader extends React.Component {

  render() {

    if (this.props.children) {
      var headerCells = this.props.children.map((child, i) => {
        return <th key={i}>{child}</th>
      });
    }

    return <thead>
        <tr>{headerCells}</tr>
      </thead>
  }

}
