export function tip(trying, hiddenEquation) {
	let respTip = Object.values(trying)
	let valueBase = Object.values(hiddenEquation)
	let valueTrying = Object.values(trying)
	
	for(let i = 0; i < 6; i++) {
		if(valueBase[i] == valueTrying[i])
			respTip[i] = 'C'
	}
	for (let i = 0; i < 6; i++) {
		if(respTip[i] != 'C' && valueTrying[i]) {
			if(isFilled(valueBase, respTip, valueTrying[i]))
				respTip[i] = 'X'
			else
				respTip[i] = 'T'
		}
	}
	return (respTip);
}

function isFilled(hiddenEquation, tip, trying) {
	let count = 0;
	let flag = 0;
	
	for(let i = 0; i < 6; i++) {
		if(trying == hiddenEquation[i]) {
	        count++;
	    	if(tip[i] == 'C') {
	        	flag++;    
			}
		}
	}
	if(count == flag)
		return true;
	else 
		return false;
}