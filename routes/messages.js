
const express = require('express');
const router  = express.Router();

module.exports = (db, io) => {
  // io.connection()
  router.get("/", (req, res) => {
    db.query(`
      SELECT messages.id, messages.content, messages.buyer_id, users.name as user_name, users.profile_photo, products.name as product_name, products.main_photo, products.price
      FROM messages
      JOIN users ON users.id = buyer_id
      JOIN products ON products.id = product_id
      WHERE messages.id = ${(req.query.message_id)}`)
    .then(data => res.json(data.rows))
  })

  router.get("/message/:id", (req, res) => {
    db.query(`
    SELECT messages.id, messages.content, messages.buyer_id, users.name as user_name, users.profile_photo, products.name as product_name, products.main_photo, products.price
    FROM messages
    JOIN users ON users.id = buyer_id
    JOIN products ON products.id = product_id
    WHERE messages.id = ${req.params.id}`)
    .then(data => res.json(data.rows))
  })

  router.get("/buy", (req, res) => {
    console.log(req.query, 'buy')
    db.query(`
      SELECT messages.id, messages.content, messages.seller_id, users.name as user_name, users.profile_photo, products.name as product_name, products.main_photo, products.price
      FROM messages
      JOIN users ON users.id = buyer_id
      JOIN products ON products.id = product_id
      WHERE messages.buyer_id = ${req.query.buyer_id}`)
    .then(data => res.json(data.rows));
  });

  router.get("/sell", (req, res) => {
    console.log(req.query.seller_id, 'sell')
    db.query(`
      SELECT messages.id, messages.content, messages.buyer_id, users.name as user_name, users.profile_photo, products.name as product_name, products.main_photo, products.price
      FROM messages
      JOIN users ON users.id = buyer_id
      JOIN products ON products.id = product_id
      WHERE messages.seller_id = ${req.query.seller_id}`)
    .then(data => {console.log('working'); res.json(data.rows)});
  });
  return router;
};
