import mongoose from "mongoose";

const menuSchema = mongoose.Schema({

    name : {type: String ,required: true},
    prices : [] ,
    category : {type: String , required: true},
    image : {type: String ,required: true},
    description : {type: String , required: true}

} , {
    timestamps:true,
})

const Menu = mongoose.model('Menu' , menuSchema)

export default Menu