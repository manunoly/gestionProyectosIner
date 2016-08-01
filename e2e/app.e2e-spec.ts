import { GestionPPage } from './app.po';

describe('gestion-p App', function() {
  let page: GestionPPage;

  beforeEach(() => {
    page = new GestionPPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
