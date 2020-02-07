import { cli } from '../src/';

describe('index cli function', () => {
  it('able to read environment variable', () => {
    const result = cli();
    expect(result).toBe(true);
  });
});
