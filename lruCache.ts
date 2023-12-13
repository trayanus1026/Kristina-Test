export class LRUCache {
    private cache: { [key: string]: any };
    private recencyOrder: string[];
    private recencyCounter: { [key: string]: number };
    private maxCacheSize: number;

    constructor(maxCacheSize: number) {
        this.cache = {};
        this.recencyOrder = [];
        this.recencyCounter = {};
        this.maxCacheSize = maxCacheSize;
    }

    private updateRecency(key: string): void {
        this.recencyOrder = [key, ...this.recencyOrder.filter(k => k !== key)];
    }

    private evictLRU(): void {
        const leastRecentKey = this.recencyOrder.pop();
        if (leastRecentKey) {
            delete this.cache[leastRecentKey];
            delete this.recencyCounter[leastRecentKey];
        }
    }

    proxy(key: string, func: (...args: any[]) => any, ...args: any[]): any {
        if (this.cache.hasOwnProperty(key)) {
            this.updateRecency(key);
            return this.cache[key];
        } else {
            const result = func(...args);
            this.cache[key] = result;
            this.updateRecency(key);

            for (const cacheKey in this.recencyCounter) {
                if (cacheKey !== key) {
                    this.recencyCounter[cacheKey]++;
                }
            }

            this.recencyCounter[key] = 0;

            if (Object.keys(this.cache).length > this.maxCacheSize) {
                this.evictLRU();
            }

            return result;
        }
    }
}
export const lruCache = new LRUCache(3);

export const getValue = (key: string) => {
    console.log(`Executing expensive operation for key: ${key}`);
    return key.toUpperCase();
}
