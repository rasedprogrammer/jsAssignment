// Githup Link: https://github.com/rasedprogrammer/jsAssignment


// Assignment Name Is-kilometerToMeter

function kilometerToMeter(kilometer) {

    var meter = 0;

    if (kilometer <= 0) {
        return "Distance cannot be nagative."
    }
    else {
        meter = kilometer * 1000;
    }

    return meter;
}

// Assignment Name Is-budgetCalculator

function budgetCalculator(watch, mobile, laptop) {
    totalPrice = 0;
    if (watch <= 0 || mobile < 0 || laptop < 0) {
        return "Input your budget number."
    }
    else {
        var watchPrice = watch * 50;
        var mobilePrice = mobile * 100;
        var laptopPrice = laptop * 500;
        totalPrice = watchPrice + mobilePrice + laptopPrice;
    }

    return totalPrice;

}

// Assignment Name Is-hotelCost

function hotelCost(stayDay) {
    var stayPrice = 0;
    if (stayDay <= 10) {
        stayPrice = stayDay * 100;
    }

    else if (stayDay <= 20) {
        var firstPart = 10 * 100;
        var remaining = stayDay - 10;
        var secondPart = remaining * 80;
        stayPrice = firstPart + secondPart;
    }

    else {
        var firstPart = 10 * 100;
        var secondPart = 10 * 80;
        var remaining = stayDay - 20;
        var thirdPart = remaining * 50;
        var stayPrice = firstPart + secondPart + thirdPart;
    }

    return stayPrice;
}


// Assignment Name Is-megaFriends

function megaFriend(friendsName) {
    var lergerNames = friendsName[0];
    if (friendsName.length == 0) {
        return "Undefined value."
    }
    else {
        for (var i = 0; i < friendsName.length; i++) {
            var element = friendsName[i];
            if (element.length > lergerNames.length) {
                lergerNames = element;
            }
        }
    }
    return lergerNames;
}