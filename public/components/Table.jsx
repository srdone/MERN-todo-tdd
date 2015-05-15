var React = require('react');

export default class Table extends React.Component {

  static generateCaption(captionItem) {
    if (captionItem) {
      return <caption>{captionItem}</caption>
    }
  }

  static generateHead(numberOfColumns) {
    //TODO: take in header values and generate header cells
    var cells = [];
    for (var i = 0; i < numberOfColumns; i++) {
      cells.push(<th key={i}></th>);
    };

    return <thead><tr>{cells}</tr></thead>
  }

  static generateBody(numberOfColumns) {
    //TODO: implement generateBody
    //TODO: take in body values and generate cells
  }

  render() {

    var caption = Table.generateCaption(this.props.caption);

    var head = Table.generateHead(this.props.columns);

    var body = Table.generateBody(this.props.columns); //TODO: pass in children for body

    return <table>
      {caption}
      {head}
      <tbody></tbody>
    </table>
  }

}
