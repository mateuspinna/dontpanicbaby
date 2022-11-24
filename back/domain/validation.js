export function isFt(param_1, param_2, param_3, param_4, param_5, param_6)
{
	let result = operationFt(param_1, param_2, param_3, param_4, param_5, param_6);
	return (return_validation (result));
}

function isNumberOrSignal(param)
{
	let signal = "+-/*";
	let number = "0123456789";
	if (number.includes(param) || signal.includes(param))
	{
		if(number.includes(param))
			return ("number");
		else if (signal.includes(param))
			return ("signal");
	}
	else
		return ('erro');

}

function operationFt(param_1, param_2, param_3, param_4, param_5, param_6)
{
	let concat = [];
	let param;
	let flag = 0
	let i = 0;
	param = [param_1, param_2, param_3, param_4, param_5, param_6]
	
	if ((isNumberOrSignal(param[0]) === 'signal' && (param[0] != '-' && param[0] != '+')) || (isNumberOrSignal(param[5]) === 'signal'))
		return ('errop');
	if (param[0] === '0')
		return ('errop')
	while (i < 6)
	{
		if (isNumberOrSignal(param[i]))
		{
			if(isNumberOrSignal(param[i]) === 'signal')
			{
				if (flag === 1)
					return ('errop')
				else if ((param[i] === '/' || param[i] === '*') && (param[i + 1] === '+' || param[i + 1] === '-'))
					flag = 0;
				else
					flag = 1;
			}
			else if(isNumberOrSignal(param[i]) === 'number')
			{
				if ((flag === 1) && (param[i] === '0') && (param[i + 1]))
					return ('errop');
				flag = 0;
			}
			else
				return ('errop');
			concat += param[i];
		}
		i++;
	}
	concat = eval(concat);
	return (concat);
}

function return_validation (result)
{
	if (result === 42)
		return ('ok');
	else if (result === 'errop')	
		return ('errop');
	else
		return ('erro42');
}