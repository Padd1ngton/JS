const enterprises = [
    {
      id: 1,
      name: "Предприятие 1",
      departments: [
        {
          id: 2,
          name: "Отдел тестирования",
          employees_count: 10,
        },
        {
          id: 3,
          name: "Отдел маркетинга",
          employees_count: 20,
        },
        {
          id: 4,
          name: "Администрация",
          employees_count: 15,
        },
      ]
    },
    {
      id: 5,
      name: "Предприятие 2",
      departments: [
        {
          id: 6,
          name: "Отдел разработки",
          employees_count: 50,
        },
        {
          id: 7,
          name: "Отдел маркетинга",
          employees_count: 20,
        },
        {
          id: 8,
          name: "Отдел охраны труда",
          employees_count: 5,
        },
      ]
    },
    {
      id: 9,
      name: "Предприятие 3",
      departments: [
        {
          id: 10,
          name: "Отдел аналитики",
          employees_count: 0,
        },
      ]
    }
  ]

//task 3.1

enterprises.forEach(function(item, i, array) {

  let sum = 0
  enterprises[i].departments.forEach(function(item, y, array) {
    sum = sum + enterprises[i].departments[y].employees_count
  })

  if(sum == 0){
    sum = 'нет'
  }

  console.log(enterprises[i].name + " (" + sum + " сотрудников)")

  enterprises[i].departments.forEach(function(item, z, array) {
    if(enterprises[i].departments[z].employees_count != 0){
      console.log(' - ' + enterprises[i].departments[z].name + ": (" + enterprises[i].departments[z].employees_count + " сотрудников)")
    } else {
      console.log(' - ' + enterprises[i].departments[z].name + ": (" + "нет сотрудников)")}
  })  
})

//task 3.2

let word_1 = prompt('Введите id отдела или название отдела', '')

function WHAT(word){
  if (typeof word == 'number') {
     enterprises.forEach(function(item, i, array) {
      enterprises[i].departments.forEach(function(item, z, array) {
      if (enterprises[i].departments[z].id == word){
        console.log(enterprises[i].name)
        }
      })
       })
      } else {
        enterprises.forEach(function(item, i, array) {
          enterprises[i].departments.forEach(function(item, z, array) {
          if (enterprises[i].departments[z].name == word){
            console.log(enterprises[i].name)
            }
          })
          })
      }
    } 

WHAT(word_1) // Сделал в соответствии с ТЗ, но названия пересекаются и вываодится несколько предприятий. 

//task 3.3

let word = prompt('Введите название предприятия', '')
function addit(x){ 
  enterprises.push({id: enterprises[enterprises.length - 1].departments[0].id + 1, name: word, departments: []})
  console.log(enterprises)
}

addit(word)

//task 3.4

let de_id = prompt('Введите id предприятия', '')
let dep = prompt('Введите название отдела', '')
function addit(dep_id, dep){ 
  enterprises.forEach(function(item, i) {
    if (enterprises[i].id == dep_id){y = enterprises[i].departments}
  });
  y.push({id: enterprises[enterprises.length - 1].departments[0].id + 1, name: dep, employees_count: 0,})
  enterprises[1].departments = y
  console.log(enterprises[1].departments)
}

addit(de_id, dep)

//task 3.5

let com_id = prompt('Введите id предприятия', '')
let com_name = prompt('Введите новое название предприятия', '')

function editEnterprise(c_id, c_name){
  enterprises.forEach(function(item, i) {
    if (enterprises[i].id == c_id){enterprises[i].name = c_name
      console.log(enterprises[i])}
  });
}

editEnterprise(com_id, com_name)

//task 3.6

let depart_id = prompt('Введите id отдела', '')
let depart_name = prompt('Введите новое название отдела', '')

function editDepartment(n_id, n_name){
     enterprises.forEach(function(item, i, array) {
      enterprises[i].departments.forEach(function(item, z, array) {
      if (enterprises[i].departments[z].id == n_id){
        enterprises[i].departments[z].name = n_name
        console.log(enterprises[i].departments[z])
        }
      })
       })     
    }

editDepartment(depart_id, depart_name)

//task 3.7

let id_for_del = prompt('Введите id предприятия', '')

function deleteEnterprise(x){
  enterprises.forEach(function(item, i, array) {
  if (enterprises[i].id == x){
    enterprises.splice(enterprises[i] ,1)
    console.log(enterprises)}
  })
}

deleteEnterprise(id_for_del)

//task 3.8

let id_to_del = prompt('Введите id отдела', '')
function deleteDepartment(x){
     enterprises.forEach(function(item, i, array) {
      enterprises[i].departments.forEach(function(item, z, array) {
      if (enterprises[i].departments[z].id == x){
        enterprises[i].departments.splice(enterprises[i].departments[z] ,1)
        console.log(enterprises[i].departments)
        }
      })
       })     
    }

deleteDepartment(id_to_del)

//task 3.9

let id_one = prompt('Введите id первого отдела', '')
let id_two = prompt('Введите id второго отдела', '')
function moveEmployees(id_one, id_two){
     enterprises.forEach(function(item, i, array) {
      enterprises[i].departments.forEach(function(item, z, array) {
      if (enterprises[i].departments[z].id == id_one){
        x = enterprises[i].departments[z].employees_count
        one_one = i
        one_two = z
        } else if (enterprises[i].departments[z].id == id_two){
          y = enterprises[i].departments[z].employees_count
          two_one = i
          two_two = z
        }
      })
       }) 
    enterprises[one_one].departments[one_two].employees_count = y  
    enterprises[two_one].departments[two_two].employees_count = x
    console.log(enterprises[one_one].departments)
    }

moveEmployees(id_one, id_two)
