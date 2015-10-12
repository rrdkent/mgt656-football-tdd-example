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

  it("should have 500 seats in A, 500 in B", function() {
    // TODO enter your test code here.
  });

  it("should have fewer seats available after selling one", function() {
    var orderResults = placeTicketOrder(1, 'a', 'yc', ticketBooth);
    expect(ticketBooth.a.filled).toEqual(1);
    expect(ticketBooth.a.available).toEqual(499);
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
    };
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
});


describe("Ticket orders (depending on constraints)", function() {

  var ticketBooth;
  var anyNumber = jasmine.any(Number);

  beforeEach(function() {
    ticketBooth = createTicketBooth();
  });

  it("should cost $50 for seats in A, $30 for seats in B", function () {
    var sectionA = placeTicketOrder(1, 'a', null, ticketBooth);
    var sectionB = placeTicketOrder(1, 'b', null, ticketBooth);
    expect(sectionA.fulfilled).toBe(true);
    expect(sectionB.fulfilled).toBe(true);
    expect(sectionA.totalPrice).toBe(50);
    expect(sectionB.totalPrice).toBe(30);
  });

  it("should be half price for Yale College students", function() {
    // TODO enter your test code here
  });

// STRETCH Goals
  it("should have a block of 100 half-price reserved for SOM students", function() {
    // TODO (strech) enter your test code here
  });

  it("should properly handle purchases fullfilled partially from reserved seats", function() {
    // TODO (stretch) enter your test code here
  });

  it("should not let non-SOM students purchase reserved seats", function() {
    var orderResults = placeTicketOrder(500, 'b', null, ticketBooth);
    expect(orderResults.fulfilled).toBe(false);
  });
});
