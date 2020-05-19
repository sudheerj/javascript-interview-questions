function main(){
    console.log('A');
    setTimeout(
        function print(){ console.log('B'); }
        ,0);
    console.log('C');
}
main(); // A,C and B