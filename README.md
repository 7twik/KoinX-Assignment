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

<p><img align="center" src="https://asset.cloudinary.com/dcyfkgtgv/153f9042ffc774c2a579521dd657829f" alt="7twik" /></p>
<p><img align="center" src="https://asset.cloudinary.com/dcyfkgtgv/d7ee1c436bb093663132e5dbbf3e42f9" alt="7twik" /></p>
