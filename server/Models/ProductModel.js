const mongoose = require("mongoose")

const productSchema = new mongoose.Schema(
    {
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

    },
    {timestamps:true}
)

module.exports = mongoose.model("Product" , productSchema)