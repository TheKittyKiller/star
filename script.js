const url = "https://kea21s-7c15.restdb.io/rest/products?max=13"


    const options = {
        Headers: {

            "x-apikey": "63336a8032330102d591d251",

        },

    };




fetch(url, options) 
.then((response)  => {
if (!response.ok) {
    throw Error(response.statusText);
}
return response.json();
})
.then((data)=> {

console.log(data);

})
.catch((e)=> {
console.error("error:", e.message);
});

