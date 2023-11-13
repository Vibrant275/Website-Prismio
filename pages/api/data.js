// pages/api/data.js

export default async function handler(req, res) {
    try {
        // You can use a relative URL since both Next.js and Node.js are running locally
        const response = await fetch('http://localhost:4000/api/data'); // No need to specify the full URL
        const data = await response.json();

        res.status(200).json(data);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}
