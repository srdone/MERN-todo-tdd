var React = require('react/addons');
var TestUtils = React.addons.TestUtils;

var Table = require('../public/components/Table');

describe('Table', () => {

  it('should render', () => {
    TestUtils.renderIntoDocument(<Table />);
  });

});
