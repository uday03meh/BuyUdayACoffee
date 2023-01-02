import React from 'react';

function ResponsiveTable() {
  return (
    <table className="responsive-table" style={{ width: '100%' }}>
      <tr>
        <th style={{ backgroundColor: '#ff0000' }}>Column 1</th>
        <th style={{ backgroundColor: '#00ff00' }}>Column 2</th>
        <th style={{ backgroundColor: '#0000ff' }}>Column 3</th>
        <th style={{ backgroundColor: '#ffff00' }}>Column 4</th>
        <th style={{ backgroundColor: '#00ffff' }}>Column 5</th>
      </tr>
      <tr>
        <td>Row 1, Column 1</td>
        <td>Row 1, Column 2</td>
        <td>Row 1, Column 3</td>
        <td>Row 1, Column 4</td>
        <td>Row 1, Column 5</td>
      </tr>
      <tr>
        <td>Row 2, Column 1</td>
        <td>Row 2, Column 2</td>
        <td>Row 2, Column 3</td>
        <td>Row 2, Column 4</td>
        <td>Row 2, Column 5</td>
      </tr>
    </table>
  );
}

export default ResponsiveTable;
