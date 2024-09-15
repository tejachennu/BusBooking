// import React, { useState } from 'react';

// const SVGSeat = () => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     viewBox="0 0 24 24"
//     width="20"
//     height="20"
//     className="seat-svg"
//   >
//     <rect width="20" height="20" fill="gray" />
//     <line x1="5" y1="0" x2="5" y2="20" stroke="black" strokeWidth="2" />
//     <line x1="15" y1="0" x2="15" y2="20" stroke="black" strokeWidth="2" />
//     <line x1="0" y1="5" x2="20" y2="5" stroke="black" strokeWidth="2" />
//   </svg>
// );

// const SVGBed = () => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     viewBox="0 0 40 40"
//     width="30"
//     height="20"
//     className="bed-svg"
//   >
//     <rect width="40" height="20" fill="red" />
//     <rect x="30" y="0" width="10" height="20" fill="darkred" />
//     <line x1="0" y1="10" x2="40" y2="10" stroke="black" strokeWidth="2" />
//   </svg>
// );

// const createRow = (cols) => Array(cols).fill(null);

// const BusLayout = () => {
//   const initialDeckState = [{ cols: 2, grid: createRow(2) }];
  
//   const [upperLeftRows, setUpperLeftRows] = useState(initialDeckState);
//   const [upperRightRows, setUpperRightRows] = useState(initialDeckState);
//   const [lowerLeftRows, setLowerLeftRows] = useState(initialDeckState);
//   const [lowerRightRows, setLowerRightRows] = useState(initialDeckState);

//   const [selectedItem, setSelectedItem] = useState(null);

//   const handleAddItem = (deckRows, setDeckRows, rowIndex, colIndex) => {
//     if (selectedItem === null) return;
    
//     const updatedDeckRows = deckRows.map((row, i) =>
//       i === rowIndex
//         ? {
//             ...row,
//             grid: row.grid.map((item, j) =>
//               j === colIndex ? { id: `item-${rowIndex}-${colIndex}`, type: selectedItem } : item
//             ),
//           }
//         : row
//     );
    
//     setDeckRows(updatedDeckRows);
//   };

//   const addRow = (deckRows, setDeckRows) => {
//     setDeckRows([...deckRows, { cols: 2, grid: createRow(2) }]);
//   };

//   const removeRow = (deckRows, setDeckRows) => {
//     if (deckRows.length > 1) {
//       setDeckRows(deckRows.slice(0, -1));
//     }
//   };

//   const addColumn = (deckRows, setDeckRows, rowIndex) => {
//     const updatedDeckRows = deckRows.map((row, i) =>
//       i === rowIndex
//         ? { ...row, cols: row.cols + 1, grid: [...row.grid, null] }
//         : row
//     );
//     setDeckRows(updatedDeckRows);
//   };

//   const removeColumn = (deckRows, setDeckRows, rowIndex) => {
//     const updatedDeckRows = deckRows.map((row, i) =>
//       i === rowIndex && row.cols > 1
//         ? { ...row, cols: row.cols - 1, grid: row.grid.slice(0, -1) }
//         : row
//     );
//     setDeckRows(updatedDeckRows);
//   };

