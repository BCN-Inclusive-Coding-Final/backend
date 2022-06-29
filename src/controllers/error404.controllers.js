export const error404 = (req, res) => {
    try {
        res.status(404).json({
            msg: 'Error 404 - Page Not Found'
        });
    } catch (error) {
        res.status(500).json({
            msg: 'Error 500 - Internal Server Error'
        });
    };
};