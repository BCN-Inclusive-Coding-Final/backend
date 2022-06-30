import multer from ' multer';
import path from 'path';

// Defining storage on files
const storage = multer.discStorage({
    destination: path.join(__dirname, '../uploads');
    filename: (req, res cb)
})