const madeSale = (total) => {
    return (amount) =>{
        total += amount
        console.log(total);
    }
}

let mySale = madeSale(0)
mySale(10)
mySale(20)
mySale(10)
