Documentation:
--------------

    Cron job: 
        Hourly update of cryptocurrency collection

    GET METHOD:


        1.  Route       =>  /exchange/companyDetails

            Purpose     =>  to get the list of companies that hold a particular cryptocurrency.
            
            Dependancy=>

            params:{
                currency: "bitcoin"          
            }

            Note:Possible values are only bitcoin or ethereum.

        2.  Route       =>  /exchange/cex

            Purpose     =>  for providing us the exchange rate of 2 coins
            
            Dependancy  =>

                params:{
                    “fromCurrency”: “bitcoin”,
                    “toCurrency”: “basic-attention-token”,
                    “date”: “12-01-2023”
                }   




ENV VARIABLES NEEDED ARE:
DB_USERNAME=
DB_PASSWORD=