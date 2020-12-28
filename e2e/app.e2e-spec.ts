import { ProyectoAngularPage } from './app.po';

describe('proyecto-angular App', function() {
  let page: ProyectoAngularPage;

  beforeEach(() => {
    page = new ProyectoAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
