const pool = require("../config/database");

/* READ */
const getAll = () => {
  return new Promise((resolve, reject) => {
    pool.query("select * from club_mgr", (err, results, fields) => {
      if (err) reject(err);
      //TODO check if empty
      else resolve(results);
    });
  });
};

const getManagerById = inputId => {
  let query = `select * from club_mgr where mgr_id =` + pool.escape(inputId);
  console.log(query);
  return new Promise((resolve, reject) => {
    pool.query(query, (err, results, fields) => {
      if (err) reject(err);
      //TODO check if empty
      else resolve(results);
    });
  });
};

/* CREATE */
// createManager


/* UPDATE */
// updateManager

/* REMOVE */
// removeManager
const verifyManager = (acc, pw) => {
  let query = `SELECT mgr_id, mgr_fname, mgr_lname, fk_clubs_id FROM club_mgr WHERE mgr_account=${pool.escape(acc)} AND mgr_password=${pool.escape(pw)}`;
  return new Promise((resolve, reject) => {
    pool.query(query, (err, results, fields) => {        
        if (err) reject(err);
        else {
         resolve(results);
        }
    });
});
}
module.exports = {
  getAll,
  getManagerById,
  verifyManager
};
