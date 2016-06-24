import { OfflineCompilerPage } from './app.po';

describe('offline-compiler App', function() {
  let page: OfflineCompilerPage;

  beforeEach(() => {
    page = new OfflineCompilerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
