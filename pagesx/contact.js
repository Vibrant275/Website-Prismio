import { useEffect, useState } from 'react';

function YourComponent() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('/api/data') // Replace with your API endpoint URL
            .then((response) => response.json())
            .then((result) => {
                setData(result);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <div>
            <h1>Data from API:</h1>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    );
}

export default YourComponent;
