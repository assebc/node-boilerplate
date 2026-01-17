import request from 'supertest';
import { router, Shutdown } from '@src/server';

describe('AIService', () => {
  afterAll((done) => {
    Shutdown(done);
  });

  it('should start and have propert test environment', async () => {
    expect(process.env.NODE_ENV).toStrictEqual('test');
    expect(router).toBeDefined();
  }, 10000);

  it('should return all options allowed to be called', async () => {
    const response = await request(router).options('/');

    expect(response.status).toStrictEqual(204);
    expect(response.headers['access-control-allow-methods']).toBe('PUT, POST, PATCH, DELETE, GET');
  });
});
