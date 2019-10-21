const express = require('express');
const router = express.Router();

import dbAdapter from '../../adapters/database';
import { Rental } from '../../ORM/models';

router.get('/', function (req, res, next) {

    dbAdapter.getItems(Rental).then(items => {
        if (req.query.city !== undefined) {
            let filteredRentals = items.filter(function (i) {
                return i.attributes.city.toLowerCase().indexOf(req.query.city.toLowerCase()) !== -1;
            });
            res.send({ data: filteredRentals });
        } else {
            res.send({ data: items });
        }
    });
});

router.get('/:id', function (req, res, next) {
    dbAdapter.getItem(Rental, req.params.id).then(item => {
        res.send({ data: item });
    });

});

module.exports = router;
