// Your code here
function saturdayFun(act='roller-skate'){
	return `This Saturday, I want to ${act}!`;
}

function mondayWork(act1='go to the office'){
	return `This Monday, I will ${act1}.`
}

function wrapAdjective(char='*'){
	return function inner(defaul='special'){
	return `You are ${char}${defaul}${char}!`
	}
}

wrapAdjective("||")("a dedicated programmer")
wrapAdjective("*")("a dedicated programmer")