export let fakeDataBase = [
    {
        param_1 : '8',
        param_2 : '*',
        param_3 : '8',
        param_4 : '-',
        param_5 : '2',
        param_6 : '2'
    },
    {
        param_1 : '4',
        param_2 : '2',
        param_3 : '0',
        param_4 : '/',
        param_5 : '1',
        param_6 : '0'
    },
    {
        param_1 : '8',
        param_2 : '*',
        param_3 : '9',
        param_4 : '-',
        param_5 : '3',
        param_6 : '0'
    },
    {
        param_1 : '2',
        param_2 : '+',
        param_3 : '8',
        param_4 : '0',
        param_5 : '/',
        param_6 : '2'
    }
]

function equacao() {
    let indice = Math.floor(Math.random() * fakeDataBase.length);
    let eq = fakeDataBase[indice];
    return(eq);
}

export default equacao;