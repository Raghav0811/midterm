
const express = require('express');
const router  = express.Router();

module.exports = (db, io) => {
  // io.connection()
  router.get("/", (req, res) => {
    db.query(`
      SELECT *
      FROM messages
      WHERE seller_id = ${req.query.user_id}
      OR buyer_id = ${req.query.user_id};
    `)
    .then(data => {
      res.json(data.rows)
    })
  })

  router.get("/message/:id", (req, res) => {
    db.query(`
    SELECT *
    FROM messages
    WHERE messages.id = ${req.params.id}`)
    .then(data => res.json(data.rows))
  })

  router.get("/sell", (req, res) => {
    db.query(`
    SELECT messages.id, messages.content, messages.buyer_id, users.name as user_name, users.profile_photo, products.name as product_name, products.main_photo, products.price
    FROM messages
    JOIN users ON users.id = buyer_id
    JOIN products ON products.id = product_id
    WHERE messages.id = ${req.query.message_id}
    `)
    .then(data => res.json(data.rows))
  })

  router.get("/buy", (req, res) => {
    db.query(`
    SELECT messages.id, messages.content, messages.seller_id, users.name as user_name, users.profile_photo, products.name as product_name, products.main_photo, products.price
    FROM messages
    JOIN users ON users.id = seller_id
    JOIN products ON products.id = product_id
    WHERE messages.id = ${req.query.message_id}
    `)
    .then(data => res.json(data.rows))
  })

  router.post("/", (req, res) => {
    console.log(req.body)
    let {product_id, text, seller_id, buyer_id, timestamp} = req.body;
    const queryString = `
    INSERT INTO messages (product_id, buyer_id, seller_id, content, timestamp)
    VALUES ($1, $2, $3, $4, $5)`;
    const queryParams = [product_id, buyer_id, seller_id, text,timestamp];
    db.query(queryString, queryParams)
    .then(() => {
      res.status(201).send();
    })
  })
  return router;
};
