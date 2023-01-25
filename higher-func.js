



// find och Filter 
// let list = [ 10, 20 ,40]
// let maybe1 = list.find(x => 30 )
// let maybe2 = list.find(x => x == 30 )

// let small = list.filter(x => < <25)









let employee = [

    {name: kg, salary: 300000}
    {name: ag, salary: 320000}
    {name: og, salary: 310000}
    {name: cg, salary: 290000}
]





let names = employees.map(employee => employee.name)
console.log(names)

let namesWithTitles = names.map(name => 'master prog')
console.log ( namesWithTitles )

employee.map(employee => employee.name).Map(name => 'master prog' + name).forEach(namesWithTitle => { console.log(namesWithTitle)})



let higlyPaidEmployee = employees.find(employee => employee.salary > 30000)
console.log(`${higlyPaidEmployee.name} har en lön över över 30000.`)