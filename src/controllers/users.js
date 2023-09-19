const _JWT = require("../config/_JWT");
const connection = require("../config/database")

const getUser = (req, res, next) => {
    connection.query(
        `Select * from User`,
        function (err, results) {
            console.log(results);
            res.json(results)
        }
    );
}

const saveUser = async (req, res, next) => {

    console.log('saveUser',req.token)
    // const token = req.body?.token
    try {
        const resCheck = await _JWT.check(req.token);
        
        // to do
        res.send(resCheck);

        // connection.query(
        //     `INSERT INTO User (name, email, city)
        //    VALUES (?, ?, ?);`,
        //     [name, email, city],
        //     function (err, results) {
        //         console.log(results);
        //         res.send('saveUser')
        //     }
        // );
    } catch (error) {
        res.send('token không hợp lệ')
    }
}

const updateUser = (req, res, next) => {
    const userId = req.params?.id;
    console.log('update user', userId)
    res.send('update User')
}

const loginUser = async (req, res, next) => {
    try {
        const username = req.body?.username;
        const password = req.body?.password;
        console.log('aaa00', username, password)
        connection.query(
            `Select * from User where username= ? && password = ?`, [username, password],
            async function (err, results) {
                if (err) {
                    res.send(err)
                    return;
                }
                console.log('aaa', results)
                if (results && results?.length > 0) {
                    const token = await _JWT.make({
                        id: results[0]?.id,
                        email: results[0]?.email || '',
                        name: results[0]?.name || '',
                        city: results[0]?.city || ''
                    })
                    res.json({
                        token: token,
                        message: 'Đăng nhập thành công'
                    })
                    return;
                } else {
                    res.send("Tài khoản hoặc mật khẩu không chính xác")
                }
            }
        );
    } catch (err) {
        res.send(err)
    }

}

module.exports = {
    getUser,
    saveUser,
    updateUser,
    loginUser
}