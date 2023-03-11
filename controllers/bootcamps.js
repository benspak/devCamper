// Description: Get all bootcamps
// Route:       GET /api/v1/bootcamps
// Access:      Public
exports.getBootcamps = (req, res, next) => {
    res.status(200).json({ success: true, msg: 'Show all bootcamps' })
}

// Description: Get single bootcamp
// Route:       GET /api/v1/bootcamps/:id
// Access:      Public
exports.getBootcamp = (req, res, next) => {
    res.status(200).json({ success: true, msg: `Get bootcamp ${req.params.id}` })
}

// Description: Create new bootcamp
// Route:       POST /api/v1/bootcamps/
// Access:      Private
exports.createBootcamp = (req, res, next) => {
    res.status(200).json({ success: true, msg: 'Create new bootcamp' })
}

// Description: Update bootcamp
// Route:       PUT /api/v1/bootcamps/:id
// Access:      Private
exports.updateBootcamp = (req, res, next) => {
    res.status(200).json({ success: true, msg: `Display bootcamp ${req.params.id}` })
}

// Description: Delete bootcamp
// Route:       DELETE /api/v1/bootcamps/:id
// Access:      Private
exports.deleteBootcamp = (req, res, next) => {
    res.status(200).json({ success: true, msg: `Delete bootcamp ${req.params.id}` })
}