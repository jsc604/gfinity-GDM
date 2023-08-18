import { sortByTwoKeys } from '~/helpers/sortByTwoKeys';

describe('sortByTwoKeys', () => {
  const mockData = [
    { name: 'Alice', size: 'b' },
    { name: 'Bob', size: 'd' },
    { name: 'Alice', size: 'c' },
    { name: 'John', size: 'a' },
  ];

  it('should sort data by name and then size in ascending order', () => {
    const sortedData = sortByTwoKeys(mockData, true, 'name', 'size');
    expect(sortedData[0].name).toBe('Alice');
    expect(sortedData[0].size).toBe('b');
    expect(sortedData[3].name).toBe('John');
    expect(sortedData[3].size).toBe('a');
  });

  it('should sort data by name and then size in descending order', () => {
    const sortedData = sortByTwoKeys(mockData, false, 'name', 'size');
    expect(sortedData[0].name).toBe('John');
    expect(sortedData[0].size).toBe('a');
    expect(sortedData[3].name).toBe('Alice');
    expect(sortedData[3].size).toBe('b');
  });

});
