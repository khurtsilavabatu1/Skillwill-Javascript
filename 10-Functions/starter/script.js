"use strict";
const reservations = [];
const createReservation = function (
  tourName,
  numGuests = 1,
  price = 50 * numGuests, // expression — იყენებს წინა პარამეტრს
) {
  const reservation = {
    tourName,
    numGuests,
    price,
  };
  console.log(reservation);
  reservations.push(reservation);
};

// გამოძახება სხვადასხვა არგუმენტებით
createReservation("თბილისი-ტური");
// { tourName: 'თბილისი-ტური', numGuests: 1, price: 50 }

createReservation("ბათუმი-ტური", 3, 200);
// { tourName: 'ბათუმი-ტური', numGuests: 3, price: 200 }

createReservation("მცხეთა-ტური", 4);
// { tourName: 'მცხეთა-ტური', numGuests: 4, price: 200 }  (50 * 4)

// პარამეტრის გამოტოვება undefined-ით
createReservation("კახეთი-ტური", null, 300);
// { tourName: 'კახეთი-ტური', numGuests: 1, price: 300 }
// numGuests ნაგულისხმევ 1-ს იღებს, price ხელით დავაყენეთ
