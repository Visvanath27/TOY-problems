function countChar(word, letter){
    if(letter.length > 1)
        return "only one letter allowed as second argument"

    var count = 0
    for (let i = 0; i < word.length; i++){
        if (word.charAt(i) == letter)
            count +=1
    }
    return count
}

// to count the number of Bs in the given string:
function countB(word){
    return countChar(word,'B') + countChar(word,'b')

}

const word = "ballon Bumblbee"
console.log(countB(word))