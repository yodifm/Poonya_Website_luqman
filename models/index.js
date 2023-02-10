import db from "../config/database.js";

(async() => {
    await db.sync();
}
)();
