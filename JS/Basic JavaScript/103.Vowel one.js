function vowelOne(s){
    // ...
    let str = '';
    for (let i = 0;i < s.length; i++) {
        switch (s[i]) {
            case "a":
            case "A":
            case "e":
            case "E":
            case "i":
            case "I":
            case "o":
            case "O":
            case "u":
            case "U":
                str +='1'
                break;

            case "b":
            case "B":
            case "c":
            case "C":
            case "d":
            case "D":
            case "f":
            case "F":
            case "g":
            case "G":
            case "h":
            case "H":
            case "j":
            case "J":
            case "k":
            case "K":
            case "l":
            case "L":
            case "m":
            case "M":
            case "n":
            case "N":
            case "p":
            case "P":
            case "q":
            case "Q":
            case "r":
            case "R":
            case "s":
            case "S":
            case "t":
            case "T":
            case "v":
            case "V":
            case "w":
            case "W":
            case "x":
            case "X":
            case "z":
            case "Z":
            case " ":
            case ",":
            case ".":
            case ":":
            case "0":
            case "1":
            case "2":
            case "3":
            case "4":
            case "5":
            case "6":
            case "7":
            case "8":
            case "9":

                str +='0'
                break;

        }
    } return str;
}