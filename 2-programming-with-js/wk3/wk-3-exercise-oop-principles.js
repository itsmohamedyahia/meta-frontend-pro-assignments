// create your classes here
class Human {
    think() {
        console.log("THinking!")
    }
}

class LogicalHuman extends Human {
    think() {
    super.think()
    console.log("But Logically!")
}}

var abdallah = new Human();
var mohamed = new LogicalHuman();

mohamed.think();
abdallah.think();
