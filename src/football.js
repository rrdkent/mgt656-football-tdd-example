

function createTicketBooth(){
  return {
    seatsAvailable: {a: 250, b: 900},
    reservedSeats: {
      som: {a: 0, b: 100}
    },
    seatsFilled: {a: 0, b: 0},
    
  }
}

function placeTicketOrder(numberOfTickets, section, studentAffiliation, ticketBooth) {
  var aFulfilled = 0;
  var bFulfilled = 0;
  var fulfilled = true;

  if (ticketOrder.tickets.a <= ticketBooth.seatsAvailable.a) {
    aFulfilled = ticketOrder.tickets.a;
    ticketBooth.seatsAvailable.a -= aFulfilled;
  }else{
    fulfilled = false;
  }

  return {
    seats: {a: 0, b: 0}
    fulfilled: true
  }
}