//   const renderDeckSection = (deckRows, setDeckRows, sectionTitle) => (
//     <div className="w-1/2 p-2">
//       <h4 className="mb-2 text-lg">{sectionTitle}</h4>
//       {deckRows.map((row, rowIndex) => (
//         <div key={rowIndex} className="mb-4">
//           <div className="flex justify-between mb-2">
//             <h4 className="mr-4 text-sm">Row {rowIndex + 1}</h4>
//             <div>
//               <button
//                 onClick={() => addColumn(deckRows, setDeckRows, rowIndex)}
//                 className="px-2 py-1 mr-2 text-xs font-bold text-white bg-green-500 rounded"
//               >
//                 + Col
//               </button>
//               <button
//                 onClick={() => removeColumn(deckRows, setDeckRows, rowIndex)}
//                 className="px-2 py-1 text-xs font-bold text-white bg-red-500 rounded"
//               >
//                 - Col
//               </button>
//             </div>
//           </div>
//           <div
//             style={{
//               display: 'grid',
//               gridTemplateColumns: `repeat(${row.cols}, minmax(0, 1fr))`,
//               gap: '0.5rem',
//             }}
//             className="p-2"
//           >
//             {row.grid.map((item, colIndex) => (
//               <div
//                 key={`${rowIndex}-${colIndex}`}
//                 className="flex items-center justify-center h-10 p-2 border border-gray-300 cursor-pointer"
//                 onClick={() => handleAddItem(deckRows, setDeckRows, rowIndex, colIndex)}
//               >
//                 {item ? (item.type === 'seat' ? <SVGSeat /> : <SVGBed />) : <span>Empty</span>}
//               </div>
//             ))}
//           </div>
//         </div>
//       ))}
//       <div className="flex justify-between">
//         <button
//           onClick={() => addRow(deckRows, setDeckRows)}
//           className="px-2 py-1 font-bold text-white bg-green-500 rounded"
//         >
//           + Row
//         </button>
//         <button
//           onClick={() => removeRow(deckRows, setDeckRows)}
//           className="px-2 py-1 font-bold text-white bg-red-500 rounded"
//         >
//           - Row
//         </button>
//       </div>
//     </div>
//   );

//   return (
//     <div className="flex">
//       {/* Side Panel for Seat/Bed Selection */}
//       <div className="w-1/4 p-4 bg-gray-100">
//         <h2 className="mb-4 text-xl">Select & Add Items</h2>
//         {[{ type: 'seat', Component: SVGSeat }, { type: 'bed', Component: SVGBed }].map(({ type, Component }) => (
//           <div
//             key={type}
//             className={`p-4 mb-4 bg-white shadow rounded cursor-pointer ${
//               selectedItem === type ? 'border-2 border-blue-500' : ''
//             }`}
//             onClick={() => setSelectedItem(type)}
//           >
//             <Component />
//             <p className="mt-2 text-center">{type.charAt(0).toUpperCase() + type.slice(1)}</p>
//           </div>
//         ))}
//       </div>

//       {/* Main Layout */}
//       <div className="w-3/4 p-4">
//         {/* Upper Deck */}
//         <h3 className="mb-4 text-lg font-semibold">Upper Deck</h3>
//         <div className="flex mb-4">
//           {renderDeckSection(upperLeftRows, setUpperLeftRows, 'Upper Deck (Left)')}
//           {renderDeckSection(upperRightRows, setUpperRightRows, 'Upper Deck (Right)')}
//         </div>

//         {/* Lower Deck */}
//         <h3 className="mb-4 text-lg font-semibold">Lower Deck</h3>
//         <div className="flex mb-4">
//           {renderDeckSection(lowerLeftRows, setLowerLeftRows, 'Lower Deck (Left)')}
//           {renderDeckSection(lowerRightRows, setLowerRightRows, 'Lower Deck (Right)')}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BusLayout;

import React, { useState } from 'react';

const SVGSeat = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="20"
    height="20"
    className="seat-svg"
  >
    <rect width="20" height="20" fill="gray" />
    <line x1="5" y1="0" x2="5" y2="20" stroke="black" strokeWidth="2" />
    <line x1="15" y1="0" x2="15" y2="20" stroke="black" strokeWidth="2" />
    <line x1="0" y1="5" x2="20" y2="5" stroke="black" strokeWidth="2" />
  </svg>
);

const SVGBed = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 40 40"
    width="30"
    height="20"
    className="bed-svg"
  >
    <rect width="40" height="20" fill="red" />
    <rect x="30" y="0" width="10" height="20" fill="darkred" />
    <line x1="0" y1="10" x2="40" y2="10" stroke="black" strokeWidth="2" />
  </svg>
);

const createRow = (cols) => Array(cols).fill(null);

