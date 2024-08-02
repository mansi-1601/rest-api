// import React, { useState } from 'react';
// import axios from 'axios';

// const App = () => {
//     const [jsonData, setJsonData] = useState('');
//     const [responseData, setResponseData] = useState(null);
//     const [error, setError] = useState(null);
//     const [selectedOptions, setSelectedOptions] = useState([]);

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const response = await axios.post('http://localhost:3000/bfhl', JSON.parse(jsonData));
//             setResponseData(response.data);
//             setError(null);
//         } catch (err) {
//             setError('Invalid JSON input or request failed');
//             setResponseData(null);
//         }
//     };

//     const handleOptionChange = (e) => {
//         const { value, checked } = e.target;
//         if (checked) {
//             setSelectedOptions([...selectedOptions, value]);
//         } else {
//             setSelectedOptions(selectedOptions.filter(option => option !== value));
//         }
//     };

//     const renderResponse = () => {
//         if (!responseData) return null;

//         const result = {};
//         selectedOptions.forEach(option => {
//             result[option] = responseData[option];
//         });

//         return (
//             <pre>{JSON.stringify(result, null, 2)}</pre>
//         );
//     };

//     return (
//         <div>
//             <h1>Enter Data</h1>
//             <form onSubmit={handleSubmit}>
//                 <textarea 
//                     value={jsonData} 
//                     onChange={(e) => setJsonData(e.target.value)} 
//                     placeholder='Enter JSON data here' 
//                 />
//                 <button type="submit">Submit</button>
//             </form>
//             {error && <p>{error}</p>}
//             <div>
//                 <label>
//                     <input type="checkbox" value="numbers" onChange={handleOptionChange} /> Numbers
//                 </label>
//                 <label>
//                     <input type="checkbox" value="alphabets" onChange={handleOptionChange} /> Alphabets
//                 </label>
//                 <label>
//                     <input type="checkbox" value="highest_alphabet" onChange={handleOptionChange} /> Highest Alphabet
//                 </label>
//             </div>
//             {renderResponse()}
//         </div>
//     );
// };

// export default App;


import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    const [jsonData, setJsonData] = useState('');
    const [responseData, setResponseData] = useState(null);
    const [error, setError] = useState(null);
    const [selectedOptions, setSelectedOptions] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/bfhl', JSON.parse(jsonData));
            setResponseData(response.data);
            setError(null);
        } catch (err) {
            setError('Invalid JSON input or request failed');
            setResponseData(null);
        }
    };

    const handleOptionChange = (e) => {
        const { value, checked } = e.target;
        if (checked) {
            setSelectedOptions([...selectedOptions, value]);
        } else {
            setSelectedOptions(selectedOptions.filter(option => option !== value));
        }
    };

    const renderResponse = () => {
        if (!responseData) return null;

        const result = {};
        selectedOptions.forEach(option => {
            result[option] = responseData[option];
        });

        return (
            <pre className="p-3 bg-light border">{JSON.stringify(result, null, 2)}</pre>
        );
    };

    return (
        <div className="container mt-5">
            <h1 className="mb-4">Enter Data</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <textarea 
                        className="form-control" 
                        value={jsonData} 
                        onChange={(e) => setJsonData(e.target.value)} 
                        placeholder='Enter JSON data here' 
                        rows="5"
                    />
                </div>
                <button type="submit" className="btn btn-primary mb-3">Submit</button>
            </form>
            {error && <div className="alert alert-danger">{error}</div>}
            <div className="mb-3">
                <div className="form-check">
                    <input 
                        className="form-check-input" 
                        type="checkbox" 
                        value="numbers" 
                        onChange={handleOptionChange} 
                    />
                    <label className="form-check-label">Numbers</label>
                </div>
                <div className="form-check">
                    <input 
                        className="form-check-input" 
                        type="checkbox" 
                        value="alphabets" 
                        onChange={handleOptionChange} 
                    />
                    <label className="form-check-label">Alphabets</label>
                </div>
                <div className="form-check">
                    <input 
                        className="form-check-input" 
                        type="checkbox" 
                        value="highest_alphabet" 
                        onChange={handleOptionChange} 
                    />
                    <label className="form-check-label">Highest Alphabet</label>
                </div>
            </div>
            {renderResponse()}
        </div>
    );
};

export default App;