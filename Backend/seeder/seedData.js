import menuModel from "../models/menuModel.js"
import mongoose  from "mongoose"
const menu = [   
    new menuModel({
        name : "Hotcakes",
        prices : 4.49 ,
        category : "Breakfast",
        image : "https://th.bing.com/th/id/OIP.ql0T-pGz9wNc2htSbeuZXAHaE8?w=274&h=183&c=7&r=0&o=5&pid=1.7",
        description : "590 cal"
    },
    {
        name : "Sausage Egg and Cheese",
        prices : 5.49 ,
        category : "Breakfast",
        image : "https://th.bing.com/th/id/OIP.7dfGvrybeF_jgEC27zb_CwHaEo?w=305&h=190&c=7&r=0&o=5&pid=1.7",
        description : "700-850 cal"
    },
    {
        name : "Iced Caramel Coffee",
        prices : 2.59 ,
        category : "Drink",
        image : "https://th.bing.com/th/id/OIP.A0AcFe1_jjXMpXwD4ZLfOAHaLH?w=204&h=306&c=7&r=0&o=5&pid=1.7",
        description : "140-270 cal"
    },
    {
        name :"Oatmeal",
        prices : 2.49 ,
        category : "Breakfast",
        image : "https://th.bing.com/th/id/OIP.S5hxBF-pVek8kBK35QjtIgHaHA?w=204&h=194&c=7&r=0&o=5&pid=1.7",
        description : "320 cal"
    },
    {
        name : "Scrambled Eggs",
        prices : 1.99 ,
        category : "Breakfast",
        image : "https://th.bing.com/th/id/OIP.1QGtnT8opEwcr-ouJ4crOgHaE8?w=280&h=187&c=7&r=0&o=5&pid=1.7",
        description : "140 cal"
    },
    {
        name : "Tuna Salad Sandwich",
        prices : 9.69 ,
        category : "meal",
        image : "https://th.bing.com/th/id/OIP.6qOma9B5GN1o_XJQIvjEiAHaHa?w=204&h=204&c=7&r=0&o=5&pid=1.7",
        description : "740 cal"
    },

    {
        name : "Deli Turkey Sandwich",
        prices : 9.49 ,
        category : "meal",
        image : "https://th.bing.com/th/id/OIP.QJ8ZNmLkDJfO603qKEKeZQHaHa?w=213&h=204&c=7&r=0&o=5&pid=1.7",
        description : "600 cal"
    },
    {
        name : "Family Feast with soup",
        prices : 34.49 ,
        category : "Family meal",
        image : "https://th.bing.com/th/id/OIP.V55QZ56PRVz0yzvUpbxR2wHaEK?w=302&h=180&c=7&r=0&o=5&pid=1.7",
        description : "1000- 1500 cal"
    },

    {
        name : "Premium Family Feast",
        prices : 44.99 ,
        category : "Premium meal",
        image : "https://th.bing.com/th/id/OIP.hFMwneVct--qKOshot7ycQHaFj?w=225&h=180&c=7&r=0&o=5&pid=1.7",
        description : "1500 -2000 cal"
    },
    {
        name : "Chef's Special",
        prices : 39.49 ,
        category : "Premium meal",
        image : "https://th.bing.com/th/id/OIP.1E6uk_MybbaLCucqElqtQQHaDt?w=328&h=174&c=7&r=0&o=5&pid=1.7",
        description : "1200 cal"
    },
    {
        name : "Iced Tea",
        prices : 3.09 ,
        category : "Drink",
        image : "https://th.bing.com/th/id/OIP.fYSk7-EhPfX7X0DhaNQUuAHaHa?w=184&h=184&c=7&r=0&o=5&pid=1.7",
        description : "10 cal per 20 ft oz"
    },
    {
        name : "Green Passion Smoothie",
        prices : 6.19 ,
        category : "Drink",
        image : "https://th.bing.com/th/id/OIP.EvomBSkvP6mcRyv_JGIRuAHaE9?w=261&h=180&c=7&r=0&o=5&pid=1.7",
        description : "260 cal"
    },
     ),]
  
  menu.map(async (item, index) => {
    await item.save((err, result) => {
      if (index === menu.length - 1) {
        console.log("DONE!");
        mongoose.disconnect();
      }
    });
  });