const BusLayout = () => {
  const initialDeckState = [{ cols: 2, grid: createRow(2) }];

  const [upperLeftRows, setUpperLeftRows] = useState(initialDeckState);
  const [upperRightRows, setUpperRightRows] = useState(initialDeckState);
  const [lowerLeftRows, setLowerLeftRows] = useState(initialDeckState);
  const [lowerRightRows, setLowerRightRows] = useState(initialDeckState);

  const [selectedItem, setSelectedItem] = useState(null);
  const [busName, setBusName] = useState('');
  const [busNumber, setBusNumber] = useState('');
  const [busImage, setBusImage] = useState(null);

  // This will store the structured bus data
  const [busData, setBusData] = useState([]);

  const handleAddItem = (deckRows, setDeckRows, rowIndex, colIndex, berth) => {
    if (selectedItem === null) return;

    const deckType = getDeckType(deckRows); // Determine deck type
    const seatNumber = `${deckType}${rowIndex + 1}${String.fromCharCode(65 + colIndex)}`;

    const updatedDeckRows = deckRows.map((row, i) =>
      i === rowIndex
        ? {
            ...row,
            grid: row.grid.map((item, j) =>
              j === colIndex
                ? {
                    id: `item-${rowIndex}-${colIndex}`,
                    type: selectedItem,
                    number: seatNumber,
                    berth, // Indicating upper or lower berth
                  }
                : item
            ),
          }
        : row
    );

    setDeckRows(updatedDeckRows);
  };

  const getDeckType = (deckRows) => {
    if (deckRows === upperLeftRows) return 'UL'; // Upper Left
    if (deckRows === upperRightRows) return 'UR'; // Upper Right
    if (deckRows === lowerLeftRows) return 'LL'; // Lower Left
    if (deckRows === lowerRightRows) return 'LR'; // Lower Right
    return '';
  };

  const addRow = (deckRows, setDeckRows) => {
    setDeckRows([...deckRows, { cols: 2, grid: createRow(2) }]);
  };

  const removeRow = (deckRows, setDeckRows) => {
    if (deckRows.length > 1) {
      setDeckRows(deckRows.slice(0, -1));
    }
  };

  const addColumn = (deckRows, setDeckRows, rowIndex) => {
    const updatedDeckRows = deckRows.map((row, i) =>
      i === rowIndex
        ? { ...row, cols: row.cols + 1, grid: [...row.grid, null] }
        : row
    );
    setDeckRows(updatedDeckRows);
  };

  const removeColumn = (deckRows, setDeckRows, rowIndex) => {
    const updatedDeckRows = deckRows.map((row, i) =>
      i === rowIndex && row.cols > 1
        ? { ...row, cols: row.cols - 1, grid: row.grid.slice(0, -1) }
        : row
    );
    setDeckRows(updatedDeckRows);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const busLayout = {
      busName,
      busNumber,
      busImage,
      upperLeftRows,
      upperRightRows,
      lowerLeftRows,
      lowerRightRows,
    };
    setBusData([...busData, busLayout]);

    // Log the data in the console
    console.log('Structured Bus Data:', busData);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setBusImage(URL.createObjectURL(file));
  };

  const renderDeckSection = (deckRows, setDeckRows, sectionTitle, berth) => (
    <div className="p-2 ">
      <h4 className="mb-2 text-lg">{sectionTitle}</h4>
      {deckRows.map((row, rowIndex) => (
        <div key={rowIndex} className="mb-4">
          <div className="flex justify-between mb-2">
            <h4 className="mr-4 text-sm">Row {rowIndex + 1}</h4>
            <div>
              <button
                onClick={() => addColumn(deckRows, setDeckRows, rowIndex)}
                className="px-2 py-1 mr-2 text-xs font-bold text-white bg-green-500 rounded"
              >
                + Col
              </button>
              <button
                onClick={() => removeColumn(deckRows, setDeckRows, rowIndex)}
                className="px-2 py-1 text-xs font-bold text-white bg-red-500 rounded"
              >
                - Col
              </button>
            </div>
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: `repeat(${row.cols}, minmax(0, 1fr))`,
              gap: '0.5rem',
            }}
            className="p-2"
          >
            {row.grid.map((item, colIndex) => (
              <div
                key={`${rowIndex}-${colIndex}`}
                className="flex items-center justify-center h-10 p-2 border border-gray-300 cursor-pointer"
                onClick={() => handleAddItem(deckRows, setDeckRows, rowIndex, colIndex, berth)}
              >
                {item ? (
                  <div className="flex flex-col items-center">
                    {item.type === 'seat' ? <SVGSeat /> : <SVGBed />}
                    <span className="text-xs">{item.number}</span>
                    <span className="text-xs">{item.berth}</span>
                  </div>
                ) : (
                  <span>Empty</span>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
      <div className="flex justify-between">
        <button
          onClick={() => addRow(deckRows, setDeckRows)}
          className="px-2 py-1 font-bold text-white bg-green-500 rounded"
        >
          + Row
        </button>
        <button
          onClick={() => removeRow(deckRows, setDeckRows)}
          className="px-2 py-1 font-bold text-white bg-red-500 rounded"
        >
          - Row
        </button>
      </div>
    </div>
  );

  return (
    <div className="flex">
      {/* Side Panel for Seat/Bed Selection */}
      <div className="w-1/4 p-4 bg-gray-100">
        <h2 className="mb-4 text-xl">Select & Add Items</h2>
        {[{ type: 'seat', Component: SVGSeat }, { type: 'bed', Component: SVGBed }].map(({ type, Component }) => (
          <div
            key={type}
            className={`p-4 mb-4 bg-white shadow rounded cursor-pointer ${
              selectedItem === type ? 'border-2 border-blue-500' : ''
            }`}
            onClick={() => setSelectedItem(type)}
          >
            <Component />
            <p className="mt-2 text-center">{type.charAt(0).toUpperCase() + type.slice(1)}</p>
          </div>
        ))}
         {/* Form */}
         <form onSubmit={handleSubmit} className="mb-4">
          <div className="mb-2">
            <label className="block mb-2 text-sm font-bold">Bus Name</label>
            <input
              type="text"
              value={busName}
              onChange={(e) => setBusName(e.target.value)}
              className="w-full px-2 py-1 border rounded"
              required
            />
          </div>
          <div className="mb-2">
            <label className="block mb-2 text-sm font-bold">Bus Number</label>
            <input
              type="text"
              value={busNumber}
              onChange={(e) => setBusNumber(e.target.value)}
              className="w-full px-2 py-1 border rounded"
              required
            />
          </div>
          <div className="mb-2">
            <label className="block mb-2 text-sm font-bold">Bus Image</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="w-full px-2 py-1 border rounded"
              required
            />
          </div>
          <button type="submit" className="px-4 py-2 text-white bg-blue-500 rounded">
            Submit
          </button>
        </form>

      </div>

      {/* Main Layout */}
      <div className="w-3/4 p-4">
       
        {/* Upper Deck */}
        <h3 className="mb-4 text-lg font-semibold">Upper Deck</h3>
        <div className="mb-4">
          {renderDeckSection(upperLeftRows, setUpperLeftRows, 'Upper Deck (Left)', 'Upper')}
          {renderDeckSection(upperRightRows, setUpperRightRows, 'Upper Deck (Right)', 'Upper')}
        </div>

        {/* Lower Deck */}
        <h3 className="mb-4 text-lg font-semibold">Lower Deck</h3>
        <div className="mb-4 ">
          {renderDeckSection(lowerLeftRows, setLowerLeftRows, 'Lower Deck (Left)', 'Lower')}
          {renderDeckSection(lowerRightRows, setLowerRightRows, 'Lower Deck (Right)', 'Lower')}
        </div>
      </div>
    </div>
  );
};

export default BusLayout;
