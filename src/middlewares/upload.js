import multer from 'multer';
import path from 'path';

// Defining storage on files
const storage = multer.diskStorage({
    destination: path.join(__dirname, '../uploads'),
    filename: (req, file, cb) => {
        cb(null, Date.now() + file.originalname);
    }
});

// Filtering by mimetimes
const fileFilter = (req, file, cb) => {
    const fileTypes = ['text/csv'];

    if (fileTypes.some(fileType => fileType === file.mimetype)) return cb(null, true);

    return cb(new Error('Only CSV files can be uploaded!'), false);
};

// Upload the CSV documents
export const upload = (req, res, next) => {

    return multer({
        storage,
        limits: { fileSize: 8000000 },
        fileFilter
    }).single('csv')(req, res, (err) => {
        // File size error
        if (err instanceof multer.MulterError) return res.status(400).json({ msg: 'Max file size 2MB allowed!' });

        // Invalid file type, message will return from fileFilter callback
        if (err) return res.status(400).json(err.message);

        // File not selected
        if (!req.file) return res.status(400).json({
            msg: 'File is required!'
        });
        next();
    });
};