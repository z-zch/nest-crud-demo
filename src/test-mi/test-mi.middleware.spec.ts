import { TestMiMiddleware } from './test-mi.middleware';

describe('TestMiMiddleware', () => {
  it('should be defined', () => {
    expect(new TestMiMiddleware()).toBeDefined();
  });
});
