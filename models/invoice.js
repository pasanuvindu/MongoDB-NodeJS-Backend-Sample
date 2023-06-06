const mongoose = require("mongoose");

const noOfRoomsSchema = new mongoose.Schema({
  SGL: {
    type: Boolean,
    required: true,
    default: false,
  },
  DBL: {
    type: Boolean,
    required: true,
    default: false,
  },
  TPL: {
    type: Boolean,
    required: true,
    default: false,
  },
  CHLD: {
    type: Boolean,
    required: true,
    default: false,
  },
});

const ratePerRoomsSchema = new mongoose.Schema({
  SGL: {
    type: Number,
    required: true,
  },
  DBL: {
    type: Number,
    required: true,
  },
  TPL: {
    type: Number,
    required: true,
  },
  CHLD: {
    type: Number,
    required: true,
  },
});

const hotelAccommodationSchema = new mongoose.Schema({
  hotel: {
    type: String,
    required: true,
  },
  checkInDate: {
    type: Date,
    required: true,
  },
  checkOutDate: {
    type: Date,
    required: true,
  },
  mealPlan: {
    type: String,
    required: false,
  },
  noOfRooms: [noOfRoomsSchema],
  ratePerRooms: [ratePerRoomsSchema],
  total: {
    type: Number,
    required: true,
  },
});

const noOfPaxSchema = new mongoose.Schema({
  accSgl: {
    type: Number,
    required: true,
  },
  accDbl: {
    type: Number,
    required: true,
  },
  accTrip: {
    type: Number,
    required: true,
  },
  CHLD: {
    type: Number,
    required: true,
  },
});

const ratePerPersonSharingSchema = new mongoose.Schema({
  single: {
    type: Number,
    required: true,
  },
  double: {
    type: Number,
    required: true,
  },
  triple: {
    type: Number,
    required: true,
  },
  CHLD: {
    type: Number,
    required: true,
  },
});

const roundTourSchema = new mongoose.Schema({
  from: {
    type: String,
    required: true,
  },
  to: {
    type: String,
    required: true,
  },
  noOfPax: [noOfPaxSchema],
  ratePerPersonSharing: [ratePerPersonSharingSchema],
  total: {
    type: Number,
    required: true,
  },
});

const groupTransferPerPersonSchema = new mongoose.Schema({
  typeOfTransfer: {
    type: String,
    required: true,
  },
  Itinerary: {
    type: String,
    required: true,
  },
  arrivalTransferRate: {
    type: Number,
    required: true,
  },
  arrivalNoOfPax: {
    type: Number,
    required: true,
  },
  departureTransferRate: {
    type: Number,
    required: true,
  },
  departureNoOfPax: {
    type: Number,
    required: true,
  },
  total: {
    type: Number,
    required: true,
  },
});

const individualTransferPerPersonSchema = new mongoose.Schema({
  typeOfTransfer: {
    type: String,
    required: true,
  },
  Itinerary: {
    type: String,
    required: true,
  },
  arrivalTransferRate: {
    type: Number,
    required: true,
  },
  arrivalNoOfPax: {
    type: Number,
    required: true,
  },
  departureTransferRate: {
    type: Number,
    required: true,
  },
  departureNoOfPax: {
    type: Number,
    required: true,
  },
  total: {
    type: Number,
    required: true,
  },
});

const transportSchema = new mongoose.Schema({
  groupTransferPerPerson: [groupTransferPerPersonSchema],
  individualTransferPerPerson: [individualTransferPerPersonSchema],
});

const extrasSupplementsSchema = new mongoose.Schema({
  detail: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  total: {
    type: Number,
    required: true,
  },
});

const invoiceSchema = new mongoose.Schema({
  invoiceNumber: {
    type: String,
    required: true,
  },
  clientName: {
    type: String,
    required: true,
  },
  agent: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: false,
  },
  tourNumber: {
    type: String,
    required: true,
  },
  reservationNumber: {
    type: String,
    required: false,
  },
  date: {
    type: Date,
    required: true,
    default: Date.now,
  },
  hotelAccommodation: [hotelAccommodationSchema],
  roundTour: [roundTourSchema],
  transport: [transportSchema],
  extrasSupplements: [extrasSupplementsSchema],
  grandTotal: {
    type: Number,
    required: true,
  },
  dueDate: {
    type: Date,
    required: true,
  },
  paid: {
    type: Boolean,
    required: true,
    default: false,
  },
});

module.exports = mongoose.model("Invoice", invoiceSchema);
