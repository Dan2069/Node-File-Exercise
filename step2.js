const fs = require('fs');
const process = require('process');
const axios = require('axios');


// reads the file at the path and prints it out
function cat(path) {
    fs.readFile(path, 'utf8', function(err, data) {
        if (err) {
            console.error(`Error reading ${path}: ${err}`);
            process.exit(1);
        }
        else {
            console.log(data);
        }
    });
}

// reads the page at URL and prints it out

async function webCat(url) {
    try{
        let resp = await axios.get(url);
        console.log(resp.data);
    }
    catch (err) {
        console.error(`Error fetching ${url}: ${err}`);
        process.exit(1);
    }
}

let path = process.argv[2];

if (path.slice(0,4) === 'http') {
    webCat(path);
}
else {
    cat(path);
}