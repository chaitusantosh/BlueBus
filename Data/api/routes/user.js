const User = require('../../models/user');
module.exports = function(router) {
    router.get('/users', (req, res) => {
        User.find({}, (err, user) => {
            if (err) {
                res.json({ success: false, message: err });
            } else {
                if (!user) {
                    res.json({ success: false, message: 'no user found' });
                } else {
                    res.json({ success: true, user: user });
                }
            }
        })
    })

    router.delete('/deleteuser/:id', (req, res) => {
        // Check if ID was provided in parameters
        if (!req.params.id) {
            res.json({ success: false, message: 'No id provided' }); // Return error message
        } else {
            // Check if id is found in database
            User.findOne({ _id: req.params.id }, (err, user) => {
                // Check if error was found
                if (err) {
                    res.json({ success: false, message: 'Invalid id' }); // Return error message
                } else {
                    // Remove the standup from database
                    user.remove((err) => {
                        if (err) {
                            res.json({ success: false, message: err }); // Return error message
                        } else {
                            res.json({ success: true, message: 'user deleted!' }); // Return success message
                        }
                    });
                }
            });
        }
    });
    router.put('/user', (req, res) => {
        if (!req.body._id) {
            res.json({ success: false, message: 'no id provided' });
        } else {
            User.findOne({ _id: req.body._id }, (err, user) => {
                if (err) {
                    res.json({ success: false, message: 'not valid id' }); // Return error message
                } else {
                    user.name = req.body.name;
                    user.email = req.body.email;
                    user.password = req.body.password;
                    user.mobile = req.body.mobile;
                    user.dateofbirth = req.body.dateofbirth
                    user.sex = req.body.sex;
                    user.plan = req.body.plan;
                    user.save((err) => {
                        if (err) {
                            res.json({ success: false, message: err });
                        } else {
                            res.json({ success: true, message: 'updated' });
                        }
                    })
                }
            })
        }
    })
    router.post('/user', function(req, res) {
        let note = new User(req.body)
        note.save(function(err, note) {
            if (err)
                return res.status(400).json(err)
            res.status(200).json(note);
        })
    })
}