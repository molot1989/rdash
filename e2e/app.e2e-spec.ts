import { RdashPage } from './app.po';

describe('rdash App', function() {
  let page: RdashPage;

  beforeEach(() => {
    page = new RdashPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
