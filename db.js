const Pool = require("pg").Pool;

const pool = new Pool({
    user: "qjddgyobscjkrv",
    password: "5fd261038e49cce27765f27aa354f303e72541c80ea818320ec7d2014f6a9750$",
    host: "ec2-52-23-63-127.compute-1.amazonaws.com",
    database: "de5im3r7gptrg1",
    port: 5432
});

module.exports = pool;