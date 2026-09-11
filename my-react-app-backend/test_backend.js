const http = require('http');

function postData() {
    const data = JSON.stringify({
        company: "Test Company",
        status: "Active"
    });

    const options = {
        hostname: 'localhost',
        port: 5000,
        path: '/api/companies',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Content-Length': data.length
        }
    };

    const req = http.request(options, (res) => {
        console.log(`POST Status Code: ${res.statusCode}`);

        let responseData = '';
        res.on('data', (chunk) => {
            responseData += chunk;
        });

        res.on('end', () => {
            console.log('POST Response:', responseData);
            // After POST, try GET
            getData();
        });
    });

    req.on('error', (error) => {
        console.error('POST Error:', error);
    });

    req.write(data);
    req.end();
}

function getData() {
    const options = {
        hostname: 'localhost',
        port: 5000,
        path: '/api/companies',
        method: 'GET'
    };

    const req = http.request(options, (res) => {
        console.log(`GET Status Code: ${res.statusCode}`);

        let responseData = '';
        res.on('data', (chunk) => {
            responseData += chunk;
        });

        res.on('end', () => {
            console.log('GET Response:', responseData);
        });
    });

    req.on('error', (error) => {
        console.error('GET Error:', error);
    });

    req.end();
}

// Start the test
console.log("Starting backend test...");
postData();
