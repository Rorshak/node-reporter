const { createInvoice } = require("./createInvoice.js");

const invoice = {
  shipping: {
    name: "Jose Maria",
    address: "Jacaranda 23",
    city: "San Miguel ",
    state: "GTO",
    country: "Mexico",
    postal_code: 37745
  },
  items: [
    {
      item: "Wizard",
      description: "Martin Garrix, Jay Hardway",
      quantity: 2,
      amount: 6000
    },
    {
      item: "Gold Skies",
      description: "Martin Garrix, DVBBS, Sander van Doorn",
      quantity: 1,
      amount: 2000
    },
    {
      item: "No Heroes",
      description: "KSHMR, Firebeatz",
      quantity: 1,
      amount: 2000
    },
    {
      item: "Helicopter",
      description: "Martin Garrix, Firebeatz",
      quantity: 1,
      amount: 2000
    }
  ],
  subtotal: 8000,
  paid: 0,
  invoice_nr: 1234
};

createInvoice(invoice, "invoice.pdf");
