







const worldData = [
    { "name": "United Kingdom", "continent": "Europe", "population": 65270121, "pFemale": 0.508 },
    { "name": "Republic of Ireland", "continent": "Europe", "population": 4708209, "pFemale": 0.499 },
    { "name": "Australia", "continent": "Oceania", "population": 24482205, "pFemale": 0.502 },
    { "name": "Taiwan", "continent": "Asia", "population": 23522296, "pFemale": 0.501 },
    { "name": "Uruguay", "continent": "South America", "population": 3446772, "pFemale": 0.517 },
    { "name": "Morocco", "continent": "Africa", "population": 35010005, "pFemale": 0.510 },
    { "name": "Nigeria", "continent": "Africa", "population": 188688090, "pFemale": 0.494 },
    { "name": "Zimbabwe", "continent": "Africa", "population": 16051510, "pFemale": 0.507 },
    { "name": "China", "continent": "Asia", "population": 1381321335, "pFemale": 0.488 },
    { "name": "Mexico", "continent": "North America", "population": 129386794, "pFemale": 0.507 },
    { "name": "Canada", "continent": "North America", "population": 36446796, "pFemale": 0.504 },
    { "name": "Czech Republic", "continent": "Europe", "population": 10556351, "pFemale": 0.509 },
    { "name": "Iceland", "continent": "Europe", "population": 332631, "pFemale": 0.496 }
];


//  -------------------------------------------------
// 9h
// const popIsland = worldData.filter(popIs => popIs.name == 'Iceland')
// console.log(popIsland)
// popIsland.forEach(worldData => {console.log(worldData.population)})

// const smallest = worldData.reduce((item,worldData) => {
//     return item.population < 1000000;
// })
// console.log(smallest);



// variant 1
// const island = worldData.find((item) => {
//     return item.name == "Iceland";
// })
// console.log(island);

//  -------------------------------------------------
// // 9g
//     const incel = worldData.find(c => c.pFemale < 0.49)
//     console.log(incel);


//  -------------------------------------------------
// 9f
    // const hundra = worldData.find(worl => worl.population > 100000000)
    // console.log(hundra)

//  -------------------------------------------------
// 9e
// const eu = worldData.filter((item) => {
//     return item.continent == 'Europe'
// })

// eu.forEach(worldData => console.log(Math.round(worldData.population)))

// let sum = 0
// eu.map(country => {
//     sum = sum + country.population
// })

// console.log('european population is', sum)
//  -------------------------------------------------

// 9d

// let list = [];
// worldData.map((country) => {
//     let newObj = {
//         name: country.name,
//         females: Math.round(country.population * country.pFemale),
//         males: Math.round(country.population - country.pFemale * country.population)
//     }
//     list.push(newObj);
// });
// console.log(list)

//  -------------------------------------------------

// 9c
// const womenDownunder = worldData.filter(worldData => worldData.continent == 'Oceania')
// console.log(womenDownunder)

// womenDownunder.forEach(worldData => console.log('Women Down Under' + Math.round(worldData.pFemale * worldData.population)))
// ----------------------------------------------

// 9b

// const african = worldData.filter(worldData => worldData.continent == 'Africa')
// console.log(african[0])

//  -------------------------------------------------

// 9a

// let names = worldData.map(worldData => worldData.name)
// console.log(names)

//  -------------------------------------------------

// find och Filter
// let list = [ 10, 20 ,40]
// let maybe1 = list.find(x => 30 )
// let maybe2 = list.find(x => x == 30 )

// let small = list.filter(x => < <25)


// const employee = [

//     {name: 'kg', salary: 300000, vacationDays: 10},
//     {name: 'ag', salary: 320000, vacationDays: 30},
//     {name: 'og', salary: 310000, vacationDays: 10},
//     {name: 'cg', salary: 290000, vacationDays: 6}
// ]



// 1§

// let names = employee.map(employee => employee.name)
// console.log(names)

// let namesWithTitles = names.map(name => 'master prog')
// console.log ( namesWithTitles )

// womenDownUnder.map( => womenDownunder.name).Map(name => 'master prog' + name).forEach(namesWithTitle => { console.log(namesWithTitle)})



// let higlyPaidEmployee = employees.find(employee => employee.salary > 30000)
// console.log(`${higlyPaidEmployee.name} har en lön över över 30000.`)