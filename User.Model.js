const dbc = require("./Server.js");

console.log("Connected");

async function showData(rows){
    rows.array.forEach(element => {
        console.log(element['ID'] + ", " + element['kuerzel'] + ", " )
    });
}

async function GetAllToDo(){
    let conn;
    try {
        conn = await dbc.Pool.getConnection();
        const rows = await conn.query("SELECT * FROM `todo`");
        console.log(rows);
    } catch (err){
        throw err;
    } finally {
        if (conn) return conn.end();
    }
}

async function GetToDoByID(id){
    let conn;
    try {
        conn = await dbc.Pool.getConnection();
        const rows = await conn.query("SELECT * FROM `todo` WHERE `ID` = ?", [id]);
    }catch (err){
        throw err;
    } finally {
        if (conn) return conn.end();
    }
}

async function CreateToDo(id, title, Description){
    let conn;
    try {
        conn = await dbc.Pool.getConnection();
        const rows = await conn.query("INSERT INTO `todo` (`ID`, `title`, `Description`, `Time`) VALUES ( ?, ?, ?, CURRENT_DATE())");
    }catch (err){
        throw err;
    } finally {
        if (conn) return conn.end();
    }
}

console.log("Test");
GetAllToDo()
    .then(showData);


module.exports = {
    GetAllToDo,
    GetToDoByID,
    CreateToDo
};