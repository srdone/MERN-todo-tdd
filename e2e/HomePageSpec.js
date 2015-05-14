describe('Todo Home Page', function () {
  it('should have a title', function () {
    browser.get('/');

    expect(browser.getTitle()).toBe('React Todo');
  });
})
