// Interface3.js
import React from 'react';

const Interface1 = ({ results1, results2 }) => {
  return (
    <div>
      <h1>Interface 3</h1>
      <div>
        <h2>Table 1: Processing Results</h2>
        <table>
          {/* Table content for results1 */}
        </table>
      </div>
      <div>
        <h2>Table 2: Processing Results</h2>
        <table>
          {/* Table content for results2 */}
        </table>
      </div>
    </div>
  );
};

export default Interface1;
