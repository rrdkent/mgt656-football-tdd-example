


function createTicketBooth(){
  return {
    a: {
      available: 250,
      filled: 0,
      reserved: {
        som: 0
      }
    },
    b: {
      available: 750,
      filled: 0,
      reserved: {
        som: 100
      }
    }
  }
}

var seatPrices = {
  a: 50,
  b: 30
};

function placeTicketOrder(numberOfTickets, seatSection, studentAffiliation, ticketBooth) {
  var fulfilled = false;
  var totalPrice = 0;

  if (seatSection !== 'a' && seatSection !== 'b') {
    throw new Error('invalid seat section');
  }

  // Are enough seats available?
  if (numberOfTickets < ticketBooth[seatSection].available) {

    // If so, decrement the number of tickets available, we just sold 'em!
    ticketBooth[seatSection].available -= numberOfTickets;
    ticketBooth[seatSection].filled += numberOfTickets;
    totalPrice = numberOfTickets * seatPrices[seatSection];

    // Apply a 50% discount for Yale College students
    if (studentAffiliation === 'yc') {
      totalPrice *= 0.5;
    }
    fulfilled = true;

  }

  return {
    fulfilled: fulfilled,
    totalPrice: totalPrice
  }
}
