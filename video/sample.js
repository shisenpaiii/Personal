function cheesecake (totalcost, percentage){
    let n = percentage / 100
    var y = totalcost * (1+n);
    return y;
    }
    var cake100 = cheesecake (100,20);
    console.log("your total amount: " + cake100);
    
    function markUp5Percentage (cost) {
        var x = cheesecake (cost, 5);
        return x;
    }
    console.log("your mark up: " + markUp5Percentage (50));
    