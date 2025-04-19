import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
     userId:{
        type: mongoose.Schema.ObjectId,
        ref:'User'
     },
     orderId:{
        type: String,
        required: [true,"provided orderId"],
        unique: true
     },
     productId :{
        type : mongoose.Schema.orderId,
        default:"product"
     },
     product_details:{
        name:String,
        image: Array,
     },
     paymentId:{
        type:String,
        default:""
     },
     payment_status:{
         type:String,
        default:""
     },
     delivery_address:{
         type:mongoose.Schema.orderId,
       ref:'address'
    },
  subTotalAmt :{
    type:Number,
    default: 0
  },
  totalAmt :{
    type:Number,
    default: 0
  },

  invoice_receipt:{
    type:String,
    default:""
 },
},{
    timestamps:true
})

const OrderModel = mongoose.model('order',orderSchema)

export default OrderModel