import equacao, { fakeDataBase as dataBase } from '../database/fakeDataBase.js'

test('Verifica o valor armazenado em fakeDataBase na posição 0', () => {
    const result = dataBase[0]
    expect(result).toEqual({
        param_1 : "8",
        param_2 : "*",
        param_3 : "8",
        param_4 : "-",
        param_5 : "2",
        param_6 : "2",
    })
})

test('Verifica o valor armazenado em fakeDataBase na posição 1', () => {
    const result = dataBase[1]
    expect(result).toEqual({
        param_1 : '4',
        param_2 : '2',
        param_3 : '0',
        param_4 : '/',
        param_5 : '1',
        param_6 : '0'
    })
})

test('Verifica o valor armazenado em fakeDataBase na posição 2', () => {
    const result = dataBase[2]
    expect(result).toEqual({
        param_1 : '8',
        param_2 : '*',
        param_3 : '9',
        param_4 : '-',
        param_5 : '3',
        param_6 : '0'
    })
})

test('Verifica o valor armazenado em fakeDataBase na posição 3', () => {
    const result = dataBase[3]
    expect(result).toEqual({
        param_1 : '2',
        param_2 : '+',
        param_3 : '8',
        param_4 : '0',
        param_5 : '/',
        param_6 : '2'
    })
})

test('Deve retornar um objeto not null', () => {
    expect(equacao()).not.toBeNull();
});