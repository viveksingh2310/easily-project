import multer from "multer";
const storageConfig = multer.diskStorage(
    {
        destination: (req, res, cb) => {
            cb(null,'public/resumeImages/');
        },
        filename: (req, file, cb) => {
            const name = Date.now() + "-" + file.originalname;
            cb(null, name);
        },
    }
);
export const uploadFiles=multer({Storage:storageConfig});
