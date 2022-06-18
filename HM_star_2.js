//Task 1 - 1*

var numb_1 = prompt('Введите степень', '')

const func_1 = function(x) {
    for (let i = 1; i <= x; i++){
        console.log(2**i)
    }
}

func_1(numb_1)


//Task 2 - 2*

var numb_2_1 = String(prompt('Введите строку', ''))
var numb_2_2 = prompt('Введите количество строк', '')

const func_2 = function(x, y) {
    for (let i = 1; i <= y; i++){
        console.log(x.repeat(i))
    }
}

func_2(numb_2_1, numb_2_2)

//Task 3

var numb_3 = String(prompt('Введите слово', '')).toLowerCase()
var vowels = "aeiouyуеыаоэяиюё"
var consonants = "бвгджзйклмнпрстфхцчшщbcdfghjklmnpqrstvxz"

const func_3 = function(x) {
    var vow_count = 0
    var con_count = 0
    for (let i = 0; i <= x.length; i++){
        if (vowels.includes(x[i])){vow_count++}
        else if(consonants.includes(x[i])){con_count++}
        
    }
    console.log('Слово '+ x + ' состоит из ' + vow_count + ' гласных и ' + con_count + ' согласных букв')
}

func_3(numb_3)

//Task 4

var numb_3 = String(prompt('Введите слово', '')).toLowerCase()

const func_4 = function(x){
    console.log(x == x.split('').reverse().join(''))
}

func_4(numb_3)