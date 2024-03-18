"use Strict"
const Bookinginfo =[]
const booking = function(PlaneNumber="G20",passenders=1,price=1000*passenders){
    // before ES6
    // PlaneNumber = PlaneNumber || "55645EFS";
    // passenders = passenders || 1
    // price = price || "1000$"
    const BookingDetail = {
        PlaneNumber,
        passenders,
        price,
    }
    Bookinginfo.push(BookingDetail)
    console.log(BookingDetail)
}
booking("3321F", 2)
booking("332RF",undefined ,999)
