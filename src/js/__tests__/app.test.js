import ArrayBufferConverter from '../ArrayBufferConverter';
import getBuffer from '../getBuffer';

test('should return a string from the buffer', () => {
    const bufferConverter = new ArrayBufferConverter();
    bufferConverter.load(getBuffer());
    const string = bufferConverter.toString();
    const result = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
    expect(string).toBe(result);
  });

  

