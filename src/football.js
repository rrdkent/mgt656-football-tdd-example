


function createTicketBooth(){
  return {
    a: {
      available: 500,
      filled: 0,
      reserved: {
        som: 0
      }
    },
    b: {
      available: 500,
      filled: 0,
      reserved: {
        som: 100
      },
    },
  };
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

  var available = ticketBooth[seatSection].available;
  if (ticketBooth[seatSection].reserved) {
    available = ticketBooth[seatSection].available;
    for (var reservation in ticketBooth[seatSection].reserved) {
      if (reservation !== studentAffiliation) {
        available -= ticketBooth[seatSection].reserved[reservation];
      }
    }
  }

  // Are enough seats available?
  if (numberOfTickets <= available) {

    // Are they from a reservation?
    if (ticketBooth[seatSection].reserved &&
        ticketBooth[seatSection].reserved[studentAffiliation] > 0) {
      // Fullfill from reservation
      var remaining = ticketBooth[seatSection].reserved[studentAffiliation];
      remaining -= numberOfTickets;
      if (remaining <= 0) {
        totalPrice = (numberOfTickets + remaining) * seatPrices[seatSection] * 0.5;
        numberOfTickets = remaining * -1;
        remaining = 0;
      } else {
        numberOfTickets = 0;
        // Reserved tickets are half off
        totalPrice = numberOfTickets * seatPrices[seatSection] * 0.5;
      }
      ticketBooth[seatSection].reserved[studentAffiliation] = remaining;
    }

    // If so, decrement the number of tickets available, we just sold 'em!
    ticketBooth[seatSection].available -= numberOfTickets;
    ticketBooth[seatSection].filled += numberOfTickets;
    totalPrice += numberOfTickets * seatPrices[seatSection];

    // Apply a 50% discount for Yale College students
    if (studentAffiliation === 'yc') {
      totalPrice *= 0.5;
    }
    fulfilled = true;

  }

  return {
    fulfilled: fulfilled,
    totalPrice: totalPrice
  };
}
