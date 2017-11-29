import { GodogPage } from './app.po';

describe('godog App', () => {
  let page: GodogPage;

  beforeEach(() => {
    page = new GodogPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
