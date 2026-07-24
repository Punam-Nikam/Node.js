// delete the file

const fs = require("fs");
fs.unlink("readfile.txt", (err) => {
    if (err) {
        console.error("Error deleting file:", err);
        return;
    }
    console.log("File deleted successfully.");
}
);

