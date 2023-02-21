// Import required modules
const http = require('http');
const fs = require('fs');
const path = require('path');

// Define port number
const PORT = process.env.PORT || 3000;

// Define content types
const contentTypes = {
    'html': 'text/html',
    'css': 'text/css',
    'js': 'text/javascript',
    'png': 'image/png',
    'jpg': 'image/jpeg',
    'gif': 'image/gif',

};

// Create HTTP server
const server = http.createServer((req, res) => {
    // Parse URL and extract file path
    let filePath = req.url;
    if (filePath == '/') {
        filePath = '/index.html';
    }
    filePath = path.join(__dirname, 'public', filePath);

    // Determine content type based on file extension
    let contentType = contentTypes[path.extname(filePath).slice(1)] || 'application/octet-stream';

    // Read file and return contents to client
    fs.readFile(filePath, (err, content) => {
        if (err) {
            res.writeHead(404);
            res.end('404 Not Found');
        } else {
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content);
        }
    });
});

// Start server
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    console.log(`Server running in port ${PORT}`);
});
const serv = 0;