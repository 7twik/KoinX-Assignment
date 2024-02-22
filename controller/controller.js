const CryptoExchange=async(req,res)=>{
    try{
        const fromCurrency=req.query.fromCurrency;
        const toCurrency=req.query.toCurrency;
        const dateOfExchange=req.query.date;
        const dateString = "29-12-2023";
            const parts = dateString.split("-"); 
            const year = parseInt(parts[2]);
            const month = parseInt(parts[1]) - 1; 
            const day = parseInt(parts[0]);

            
            const dateObject = new Date(year, month, day);

            
            const unixTimestamp = dateObject.getTime() / 1000; 

            console.log(unixTimestamp); // Output the UNIX timestamp

        // console.log(fromCurrency);
        // console.log(toCurrency);
        // console.log(dateOfExchange);
        if(fromCurrency==null || toCurrency==null || dateOfExchange==null || fromCurrency=='' || toCurrency=='' || dateOfExchange=='')
        {
            res.status(500).json({message:"error"});
            return;
        }
        else{
            const fetchedData=await fetch("https://api.coingecko.com/api/v3/coins/"+fromCurrency+"/market_chart/range?vs_currency=usd&from="+unixTimestamp+"&to="+(unixTimestamp+2000)+"&precision=8"+"?&x_cg_demo_api_key=CG-8rk8Y7c9Jz2KV35QdTYdQqMZ");
            const newData1=await fetchedData.json();
            console.log("https://api.coingecko.com/api/v3/coins/"+fromCurrency+"market_chart/range?vs_currency=usd&from="+unixTimestamp+"&to="+(unixTimestamp+5000)+"&precision=8"+"?&x_cg_demo_api_key=CG-8rk8Y7c9Jz2KV35QdTYdQqMZ");
            
            //console.log("https://api.coingecko.com/api/v3/coins/"+fromCurrency+"/history?date="+dateOfExchange+"?&x_cg_demo_api_key=CG-8rk8Y7c9Jz2KV35QdTYdQqMZ")
            console.log(newData1);
            //console.log("https://api.coingecko.com/api/v3/coins/"+toCurrency+"/history?date="+dateOfExchange+"?&x_cg_demo_api_key=CG-8rk8Y7c9Jz2KV35QdTYdQqMZ")
            const fetchedData2=await fetch("https://api.coingecko.com/api/v3/coins/"+toCurrency+"/market_chart/range?vs_currency=usd&from="+unixTimestamp+"&to="+(unixTimestamp+5000)+"&precision=8"+"?&x_cg_demo_api_key=CG-8rk8Y7c9Jz2KV35QdTYdQqMZ");
            const newData2=await fetchedData2.json();
            console.log("https://api.coingecko.com/api/v3/coins/"+toCurrency+"market_chart/range?vs_currency=usd&from="+unixTimestamp+"&to="+(unixTimestamp+1000)+"&precision=8"+"?&x_cg_demo_api_key=CG-8rk8Y7c9Jz2KV35QdTYdQqMZ");
            console.log(newData2);
            if(newData1!=undefined && newData2!=undefined && newData1!=null && newData2!=null)
            {
                let price1=newData1.prices[0][1];
                let price2=newData2.prices[0][1];
                console.log(price1);
                console.log(price2);
                res.status(200).json({ message: 'Success', data: price1/price2});
                //res.send("success price of exchange is : "+price1/price2);
            }
            else{
                res.status(500).json({message:"error"});
            }
        }
    }
    catch(error)
    {
        console.log(error);
        res.status(500).json({message:"error"});
    }
}

const companyDetails=async(req,res)=>{
    try
    {
        const com=req.query.currency;

        if(com!='ethereum' && com!='bitcoin')
        {
            res.status(500).json({message:"error"});
            return;
        }
        else
        {
            const fetchedData=await fetch("https://api.coingecko.com/api/v3/companies/public_treasury/"+com+"?&x_cg_demo_api_key=CG-8rk8Y7c9Jz2KV35QdTYdQqMZ");
            const newData1=await fetchedData.json();
            //console.log(newData1);
            res.status(200).json({ message: 'Success', data: newData1.companies});
        }
    }
    catch(error)
    {
        res.status(500).json({message:"error"});
        console.log(error);
    }
}

module.exports={CryptoExchange, companyDetails};