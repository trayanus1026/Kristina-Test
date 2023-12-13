import { WeightCounter } from './weightCounter'; 

describe('WeightedCounter', () => {
  it('should calculate weighted count over time', () => {
    jest.useFakeTimers();

    const weightCounter = new WeightCounter(60);
    weightCounter.hit(5);
    jest.advanceTimersByTime(20000);
    weightCounter.hit(10); 
    jest.advanceTimersByTime(20000); 
    weightCounter.hit(8); 

    jest.advanceTimersByTime(20000);
    const currentCount = weightCounter.count();

    jest.useRealTimers();
    console.log(currentCount);
    expect(currentCount).toBeCloseTo(10.87, 2); 
  });
});
