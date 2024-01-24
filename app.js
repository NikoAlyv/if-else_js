//TODO : Task

//!
/*Part1:  const olan students adında bir obyekt yarat və özündə string dəyəri
olan "userName", "university" propertisi və array olan bir lessons propertisi saxlasın
*/
// const students = {
//   userName: "Nihad",
//   university: "BMU",
//   lessons: ["Komputer arxitekture", "Kompüter qrafikası", "Diskret riyaziyyat"],
// };
//!
/*Part2: username-nin universitedə oxuduğunu yoxlasın və oxuyumursa "Her hansi bir universitetde oxumur"
ifadəsini . oxuyursa lessons arrayinin destructurnu yazsın və dəyişənləri consula yazsın
*/
// if (!students.university) {
//   console.log("Her hansi bir universitetde oxumur");
//   return;
// }

// const [lesson1, lesson2, lesson3] = students.lessons;

// console.log(lesson1)
// console.log(lesson2)
// console.log(lesson3)

//!
/*Part3: 
//?
const olan test adlı obyekt yaratsın array olan sdf1,sdf2 və final 
propertylerini daxil etsin. Hər bir array-ə 3 dəyər versin
//?
obyektin içində olan array-lərin hər birini desrtuctur metodudan 
istifadə edərək dəyişənlərə mənimsədilsin
//?
dəyişənlərin tipi number deyilsə heç nə çıxarmasın.
Number- dırsa sdf1 və sdf2 -nin cəminin üşdə bir hissəsi ilə 
final nəticəsinin yarısı toplanib yeni dəyişənə mənimsədilsin
və dərslər ilə ortalama consula yazılsın
*/
//  const test = {
//   sdf1: [90, 67, 90],
//   sdf2: [89, 60, 50],
//   final: [78, 95, 70],
// };

// const [sdf1a, sdf1b, sdf1c] = test.sdf1;
// const [sdf2a, sdf2b, sdf2c] = test.sdf2;
// const [finala, finalb, finalc] = test.final;

// if (typeof (sdf1a && sdf2a && finala) != "number") {
//     return
// }
// if (typeof (sdf1b && sdf2b && finalb) != "number") {
//     return
// }
// if (typeof (sdf1c && sdf2c && finalc) != "number") {
//     return
// }
// sum1 = (sdf1a + sdf2a) / 3 + finala / 2;
// console.log(lesson1, ":", sum1);
// sum2 = (sdf1b + sdf2b) / 3 + finalb / 2;
// console.log(lesson2, ":", sum2);
// sum3 = (sdf1c + sdf2c) / 3 + finalc / 2;
// console.log(lesson3, ":", sum3);

//!

/* Part4 : Əgər hər hansı bir dərsdən ortalam 50-dən kiçikdirsə
"Cox teessuf kesrin var" ifadəsi consula yazılsın əks halda da,
"Tebrikler kesrin yoxdur" ifad'-si consula yazılsın
*/
// if(!((sum1 && sum2 && sum3 )>50)){
//     console.log("Cox teessuf kesrin var")
//     return
// }
// console.log("Tebrikler kesrin yoxdur")
