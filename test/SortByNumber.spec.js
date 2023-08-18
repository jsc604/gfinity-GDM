import { sortByNumber } from "~/helpers/sortByNumber";

describe('sortByNumber', () => {
  const mockData = [
    { rating: 90 },
    { rating: 85 },
    { rating: 88 },
    { rating: 92 },
  ];

  it('should sort data in ascending order by rating', () => {
    const sortedData = sortByNumber(mockData, true, 'rating');
    expect(sortedData[0].rating).toBe(85);
    expect(sortedData[3].rating).toBe(92);
  });

  it('should sort data in descending order by rating', () => {
    const sortedData = sortByNumber(mockData, false, 'rating');
    expect(sortedData[0].rating).toBe(92);
    expect(sortedData[3].rating).toBe(85);
  });

  const mockData2 = [
    { statistics: { pace: { average: 90 } } },
    { statistics: { pace: { average: 85 } } },
    { statistics: { pace: { average: 88 } } },
    { statistics: { pace: { average: 92 } } },
  ];

  it('should sort data in ascending order by pace average', () => {
    const sortedData = sortByNumber(mockData2, true, 'pace');
    expect(sortedData[0].statistics.pace.average).toBe(85);
    expect(sortedData[3].statistics.pace.average).toBe(92);
  });

  it('should sort data in descending order by pace average', () => {
    const sortedData = sortByNumber(mockData2, false, 'pace');
    expect(sortedData[0].statistics.pace.average).toBe(92);
    expect(sortedData[3].statistics.pace.average).toBe(85);
  });
});
