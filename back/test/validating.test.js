import { isFt } from "../domain/validation.js";
test('Verifica se os parametros estão corretos e resultam 42', () => {
	let param_1 = '-';
	let param_2 = '4';
	let param_3 = '2';
	let param_4 = '*';
	let param_5 = '-';
	let param_6 = '1';

	const result = isFt(param_1, param_2, param_3, param_4, param_5, param_6)
    expect(result).toEqual('ok');
})

test('Verifica se os parametros que não resultam em 42', () => {
	let param_1 = '1';
	let param_2 = '8';
	let param_3 = '8';
	let param_4 = '*';
	let param_5 = '0';
	let param_6 = '4';

	const result = isFt(param_1, param_2, param_3, param_4, param_5, param_6)
    expect(result).toEqual('errop');
})

test('Verifica se o primeiro parametro tem sinal que não sejam +/- ', () => {
	let param_1 = '*';
	let param_2 = '6';
	let param_3 = '8';
	let param_4 = '/';
	let param_5 = '0';
	let param_6 = '4';

	const result = isFt(param_1, param_2, param_3, param_4, param_5, param_6)
    expect(result).toEqual('errop');
})

test('Verifica se o primeiro parametro tem sinal que não sejam +/- ', () => {
	let param_1 = '/';
	let param_2 = '6';
	let param_3 = '8';
	let param_4 = '/';
	let param_5 = '0';
	let param_6 = '4';

	const result = isFt(param_1, param_2, param_3, param_4, param_5, param_6)
    expect(result).toEqual('errop');
})

test('Verifica se o sexto parametro tem um sinal', () => {
	let param_1 = '1';
	let param_2 = '6';
	let param_3 = '8';
	let param_4 = '/';
	let param_5 = '0';
	let param_6 = '*';

	const result = isFt(param_1, param_2, param_3, param_4, param_5, param_6)
    expect(result).toEqual('errop');
})

test('Verifica se o sexto parametro tem um sinal', () => {
	let param_1 = '1';
	let param_2 = '6';
	let param_3 = '8';
	let param_4 = '/';
	let param_5 = '0';
	let param_6 = '/';

	const result = isFt(param_1, param_2, param_3, param_4, param_5, param_6)
    expect(result).toEqual('errop');
})

test('Verifica se o sexto parametro tem um sinal', () => {
	let param_1 = '1';
	let param_2 = '6';
	let param_3 = '8';
	let param_4 = '/';
	let param_5 = '0';
	let param_6 = '+';

	const result = isFt(param_1, param_2, param_3, param_4, param_5, param_6)
    expect(result).toEqual('errop');
})

test('Verifica se o sexto parametro tem um sinal', () => {
	let param_1 = '1';
	let param_2 = '6';
	let param_3 = '8';
	let param_4 = '/';
	let param_5 = '0';
	let param_6 = '-';

	const result = isFt(param_1, param_2, param_3, param_4, param_5, param_6)
	expect(result).toEqual('errop');
})

test('verifica se com o primeiro parametro sendo 0 resulta 42', () => {
	let param_1 = '0';
	let param_2 = '8';
	let param_3 = '4';
	let param_4 = '/';
	let param_5 = '0';
	let param_6 = '2';

	const result = isFt(param_1, param_2, param_3, param_4, param_5, param_6)
	expect(result).toEqual('errop');
})

test('Verifica se o parametros que não sejam numeros nem sinais', () => {
	let param_1 = 'A';
	let param_2 = '6';
	let param_3 = '8';
	let param_4 = '/';
	let param_5 = '0';
	let param_6 = '4';

	const result = isFt(param_1, param_2, param_3, param_4, param_5, param_6)
    expect(result).toEqual('errop');
})

test('Verifica se o parametros se a 2 sinais seguidos que não sejam /-, /+, *-, *+', () => {
	let param_1 = '-';
	let param_2 = '-';
	let param_3 = '6';
	let param_4 = '/';
	let param_5 = '0';
	let param_6 = '4';

	const result = isFt(param_1, param_2, param_3, param_4, param_5, param_6)
    expect(result).toEqual('errop');
})

test('verifica se com o primeiro parametro sendo 0 resulta 42', () => {
	let param_1 = '1';
	let param_2 = '1';
	let param_3 = '*';
	let param_4 = '4';
	let param_5 = '+';
	let param_6 = '0';

	const result = isFt(param_1, param_2, param_3, param_4, param_5, param_6)
	expect(result).toEqual('erro42');
})
