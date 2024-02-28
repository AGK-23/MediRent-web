// // DragItem.js
// import React from 'react';
// import { useDrag } from 'react-dnd';

// const DragItem = ({ name, type, borderColor }) => {
//     const [, drag] = useDrag({
//         item: { name, type },
//         collect: (monitor) => ({
//             isDragging: !!monitor.isDragging(),
//         }),
//     });

//     return (
//         <div
//             ref={drag}
//             className={`p-4 border-2 border-${borderColor} rounded cursor-move`}
//             style={{ opacity: 1 }}
//         >
//             {name}
//         </div>
//     );
// };

// export default DragItem;
