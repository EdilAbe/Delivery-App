import express from "express"
import Menu from '../models/menuModel.js'

const router = express.Router();
router.get("/getAll", async(req, res) => {
  
    try {
        const listOfMenu = await Menu.find({})
        res.send(listOfMenu)
    } catch (error) {
        return res.status(400).json({ message: error });
    }

});

router.post("/addNewItem", async(req, res) => {

    const  order   = req.body
//log data
console.log("add order body ", order)
   try {
    const newItem = new Menu({
        name : order.name,
        image :order.image,
        description : order.description,
        category : order.category,
        prices : [order.prices]
    })
    await newItem.save()
    res.send('New order Added Successfully')
   } catch (error) {
       return res.status(400).json({ message: error });
   }
  
});

router.get("/getOrderById/:id", async(req, res) => {

 const orderId = req.params.id
console.log("order ID", orderId)
 try {
     const order = await Menu.findOne({_id : orderId})
     res.send(order)
 } catch (error) {
     return res.status(400).json({ message: error });
 }
  
});

router.patch("/editOrder", async(req, res) => {

    const editedOrder = req.body

    try {
        const order = await Menu.findOne({_id : editedOrder._id})
        
        order.name= editedOrder.name,
        order.description= editedOrder.description,
        order.image= editedOrder.image,
        order.category=editedOrder.category,
        order.prices = editedOrder.prices

        await order.save()
        console.log("edited order: ", order)
        res.send('Order Details Edited successfully')

    } catch (error) {
        return res.status(400).json({ message: error });
    }
  
});

router.delete("/delete/:id", async(req, res) => {

    const orderId = req.params.id

  try {
    await Menu.findOneAndDelete({_id : orderId})
    res.send('Order Deleted successfully')
  } catch (error) {
      return res.status(400).json({ message: error });
  }
  
});




export default router;