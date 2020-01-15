function server() {
    let users = [{ username: "andre", password: "password" },
    { username: "hyf", password: "asd" }];
    function authenticate(username, password) {

        // Method No. 1 using loop
        //   for (i= 0; i < users.length; i ++){
        //     if (username == users[i].username && password == users[i].password){
        //         return true; 
        //     }
        // }
        //     return false;


        // Method No.2
        let check = users.find(user =>
            username === user.username && password === user.password)
        return !!check;

    }

    // Method No.3 -----typeof
    // let check = users.find(user =>
    //     username === user.username && password === user.password)
    // if (typeof check != undefined) return true;
    // else return false;






    function register(username, password) {
        users.push({ username: username, password: password })
        console.log(users)
        //add the new user to the users list
    }
    return {
        authenticate,
        register
    };
}
let server1 = server();
server1.register("foo", "bar");
console.log(server1.authenticate("foo", "bar")) // true
console.log(server1.authenticate("andre", "password")) // true
console.log(server1.authenticate("andre1", "password")) // false
console.log(server1.authenticate("andre", "yxc")) // false

let x = 'Hanbing';
console.log(!!x)

console.log(!!undefined)
// !!!!!!!!!!!!!!!!!!!!!1using double negative to turn result into boolean



console.log(server('andre', 'password'))