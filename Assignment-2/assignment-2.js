function Spinner(){
    var count = 0;
    this.up = function(){
        count = count + 1;
        return count;
    }
    this.down = function(){
        count = count - 1;
        return count;
    }
}
var spin = new Spinner()
