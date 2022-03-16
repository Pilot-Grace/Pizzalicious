
var varietyItem, sizePrice , crustPrice, toppingsPrice, total = 0;

//constructor
function Pizza(variety,size,crust,toppings,total){
    this.variety = variety;
    this.size = size;
    this.crust = crust;
    this.toppings = toppings;
    this.total = total;
}

$(document).ready(function(){
    
    $('#order_button').click(function(){
        getCheckedBoxes();
    })

    var getCheckedBoxes = function(){
        const items = [];
        const prices = {small: 650,  medium: 850, large: 1350, stuffed: 100, cheese: 150, cracker: 50, pepperoni: 200, bacon: 250, sausage: 100}
        var result =   $('input[ type="checkbox"]:checked');
        if(result.length >0){
            result.each(function(){
               result = $(this).val();
               items.push(result);
            })
            for (let elem of items){
                if (elem == "small"){
                    sizePrice = prices.small;
                 console.log("small --> " + sizePrice)
                }else if (elem == "medium"){
                    sizePrice = prices.medium;
                    console.log("medium --> " + sizePrice)
                }else if (elem == "large"){
                    sizePrice = prices.large;
                    console.log("medium --> " + sizePrice)
                }else if (elem == "stuffed"){
                    crustPrice = prices.stuffed;
                    console.log("stuffed --> " + crustPrice)
                }else if (elem == "cheese"){
                    crustPrice= prices.cheese;
                    console.log("cheese --> " + crustPrice)
                }else if (elem == "cracker"){
                    crustPrice = prices.cracker;
                    console.log("cracker --> " + crustPrice)
                }else if (elem == "pepperoni"){
                    toppingsPrice = prices.pepperoni;
                    console.log("pepperoni --> " + toppingsPrice)
                }else if (elem == "bacon"){
                    toppingsPrice = prices.bacon;
                    console.log("bacon --> " + toppingsPrice)
                }else if (elem == "sausage"){
                    toppingsPrice = prices.sausage;
                    console.log("sausage --> " + toppingsPrice)
                }
                
            }
        } else {
            alert("Please make an order first");
        }
       varietyItem = items[0];
       size = items[1];
       crust= items[2];
       toppings = items[3];

       total = sizePrice + crustPrice + toppingsPrice;
       let checkoutTotal = 0;
       checkoutTotal = checkoutTotal + total;

    //    console.log(total)
        var order = new Pizza(varietyItem,size,crust,toppings,checkoutTotal);
    //    console.log(sizePrice)
       $("#orders-made").append('<tr><td id="pizza_type">'+order.variety +'</td><td id="pizza_size">' + order.size + '</td><td id="pizza_crust">'+order.crust + '</td><td id="pizza_toppings">'+order.toppings+'</td><td id="total">'+order.total+'</td></tr>');
       console.log(order);

       $('button.checkout').click(function(){
        $("button.addPizza").hide();
        $("button.checkout").hide();
        $("button.delivery").hide();
        $('#delivery').hide();
        $("#pizza_total").append("Your bill is Ksh. "+(checkoutTotal+=total));
    })

    $('button.place-order').click(function(){
        $('#delivery-info').fadeOut(600);
        $('#delivery').hide();
        $('#pizza_total').append("Your bill is Ksh" +(checkoutTotal + 200));
    })

    }
    // console.log(varietyItem);
    $('button.addPizza').click(function(){
        getCheckedBoxes();
    })

   $('button.delivery').click(function(){
       $('button.checkout').fadeOut();
       $('button.addPizza').fadeOut();
       $('button.delivery').fadeOut();

       $('#delivery-info').slideDown(600);
   })

    $('button.order_button').click(function(){
        $('.order-content').fadeIn();
    })
   
})
