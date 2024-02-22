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


SCREENSHOT OF WORKING DEMO:
<p><img align="center" src="https://res.cloudinary.com/dcyfkgtgv/image/upload/v1708633827/Screenshot_2024-02-23_015933_pdig2k.png" alt="7twik" /></p>
<p><img align="center" src="https://res.cloudinary.com/dcyfkgtgv/image/upload/v1708633827/Screenshot_2024-02-23_011100_h60zfi.png" alt="7twik" /></p>
