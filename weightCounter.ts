export class WeightCounter {
    private intervalInSeconds: number;
    private data: { timestamp: number; value: number }[] = [];

    constructor(intervalInSeconds: number) {
        this.intervalInSeconds = intervalInSeconds;
    }

    hit(value: number): void {
        const now = Date.now() / 1000;
        this.cleanOldData(now);
        this.data.push({ timestamp: now, value });
    }

    count(): number {
        const now = Date.now() / 1000;
        this.cleanOldData(now);
        const weightedSum = this.calculateWeightedSum(now);
        return weightedSum;
    }

    private cleanOldData(currentTime: number): void {
        const expirationTime = currentTime - this.intervalInSeconds;
        this.data = this.data.filter(entry => entry.timestamp > expirationTime);
    }

    private calculateWeightedSum(currentTime: number): number {
        let weightedSum = 0;
        for (const entry of this.data) {
            const timeDiff = currentTime - entry.timestamp;
            const weight = Math.exp(-timeDiff / this.intervalInSeconds);
            weightedSum += entry.value * weight;
        }
        return weightedSum;
    }
}
