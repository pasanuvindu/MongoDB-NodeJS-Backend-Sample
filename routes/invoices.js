const express = require("express");
const router = express.Router();
const Invoice = require("../models/invoice");

// Get All Invoices
router.get("/", async (req, res) => {
  try {
    const invoices = await Invoice.find();
    res.json(invoices);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get One Invoice
router.get("/:id", getInvoice, (req, res) => {
  res.json(res.invoice);
});

// Create One Invoice
router.post("/", async (req, res) => {
  const invoice = new Invoice(req.body);
  try {
    const newInvoice = await invoice.save();
    res.status(201).json(newInvoice);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update One Invoice
router.patch("/:id", getInvoice, async (req, res) => {
  try {
    Object.assign(res.invoice, req.body);
    const updatedInvoice = await res.invoice.save();
    res.json(updatedInvoice);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete One Invoice
router.delete("/:id", getInvoice, async (req, res) => {
  try {
    await res.invoice.remove();
    res.json({ message: "Deleted Invoice" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

async function getInvoice(req, res, next) {
  try {
    const invoice = await Invoice.findById(req.params.id);
    if (invoice == null) {
      return res.status(404).json({ message: "Cannot find invoice" });
    }
    res.invoice = invoice;
    next();
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
}

module.exports = router;
