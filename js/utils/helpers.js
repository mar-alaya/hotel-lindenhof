export function calcNights(checkout, checkin) {
  let stay_miliseconds = checkout - checkin;
  let stay_nights = Math.round(stay_miliseconds / (1000 * 60 * 60 * 24));
  return Number(stay_nights);
}
