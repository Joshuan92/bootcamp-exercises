// const nidIsValid = (nid) => {
//   if (Number.isNaN(parseInt(nid, 10))) {
//     return 'Not a Number!';
//   }
//   if (parseInt(nid) % 11 === 0) {
//     const month = parseInt(nid.slice(2, 4), 10);
//     if ((month > 0 && month < 13) || (month > 50 && month < 63)) {
//       return true;
//     }
//     return false;
//   }
//   return false;
// };
// console.log(nidIsValid);

const nidIsValid = (nid) => {
  const intNID = parseInt(nid, 10);

  if (Number.isNaN(intNID)) {
    return false;
  }

  if (intNID % 11 !== 0) {
    return false;
  }

  const month = parseInt(nid[2] + nid[3]);


  if (month < 51) {
    if (month > 0 && month < 13) {
      return true;
    }

  }




};
