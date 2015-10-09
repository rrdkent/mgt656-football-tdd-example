describe("Ticket booth", function() {

  var ticketBooth;
  var anyNumber = jasmine.any(Number);

  beforeEach(function() {
    ticketBooth = createTicketBooth();
  });


  it("should have two sections of seats available", function() {
    var sectionsOfSeats = Object.keys(ticketBooth);
    expect(sectionsOfSeats).toEqual(['a', 'b']);
    expect(ticketBooth.a.available).toEqual(anyNumber);
    expect(ticketBooth.b.available).toEqual(anyNumber);
  });

  it("should have two sections of seats filled or fillable", function() {
    var sectionsOfSeats = Object.keys(ticketBooth);
    expect(sectionsOfSeats).toEqual(['a', 'b']);
    expect(ticketBooth.a.filled).toEqual(anyNumber);
    expect(ticketBooth.b.filled).toEqual(anyNumber);
  });

  it("should have 250 seats in A, 750 in B", function() {
    var limits = {a: 250, b: 750};
    for (var section in limits) {
      var totalSeatsInSection =
        ticketBooth[section].filled + ticketBooth[section].available;
      expect(totalSeatsInSection).toEqual(limits[section]);
    }
  });

  it("should have fewer seats available after selling one", function() {
    var orderResults = placeTicketOrder(1, 'a', 'yc', ticketBooth);
    expect(ticketBooth.a.filled).toEqual(1);
    expect(ticketBooth.a.available).toEqual(249);
  });


});

describe("Ticket orders", function() {

  var ticketBooth;
  var anyNumber = jasmine.any(Number);

  beforeEach(function() {
    ticketBooth = createTicketBooth();
  });

  it("should throw an error if the seat section is not a or b", function() {
    var callPlaceOrder = function(){
      return placeTicketOrder(1, 'c', 'yc', ticketBooth);
    }
    expect(callPlaceOrder).toThrowError('invalid seat section');
  });

  it("should be fulfilled if there is room", function() {
    var orderResults = placeTicketOrder(1, 'a', 'yc', ticketBooth);
    expect(orderResults.fulfilled).toBe(true);
  });

  it("should NOT be fulfilled if there is no room", function() {
    var orderResults = placeTicketOrder(100000, 'a', 'yc', ticketBooth);
    expect(orderResults.fulfilled).toBe(false);
  });

  it("should be have zero price when not fulfilled", function() {
    var orderResults = placeTicketOrder(100000, 'a', 'yc', ticketBooth);
    expect(orderResults.totalPrice).toBe(0);
  });

  it("should be $50 for A seats and $40 for B seats", function() {
    var orderResults = placeTicketOrder(1, 'a', null, ticketBooth);
    expect(orderResults.totalPrice).toBe(50);
    var orderResults = placeTicketOrder(1, 'b', null, ticketBooth);
    expect(orderResults.totalPrice).toBe(30);
  });

  it("should be half price for Yale College students", function() {
    var orderResults = placeTicketOrder(1, 'a', 'yc', ticketBooth);
    expect(orderResults.totalPrice).toBe(50/2);
    var orderResults = placeTicketOrder(1, 'b', 'yc', ticketBooth);
    expect(orderResults.totalPrice).toBe(30/2);
  });

});


describe("Ticket orders (depending on )", function() {

  var ticketBooth;
  var anyNumber = jasmine.any(Number);

  beforeEach(function() {
    ticketBooth = createTicketBooth();
  });


  it("should not let non-SOM students purchase reserved seats", function() {
    var orderResults = placeTicketOrder(700, 'b', null, ticketBooth);
    expect(orderResults.fulfilled).toBe(false);
  });

  it("should decrement seats available", function() {
    var orderResults = placeTicketOrder(1, 'a', 'yc', ticketBooth);
    expect(orderResults.totalPrice).toBe(50/2);
    var orderResults = placeTicketOrder(1, 'b', 'yc', ticketBooth);
    expect(orderResults.totalPrice).toBe(30/2);
  });

});
