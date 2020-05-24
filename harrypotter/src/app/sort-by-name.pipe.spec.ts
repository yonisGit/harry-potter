import { SortOrFilterPipe } from './sort-by-name.pipe';

describe('SortByNamePipe', () => {
  it('create an instance', () => {
    const pipe = new SortOrFilterPipe();
    expect(pipe).toBeTruthy();
  });
});
