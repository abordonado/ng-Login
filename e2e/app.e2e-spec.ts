import { NgLoginPage } from './app.po';

describe('ng-login App', () => {
  let page: NgLoginPage;

  beforeEach(() => {
    page = new NgLoginPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
