//#region Array methods
var lang = [
    'meo meo',
    'gâu gâu',
    'ảng ange'
]

var lang2 = [
    'meo meo',
    'gâu gâu',
    'ảng ange'
]
// convert arrays to strings
lang.toString()

// join arrays with ',' to strings
lang.join(', ')

// REMOVE and SHOW the LAST element of the array
lang.pop()

// REMOVE and SHOW the START element of the array
lang.shift()

// add a new element to THE END of the array and SHOW the new length of the array
lang.push('Dart')

// add a new element to THE START of the array and SHOW the new length of the array
lang.unshift('dart')

// REMOVE 2 element have index start = 1 and INSERT 'Dart into the array where index = 1
lang.splice(1, 2, 'Dart')

// concat lang2 to lang (nối lang2 vào lang)
lang.concat(lang2)

// slice lang from index 1 to index 2 (cắt mảng từ vị trí 1 đến 2) [1, 2) (chưa lấy đến 2)
lang.slice(1, 2)

//duyet mang
lang.forEach(function(lan) {
    console.log(lan)
})

//kiem tra tat ca dieu kien trong mang phai thoa man
lang.every(function(lan) {
    return lan.length === ''
})

//kiem tra co it nhat 1 phan tu thoa man dk
lang.some(function(lan) {
    return lan.length === ''
})

//tìm kiếm 1 phần tử đầu tiên trong mảng t/m dk
lang.find(function(lan) {
    return lan.length === 'meo meo'
})

//tìm kiếm tất cả ptu trong mảng t/m dk
lang.filter(function(lan) {
    return lan.length === 'gâu gâu'
})

//chỉnh sửa ttin trong mảng
var nerInfo = lang.map(function(lan){
    return {
        id: lan.id,
        name: `Khoa hoc: ${lan.name}`,
    }
})

// tính toán nhanh trong mảng
var total = lang.reduce(function(acc, curr) {
    return acc + curr;
});

//#endregion

//#region Object methods

var object = {
    name: 'Hieu',
    age: 25,
    job: 'Developer',
    getName: function() {
        //this = object
        return this.name
    }
}

// method : function
// all others : property

// add a new property to the object(key: value)
object['address'] = 'Hanoi' // or object.address = 'Hanoi'

// get info property
object.name // or object['name']

// delete property name
delete object.name 

// call function in object
object.getName()

//object constructor: là 1 function tạo ra object
function User(name, age, job) {
    this.name = name
    this.age = age
    this.job = job
}
// add a new property to the object(key: value)
User.prototype.title = 'Developer'
// create new object by User()
var Hieu = new User('Hieu', 25, 'Developer') 
//add othes property to Hieu
Hieu.title = 'Boss'
Hieu.comment = 'Baby sharks'

//#endregion

//#region JSON
    //#region promise
        // lý thuyết
        var promise = new Promise(
            //executor: function
            function(resolve, reject) { 
                //Logic
                //Thất bại: reject()
                //thành công: resolve()
            }
        )

promise
    .then(function(){}) // thành công thì vào then
    .catch(function(){}) // tbắt lỗi thì vào catch
    .finally(function(){}) // kết thúc thì vào finally


        var User = [
            {
                id: 1,
                name: Hieu
            },
            {
                id: 2,
                name: Thien
            },
            {
                id: 3,
                name: Loan
            },
        ]

        var comment = [
            {
                id: 1,
                user_id: 1,
                content: 'my name is'
            },
            {
                id: 2,
                user_id:2,
                content: 'florentino'
            },
        ]

        function getComments(){
            return new Promise(function(resolve){ // promise: xử lý bất đồng bộ thường dùng để xử lý API
                setTimeout(function(){
                    resolve(comment)
                }, 1000)
            })
        }

    //#endregion

//#endregion