const express = require('express');
const app = express();
const port = 8080;
const Crypto=require("./model/cryptoSchema");
require("./db/conn");
const cors = require("cors");
const cron = require('node-cron');
const fs = require('fs');

app.use(express.json());
app.use(cors());

async function update() 
{
    const fetchedData=await fetch("https://api.coingecko.com/api/v3/coins/list?&x_cg_demo_api_key=CG-8rk8Y7c9Jz2KV35QdTYdQqMZ");
    const newData=await fetchedData.json();
    // console.log(newData);
             
    const existingData = await Crypto.find({});  
    await Crypto.deleteMany({ id: { $nin: newData.map(item => item.id) } });
    let count=0;
    for (const item of newData) 
    {
        if (!existingData.some(existingItem => existingItem.id === item.id)) 
        {
            // console.log(item);
            if(item.symbol!=null && item.name!=null && item.id!=null&& item.symbol!='' && item.name!='' && item.id!='')
            {
                const upd=await Crypto.create(item);
                // console.log(upd);
                count++;
                // console.log(count);
            }
        }
    }
        
    // console.log('Collection updated successfully.');
}

// app.get('/', async(req, res) => 
// {   
//     await update();        
//     res.send("Hourly Update Done Successfully!");
// });


cron.schedule('0 * * * *', () => //cron job to update the collection every hour
{
    update();
});

app.use("/exchange",require("./routes/router"));
//        /exchange/CeX             ->      route for crypto exchange
//        /exchange/companyDetails  ->      route for company details

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
