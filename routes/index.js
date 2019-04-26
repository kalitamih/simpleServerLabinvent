const express = require('express');

const router = express.Router();

const Form = require('../models/form');

const constants = require('../constants');

const { LinkFormData } = constants;

router.get('/', (req, res) => {
  Form.find({ task: 'labinvent' })
    .exec()
    .then((docs) => {
      const response = {
        data: docs.map(doc => (
          {
            'eth-ip': doc['eth-ip'],
            'eth-ip-addr': doc['eth-ip-addr'],
            'eth-mask': doc['eth-mask'],
            'eth-gtw': doc['eth-gtw'],
            'eth-dns': doc['eth-dns'],
            'eth-main-dns': doc['eth-main-dns'],
            'eth-sub-dns': doc['eth-sub-dns'],
            wifi: doc.wifi,
            point: doc.point,
            security: doc.security,
            key: doc.key,
            'wifi-ip': doc['wifi-ip'],
            'wifi-ip-addr': doc['wifi-ip-addr'],
            'wifi-mask': doc['wifi-mask'],
            'wifi-gtw': doc['wifi-gtw'],
            'wifi-dns': doc['wifi-dns'],
            'wifi-main-dns': doc['wifi-main-dns'],
            'wifi-sub-dns': doc['wifi-sub-dns'],
            url: {
              request: {
                type: 'GET',
                url: LinkFormData,
              },
            },
          })),
      };
      res.status(200).json(response);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
});

router.post('/', (req, res) => {
  console.log(req.body);
  const form = new Form({
    task: 'labinvent',
    'eth-ip': req.body['eth-ip'],
    'eth-ip-addr': req.body['eth-ip-addr'],
    'eth-mask': req.body['eth-mask'],
    'eth-gtw': req.body['eth-gtw'],
    'eth-dns': req.body['eth-dns'],
    'eth-main-dns': req.body['eth-main-dns'],
    'eth-sub-dns': req.body['eth-sub-dns'],
    wifi: req.body.wifi,
    point: req.body.point,
    security: req.body.security,
    key: req.body.key,
    'wifi-ip': req.body['wifi-ip'],
    'wifi-ip-addr': req.body['wifi-ip-addr'],
    'wifi-mask': req.body['wifi-mask'],
    'wifi-gtw': req.body['wifi-gtw'],
    'wifi-dns': req.body['wifi-dns'],
    'wifi-main-dns': req.body['wifi-main-dns'],
    'wifi-sub-dns': req.body['wifi-sub-dns'],
  });

  const upsertData = form.toObject();

  Form
    .update({ task: 'labinvent' }, upsertData, { upsert: true })
    .then((result) => {
      console.log(result);
      res.status(201).json({
        form: {
          result: upsertData,
          request: {
            type: 'POST',
            url: LinkFormData,
          },
        },
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
});

module.exports = router;
