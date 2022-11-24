//testEntities.test.js
import Saldo from "../entities/testEntitie.js";

test('Deve retornar o valor 25', () => {
    const result = Saldo(5, 5)
    expect(result).toEqual(10); 
})

test('Deve retornar 0', () => {
    const result = Saldo(5, -10)
    expect(result).toEqual(0); 
})