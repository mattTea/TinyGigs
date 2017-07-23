var axios = require('axios');

var tinyVenues = 'KovZ9177Akf,KovZ9177ko0,KovZpZAt6F7A,KovZpZAtFJEA,Z698xZL4Za5-R,Z598xZL4ZkA67,KovZpZAnE1eA,,Z698xZL4Za1Dl,KovZ9177h10,KovZ9177Jc7,KovZ9177q6V,KovZ9177DOV,KovZ9177j3V,KovZpZAled6A,KovZ9177EP0,KovZ9177aoV,KovZ91777W7,KovZpZAn6vtA,KovZ9177pof,KovZ9177Ey7,KovZ917731V,KovZ917776f,KovZ91776r0,KovZpZAnIaFA,KovZ91778Q7,KovZpZAnkn1A,Z598xZL4Z67eF,KovZ9177yXV,KovZ91777W0,KovZpZAnaJaA';
// Options for test purposes - O2: KovZ9177PFf, Palladium: KovZ9177gtf

var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!
var yyyy = today.getFullYear();
if(dd < 10) {
    dd = '0' + dd
}
if(mm < 10) {
    mm = '0' + mm
}

var afterDate = yyyy + '-' + mm + '-' + (dd - 2) + 'T12:00:00Z'
var beforeDate = yyyy + '-' + mm + '-' + (dd + 2) + 'T12:00:00Z'

const TICKETMASTER_URL = 'https://app.ticketmaster.com/discovery/v2/events.json?apikey=IHG9ubdkcGYkGDyAaNAmnUe9X3709P3h&countryCode=GB&city=London&size=199&venueId=' + tinyVenues + '&startDateTime=' + afterDate + '&endDateTime=' + beforeDate;

module.exports = {
  getGigs: function (gigs) {
    var requestUrl = `${TICKETMASTER_URL}`;

    return axios.get(requestUrl).then(function (res) {
      console.log(res.data); // maybe just res
      return res.data; // maybe just res
    }, function (err) {
      alert('promise error', err);
    });
  }
}

/*
Venues:
KovZ9177Akf   Garage
KovZ9177ko0   Union Chapel
KovZpZAt6F7A  Birthdays
KovZpZAtFJEA  Dublin Castle
Z698xZL4Za5-R Lexington
Z598xZL4ZkA67 Good Ship
KovZpZAnE1eA  Shacklewell Arms
Z698xZL4Za1Dl Windmill
KovZ9177h10   Nambucca
KovZ9177Jc7   Notting Hill Arts Centre
KovZ9177q6V   Moth Club
KovZ9177DOV   Old Blue Last
KovZ9177j3V   Hoxton Square Bar & Kitchen
KovZpZAled6A  Underworld Camden
KovZ9177EP0   Proud Camden
KovZ9177aoV   Camden Assembly (Barfly)
KovZ91777W7   KOKO
KovZpZAn6vtA  Dingwalls
KovZ9177pof   Dirty South
KovZ9177Ey7   Amersham Arms
KovZ917731V   Bull & Gate
KovZ917776f   Borderline
KovZ91776r0   Scala
KovZpZAnIaFA  Old Queen's Head
KovZ91778Q7   XOYO
KovZpZAnkn1A  100 Club
Z598xZL4Z67eF Hope & Anchor
KovZ9177yXV   Cargo
KovZ91777W0   Servant Jazz Quarters
KovZpZAnaJaA  Jazz Cafe
*/
