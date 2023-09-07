const connection = require("../config/database")

const getUser = async (req, res, next) => {

    // connection.query(
    //     `Select * from User`,
    //     function (err, results) {
    //         console.log(results);
    //         res.json(results)
    //     }
    // );

    let [results, fields] = await connection.query(
        `Select * from User`,
        function (err, results) {
            console.log(results);
            res.json(results)
        }
    );
    console.log(results);
}

const saveUser = (req, res, next) => {
    const name = req.body?.name
    const email = req.body?.email
    const city = req.body?.city
    connection.query(
        `INSERT INTO User (name, email, city)
       VALUES (?, ?, ?);`,
        [name, email, city],
        function (err, results) {
            console.log(results);
            res.send('saveUser')
        }
    );

}

module.exports = {
    getUser,
    saveUser
}