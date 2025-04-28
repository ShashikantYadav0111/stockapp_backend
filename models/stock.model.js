import mongoose from "mongoose";

const stockSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    mcap: { type: Number, required: true },
    pe: { type: Number },
    pb: { type: Number },
    roce: { type: Number },
    roe: { type: Number },
    three_yr_rev_charge: { type: Number },
    three_yr_pat_charge: { type: Number },
    pbtbcfo: { type: Number },
    de: { type: Number },
    ds: { type: Number },
    sector: { type: String }
  }, {
    timestamps: true // (optional) adds createdAt, updatedAt fields
  });
  
  const Stock = mongoose.model("Stock", stockSchema);
  
  export default Stock;