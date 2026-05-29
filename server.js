const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies from frontend requests
app.use(express.json());

// Middleware to serve static files (e.g., if you place index.html in a 'public' folder)
// For this example, we'll serve the file directly on the root route.
app.use(express.static(path.join(__dirname)));

// Root Route: Serve the frontend index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Mock API Endpoint: Handle booking form submissions from the frontend
app.post('/api/book', (req, res) => {
    const { name, email, package, message } = req.body;

    // Basic Validation
    if (!name || !email || !package) {
        return res.status(400).json({ error: 'Name, email, and package are required fields.' });
    }

    // In a real application, you would save this to a database (like MongoDB/PostgreSQL)
    // or send an email to the sales team using Nodemailer.
    
    console.log('--- New Booking Request Received ---');
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Package: ${package}`);
    console.log(`Message: ${message || 'No additional message'}`);
    console.log('------------------------------------');

    // Respond back to the frontend
    res.status(200).json({ 
        success: true, 
        message: 'Booking request successfully received. Our team will contact you shortly.' 
    });
});

// Start the Express Server
app.listen(PORT, () => {
    console.log(`🌍 R&H WildQuest Backend is running on http://localhost:${PORT}`);
    console.log(`Serving frontend and listening for API requests...`);
});