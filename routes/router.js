const { CryptoExchange, companyDetails } = require("../controller/controller");
const router = require("express").Router();

router.get("/CeX", CryptoExchange); //route for crypto exchange

// NEED 
//      params:{
//          “fromCurrency”: “bitcoin”,
//          “toCurrency”: “basic-attention-token”,
//          “date”: “12-01-2023”
//      }

router.get("/companyDetails",companyDetails); //route for company details
// NEED 
//      params:{
//          currency: "bitcoin" // Possible values are only bitcoin or ethereum.
//      }

module.exports = router;