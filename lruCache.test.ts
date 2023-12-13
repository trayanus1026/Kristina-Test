// Import the LRUCache class
import { LRUCache, lruCache, getValue } from './lruCache';

describe('LRUCache', () => {
    it('should cache values and retrieve them', () => {
        expect(lruCache.proxy('key1', getValue, 'key1')).toBe('KEY1'); 
        expect(lruCache.proxy('key2', getValue, 'key2')).toBe('KEY2'); 
        expect(lruCache.proxy('key1', getValue, 'key1')).toBe('KEY1'); 
        expect(lruCache.proxy('key3', getValue, 'key3')).toBe('KEY3'); 
        expect(lruCache.proxy('key4', getValue, 'key4')).toBe('KEY4');
        expect(lruCache.proxy('key2', getValue, 'key2')).toBe('KEY2');
    });
});
