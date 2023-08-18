import { sortByName } from "~/helpers/sortByName";

describe('sortByName', () => {
  const mockData = [
    { name: '  John  ' },
    { name: 'Alice' },
    { name: ' Bob ' },
    { name: 'Eve ' },
    { name: '  Jacob' },
    { name: 'Matthew' },
  ];

  it('should sort data in ascending order and remove white spaces', () => {
    const sortedData = sortByName(mockData, true, 'name');
    expect(sortedData[0].name).toBe('Alice');
    expect(sortedData[5].name).toBe('Matthew');
  });

  it('should sort data in descending order and remove white spaces', () => {
    const sortedData = sortByName(mockData, false, 'name');
    expect(sortedData[0].name).toBe('Matthew');
    expect(sortedData[5].name).toBe('Alice');
  });
});
