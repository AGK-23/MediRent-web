// // DragAndDropContainer.js
// import React from 'react';
// import { DndProvider } from 'react-dnd';
// import { HTML5Backend } from 'react-dnd-html5-backend';
// import Drag from './Drag';

// const DragAndDropContainer = () => {
//     return (
//         <DndProvider backend={HTML5Backend}>
//             <div className="flex">
//                 <div className="flex-1 p-4">
//                     <h2 className="text-xl font-bold mb-4">Drag and Drop Container</h2>
//                     <div className="flex space-x-4">
//                         <Drag name="Item 1" type="ITEM" borderColor="blue-500" />
//                         <Drag name="Item 2" type="ITEM" borderColor="green-500" />
//                         <Drag name="Item 3" type="ITEM" borderColor="red-500" />
//                     </div>
//                 </div>
//                 <div className="flex-1 p-4 border-2 border-dashed border-gray-500">
//                     <h2 className="text-xl font-bold mb-4">Drop Area</h2>
//                     {/* Drop area content */}
//                 </div>
//             </div>
//         </DndProvider>
//     );
// };

// export default DragAndDropContainer;

import axios from "axios";

import React, { Component } from "react";

class App extends Component {
    state = {
        selectedFile: null,
    };

    onFileChange = (event) => {
        this.setState({
            selectedFile: event.target.files[0],
        });
    };

    onFileUpload = () => {
        const formData = new FormData();

        formData.append(
            "myFile",
            this.state.selectedFile,
            this.state.selectedFile.name
        );

        console.log(this.state.selectedFile);


        axios.post("api/uploadfile", formData);
    };


    fileData = () => {
        if (this.state.selectedFile) {
            return (
                <div>
                    <h2>File Details:</h2>
                    <p>
                        File Name:{" "}
                        {this.state.selectedFile.name}
                    </p>

                    <p>
                        File Type:{" "}
                        {this.state.selectedFile.type}
                    </p>

                    <p>
                        Last Modified:{" "}
                        {this.state.selectedFile.lastModifiedDate.toDateString()}
                    </p>
                </div>
            );
        } else {
            return (
                <div>
                    <br />
                    {/* <h4>
                        Choose before Pressing the Upload
                        button
                    </h4> */}
                </div>
            );
        }
    };

    render() {
        return (
            <div>
                <div className="border-2 border-blue-700 border-dashed p-10 mt-8 flex justify-center">
                    <input
                        type="file"
                        onChange={this.onFileChange}
                    />
                    <button className="p-2 bg-blue-900 text-white rounded" onClick={this.onFileUpload}>
                        Upload!
                    </button>
                </div>
                {this.fileData()}
            </div>
        );
    }
}

export default App;
