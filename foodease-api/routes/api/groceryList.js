const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator/check');
const Item = require('../../models/groceryList');

// @route   POST api/groceryList
// @desc    Put in items into grocery list
// @access  Private

router.post('/',
[
  check('item', 'Must have an item!')
    .not()
    .isEmpty(),
  check('quantity', 'Must have quantity of item!')
    .not()
    .isEmpty(),
],
async (req, res) => {
  // check if errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  let { itemType, item, quantity, price } = req.body
  try {
    let items = await Item.findOne({ item })
    // check if item is already inputted
    if (items) {
      res.status(400).json({ errors: [{ msg: "Food item already exists!" }]})
    } else {
    // else if item is not inputted, make new item
    item = new Item({
      item,
      itemType,
      quantity,
      price,
    });
    await item.save();
    res.send('New saved!');
   }
  // catch error!
  } catch(err) {
    console.error(err.message);
    res.status(500).send('Server error')
  }
})

// @route   PUT api/groceryList/getOne
// @desc    Update quantity of items
// @access  Public
router.put('/', async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  let { itemType, item, quantity, price } = req.body;
  try {
    let items = await Item.findOne({ item })
    // check if the item is there, and if so, add quantity
    if (items) {
      // build new item object for use of updating
      const newItem = {}
      if (itemType) newItem.itemType = itemType
      if (quantity) newItem.quantity = quantity + items.quantity
      if (price) newItem.price = price
      items = await Item.findOneAndUpdate(
        { item: req.body.item },
        { $set: newItem },
        { new: true }
      );
      return res.json(items)
      res.send('Item updated!');
    } else {
    // else if item is not inputted, send an error!
    res.status(400).json({ errors: [{ msg: "Item does not exist!" }]})
   }
  // catch error!
  } catch(err) {
    console.error(err.message);
    res.status(500).send('Server error')
  }
})

// @route   GET api/groceryList/getOne
// @desc    Get information about one item
// @access  Public
router.get('/getOne', async (req, res) => {
  try {
    // Find the item and response with it!
    let item = await Item.findOne({ item: req.body.item })
    if(!item) {
      res.status(400).json({ msg: 'This item does not exist!' });
    }
    res.json(item)
    // Catch errors
  } catch(err) {
    console.error(err.message);
    res.status(500).send('Server error')
  }
})

// @route   GET api/groceryList/getAll
// @desc    Get all information in grocery list
// @access  Public
router.get('/getAll', async (req, res) => {
  try {
    // Find the item and response with it!
    const items = await Item.find()
    res.json(items)
    // Catch errors
  } catch(err) {
    console.error(err.message);
    res.status(500).send('Server error')
  }
})

module.exports = router;
