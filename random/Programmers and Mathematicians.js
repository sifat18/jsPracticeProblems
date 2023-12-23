// The All-Berland Team Programming Contest will take place very soon. This year, teams of four are allowed to participate.

// There are a
// programmers and b

// mathematicians at Berland State University. How many maximum teams can be made if:

//     each team must consist of exactly 4

// students,
// teams of 4
// mathematicians or 4

//     programmers are unlikely to perform well, so the decision was made not to compose such teams.

// Thus, each team must have at least one programmer and at least one mathematician.

// Print the required maximum number of teams. Each person can be a member of no more than one team.
// Input

// The first line contains an integer t
// (1≤t≤104

// ) —the number of test cases.

// This is followed by descriptions of t
// sets, one per line. Each set is given by two integers a and b (0≤a,b≤109

// ).
// Output

// Print t
// lines. Each line must contain the answer to the corresponding set of input data — the required maximum number of teams.


// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

const z = (a, b) => {
    let t = 0
    while (a >= 2 && b >= 2) {
        if (a > b) {
            a = a - 3
            b = b - 1
        } else if (b > a) {
            b = b - 3
            a = a - 1
        } else if (a == b) {
            a = a - 2
            b = b - 2
        }
        t++
    }

    if (a + b >= 4) {
        a = 0
        b = 0
        t++
    }

    console.log(t)
}
z(5, 5)
z(10, 1)
z(2, 3)
z(17, 2)
z(0, 0)
z(1000000000, 1000000000)

