var React = require('react/addons');
var TestUtils = React.addons.TestUtils;

var TableHeader = require('../TableHeader');

describe('TableHeader', function () {

  it('should render', () => {
    var element = TestUtils.renderIntoDocument(<TableHeader />);

    expect(element).toBeTruthy();
  });

  it('should render <thead><tr></tr></thead> by default', () => {
    var expectedHTML = React.renderToStaticMarkup(<thead><tr></tr></thead>);
    var generatedHTML = React.renderToStaticMarkup(<TableHeader />);

    expect(generatedHTML).toBe(expectedHTML);
  });

  it('should render the children as header cells', () => {
    var children = ['Cool', 'Fun', 'Stuff'];
    var childDivs = children.map((child) => <div>{child}</div>);
    var expectedHTML = React.renderToStaticMarkup(<thead>
      <tr>
        <th><div>Cool</div></th>
        <th><div>Fun</div></th>
        <th><div>Stuff</div></th>
      </tr></thead>);
    var generatedHTML = React.renderToStaticMarkup(<TableHeader>{childDivs}</TableHeader>);

    expect(generatedHTML).toBe(expectedHTML);
  });

});
