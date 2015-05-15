var React = require('react/addons');
var TestUtils = React.addons.TestUtils;

var Table = require('../public/components/Table');

describe('Table', () => {

  var element, elementDOMNode, numberOfColumns, head, body;

  beforeEach(() => {
    spyOn(Table, 'generateHead').and.callThrough();
    spyOn(Table, 'generateBody').and.callThrough();
    numberOfColumns = 3;
    element = TestUtils.renderIntoDocument(<Table columns={numberOfColumns} />);
    elementDOMNode = React.findDOMNode(element);
    head = elementDOMNode.children[0];
    body = elementDOMNode.children[1];
  })

  it('should render', () => {
    expect(element).toBeTruthy();
  });

  it('should render the outer dom node as table', () => {
    expect(elementDOMNode.tagName.toLowerCase()).toBe('table');
  });

  it('should render the first inside dom node as thead', () => {
    expect(elementDOMNode.children[0].tagName.toLowerCase()).toBe('thead');
  });

  it('should render the second inside dom node as tbody', () => {
    expect(elementDOMNode.children[1].tagName.toLowerCase()).toBe('tbody');
  });

  it('should call the Table.generateHead method with the number of columns as a parameter', () => {
    expect(Table.generateHead).toHaveBeenCalledWith(numberOfColumns);
  });

  it('should render the specified number of columns in the head', () => {
    expect(head.children[0].children.length).toBe(numberOfColumns);
  });

  it('should have correct table row/column tags in the head', () => {
    var tableHeaderRow = head.children[0];

    var tableHeaderRowTag = tableHeaderRow.tagName.toLowerCase();
    var tableHeaderCellTags = [].map.call(tableHeaderRow.children, (child) => {
      return child.tagName.toLowerCase();
    });

    expect(tableHeaderRowTag).toBe('tr');
    for (var tag of tableHeaderCellTags) {
      expect(tag).toBe('th');
    }
  });

  it('should call the Table.generateBody method with the number of columns as a parameter', () => {
    expect(Table.generateBody).toHaveBeenCalledWith(numberOfColumns);
  });

  it('should render the specified number of columns in the body', () => {
    expect(body.children[0].children.length).toBe(numberOfColumns);
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

describe('Table with caption', () => {

  var caption, renderedCaption, elementWithCaption, elementWithCaptionDOMNode;

  beforeEach(() => {
    //we have to set the spy before we call the function in beforeEach
    //if we want the function to still call, we have to call .and.callThrough();
    spyOn(Table, 'generateCaption').and.callThrough();
    caption = 'Caption';
    elementWithCaption = TestUtils.renderIntoDocument(<Table caption={caption} />);
    elementWithCaptionDOMNode = React.findDOMNode(elementWithCaption);
  });

  it('should render a caption, if specified as a caption prop', () => {
    expect(elementWithCaptionDOMNode.children[0].tagName.toLowerCase()).toBe('caption');
  });

  it('should render the text contents of the passed caption object as the innerHTML of the caption', () =>{
    expect(elementWithCaptionDOMNode.children[0].innerHTML).toBe(caption);
  });

  it('should call the Table.generateCaption function', () => {
    expect(Table.generateCaption).toHaveBeenCalled();
  });

  it('should call the Table.generateCaption function with the caption that was passed in', () => {
    expect(Table.generateCaption).toHaveBeenCalledWith(caption);
  })

});
