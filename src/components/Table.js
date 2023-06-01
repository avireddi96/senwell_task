import React from 'react';
import dummyData from './Utils/dummyData';

const Table = () => {
  const getDistinctNames = () => {
    const distinctNames = [...new Set(dummyData.map((item) => item.name.toUpperCase()))];

  
    return distinctNames;
  };

  const getCountOfDuplicates = (name) => {
    const duplicates = dummyData.filter((item) => item.name.toUpperCase() === name.toUpperCase());

    return duplicates.length;
  };

  const getBackgroundColor = (count) => {
    if (count > 0 && count < 3) {
      return 'red';
    } else if (count >= 3 && count < 10) {
      return 'yellow';
    } else if (count >= 10) {
      return 'green';
    }
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Duplicate Count</th>
        </tr>
      </thead>
      <tbody>
        {getDistinctNames().map((name, index) => (
          <tr key={index} style={{ backgroundColor: getBackgroundColor(getCountOfDuplicates(name)) }}>
            <td>{name}</td>
            <td>{getCountOfDuplicates(name)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
