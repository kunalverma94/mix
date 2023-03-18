var m = [[3, 3, 1, 1], [2, 2, 1, 2], [1, 1, 1, 2]]
//Output: [[1,1,1,1],[1,2,2,2],[1,2,3,3]]

var mm = [[3, 3, 1, 1], [2, 2, 1, 2], [1, 1, 1, 2]]
let nn = [];

for (let j =3; j >= 0; j--)
 {
    let n=[]
    for (let i = 0; i <= 3; i++)
    {
            if(m[i] && [j] && m[i][j]!=undefined){
                n.push(m[i][j])
            }
    }
    nn.push(n);
}
console.log(nn);