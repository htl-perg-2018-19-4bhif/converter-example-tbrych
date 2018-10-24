const args = process.argv;
if (args.length != 6 || isNaN(args[2]) || args[4] !== "to"){
    console.log("Invalid parameters");
} else {
    args[3] === args[5] ? printSol(1) : args[3] === "m" && args[5] === "cm" ? printSol(100) : args[3] === "m" && args[5] === "mm" ? printSol(1000) : args[3] === "cm" && args[5] === "m" ? printSol(0.01) : args[3] === "cm" && args[5] === "mm" ? printSol(10) : args[3] === "mm" && args[5] === "cm" ? printSol(0.1) : args[3] === "mm" && args[5] === "m" ? printSol(0.001) : args[3] === "kg" && args[5] === "g" ? printSol(1000) : args[3] === "g" && args[5] === "kg" ? printSol(0.001) : console.log("Invalid parameters");
}
function printSol(factor){
    console.log(args[2] + " " + args[3] + " are " + args[2]*factor + " " + args[5]);
} //It would have been possible to write the if-part (line 2,3) in the ?:-Line, but the line is long enough already and I'm still below 10 lines