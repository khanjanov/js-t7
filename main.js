//! Arrayda text icindeki sozlerin ilk herfini boyuk cixartsin
// let a = prompt("enter text").split(" ");
// function capitalizeWords() {
//   for (var i = 0; i < a.length; i++) {
//     a[i] = a[i].charAt(0).toUpperCase() + a[i].slice(1);
//   }
//   console.log(a.join(" "));
// }
// capitalizeWords();

//! Arrayda stringlerin ilk stiringi boyuke cevir
// let a = prompt("enter words with spaces").split(" ");
// function firstToUpperCase() {
//   let b = a.shift().toUpperCase();
//   a.unshift(b);
//   console.log(a);
// }
// firstToUpperCase();

//! Arrayda stringlerin son herfini boyuke cevirin
// let a = prompt("enter words with space").split(" ");
// let capitalizeWords = () => {
//   for (var i = 0; i < a.length; i++) {
//     a[i] = a[i].slice(a[i][0],[a[i].length - 1]) + a[i][a[i].length - 1].toUpperCase();
//   }
//   console.log(a);
// };
// capitalizeWords();

//! Arrayde ededleri tersine cevirmek
// let a = prompt("enter numbers with spaces").split(" ");
// function reverseNum() {
//   for (let i = 0; i < a.length; i++) {
//     let b = a.shift().split("").reverse().join("");
//     a.push(b);
//   }
//   console.log(a);
// }
// reverseNum();

//! Qarışıq array verilib, yalnızca ədədləri çap etdirin.
// let a = [1, "fghj", 56, "ytgu5"];
// function onlyNums() {
//   for (let i = 0; i < a.length; i++) {
//     if (typeof a[i] === "number") {
//       console.log(a[i]);
//     }
//   }
// }
// onlyNums();

//! Qarışıq array verilib, yalnızca stringləri çap etdirin.
// let a = [1, "fghj", 56, "ytgu5"];
// function onlyStrings() {
//   for (let i = 0; i < a.length; i++) {
//     if (typeof a[i] === "string") {
//       console.log(a[i]);
//     }
//   }
// }
// onlyStrings();

//! Arrayda metodlar (en azi 3 method ile edilsin) ile ededleri 5 vahid artirmaq
//* method 1
//let a = prompt("enter numbers with spaces").split(" ");
// function addFive() {
//   for (let i = 0; i < a.length; i++) {
//     a[i] = +a[i] + 5;
//   }
//   console.log(`${a}`);
// }
// addFive();

//* method2
// let a = prompt("enter numbers with spaces").split(" ");
// a.forEach((item) => console.log(+item + 5));

//! Array icerisindeki ən böyük ən kiçik ədədin tapılması
// let a = prompt("enter numbers with spaces").split(" ").sort(function(a,b) {return (a-b)});
// console.log(`smalest of array is ${a[0]} and biggest of array is ${a.at(-1)}`);

//! Arrayde 6 olanlari “-” ile evez edin
// let a = prompt("enter numbers with spaces").split(" ");
// function replaceSix() {
//   for (let i = 0; i < a.length; i++) {
//     if (a[i] == 6) {
//       a[i] = "-";
//     }
//   }
//   console.log(`${a}`);
// }
// replaceSix();

//! Arrayda her iki ededden bir iki eded arasinda reqemlerin cemi
let a = [6, 9, 17, 20, 16, 19];
function sumBetweenTwoNum() {
  let sum;
  for (let i = 0; i <= a[i]; ) {
    for (let k = a[i]; k < a[i + 1]; ) {
      sum = ((a[i + 1] + a[i]) * (a[i + 1] - a[i] - 1)) / 2;
      k++;
    }
    i += 2;
    console.log(sum);
  }
}
sumBetweenTwoNum();
