var React = require('react/addons');
var TestUtils = React.addons.TestUtils;

var Table = require('../public/components/Table');

describe('Table', () => {

  it('should render', () => {
    TestUtils.renderIntoDocument(<Table />);
  });

  it('should render the header prop values as table headers', () => {

  });

  it('should render a caption, if specified as a caption prop', () => {

  });

  it('should render the specified number of columns', () => {

  });

  it('should render the children into the cells', () => {

  });

  it('should render enough rows to use all the children as table cells', () => {

  });

  it('should render the specified number of rows, if specified', () => {

  });

  it('should log a warning if there are more children than can fit', () => {

  });

  it('should log a warning if there not enough children to fill all the rows', () => {

  });

  it('should allow for sorting', () => {

  });

});
