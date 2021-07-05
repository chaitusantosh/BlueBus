const Bus = require('../../models/bus')
module.exports = function(router) {

    router.get('/bus', (req, res) => {
        Bus.find({}, (err, bus) => {
            if (err)
                res.json({ success: false, message: err })
            else {
                if (!bus)
                    res.json({ success: false, message: 'no bus' })
                res.json({ success: true, bus: bus })
            }
        })
    })
    router.put('/bus', (req, res) => {
        if (!req.body._id) {
            res.json({ success: false, message: 'no id given' });
        } else {
            Bus.findOne({ _id: req.body._id }, (err, bus) => {
                if (err) {
                    res.json({ success: false, message: 'invalid id' })
                } else {
                    bus.from = req.body.from;
                    bus.to = req.body.to;
                    bus.date = req.body.date;
                    bus.type = req.body.type;
                    bus.seats = req.body.seats;
                    bus.departure = req.body.departure;
                    bus.arrival = req.body.arrival;
                    bus.fare = req.body.fare;
                    bus.bookedseats = req.body.bookedseats;
                    bus.available = req.body.available;
                    bus.booked = req.body.booked;
                    bus.save((err) => {
                        if (err) {
                            res.json({ success: false, message: err })
                        } else {
                            res.json({ success: true, message: 'updated' })
                        }
                    });
                }
            });
        }
    });
    router.post('/bus', (req, res) => {
        let note = new Bus(req.body)
        note.save((err, note) => {
            if (err)
                return res.status(400).json(err)
            res.status(200).json(note);
        })
    })
}