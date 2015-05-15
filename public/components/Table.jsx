var React = require('react');

export default class Table extends React.Component {

  static generateCaption(captionItem) {
    if (captionItem) {
      return <caption>{captionItem}</caption>
    }
  }

  static generateHead(numberOfColumns) {
    var cells = [];
    for (var i = 0; i < numberOfColumns; i++) {
      cells.push(<th key={i}></th>);
    };

    return <thead><tr>{cells}</tr></thead>
  }

  render() {

    var caption = Table.generateCaption(this.props.caption);

    var head = Table.generateHead(this.props.columns);

    return <table>
      {caption}
      {head}
      <tbody></tbody>
    </table>
  }

}
