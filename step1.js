args = [];
for (let arg of process.argv) {
    args.push(arg);
}

file = args.pop();

const fs = require('fs');


function cat(path) {
    fs.readFile(path, 'utf8', (err, data) => {
        if (err) {
            console.log(err);
            process.exit(1);
        };
        console.log(data);
    });
}

cat(file);