import { AgDemoPage } from './app.po';

describe('ag-demo App', () => {
  let page: AgDemoPage;

  beforeEach(() => {
    page = new AgDemoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
