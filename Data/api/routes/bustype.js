const BusType = require('../../models/bustype')
module.exports = function(router) {
    router.get('/bustypes', (req, res) => {
        BusType.find({}, (err, bustype) => {
            if (err) {
                res.json({ success: false, message: err })
            } else {
                if (!bustype)
                    res.json({ success: false, message: 'no bustype found' })
                res.json({ success: true, bustype: bustype })
            }
        })
    })
    router.post('/bustype', (req, res) => {
        let note = new BusType(req.body)
        note.save(function(err, note) {
            if (err)
                return res.status(400).json(err)
            res.status(200).json(note);
        })
    })
}