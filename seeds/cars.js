exports.seed = async function(knex) {
  //clears out all the rows in the table
  await knex("cars").truncate()
  await knex("cars").insert([
    { VIN: 123456, make: "Honda" , model: "Civic", mileage: 3457 },
    { VIN: 234566, make: "Honda" , model: "Acura", mileage: 9264 },
    { VIN: 345667, make: "Lexus" , model: "GS", mileage: 2522 }
  ])
}



//BOILERPLATE BELOW
// exports.seed = function(knex) {
//   // Deletes ALL existing entries
//   return knex('table_name').del()
//     .then(function () {
//       // Inserts seed entries
//       return knex('table_name').insert([
//         {id: 1, colName: 'rowValue1'},
//         {id: 2, colName: 'rowValue2'},
//         {id: 3, colName: 'rowValue3'}
//       ]);
//     });
// };
