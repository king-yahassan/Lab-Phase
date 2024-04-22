const mongoose = require("mongoose")

const orderSchema = new mongoose.Schema(
    {
        orderName : {
            type : String,
            require : true
        },
        orderType : {
            type : String,
            require : true
        },
        orderRef : {
            type : Number,  
            // require : true,
        },
        productName : {
            type : String,
            require : true
        },
        productType : {
            type : String,
            require : true
        },
        productPrice : {
            type : Number,  
            // require : true,
        },
        userName : {
            type : String,
            require : true
        },


    },
    {timestamps:true}
)

module.exports = mongoose.model("Order" , orderSchema)