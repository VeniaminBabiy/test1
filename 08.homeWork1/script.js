let money , time;
function start(){
	money = +prompt("Ваш бюджет на месяц?",'');
	time = prompt("Введите дату в формате YYYY-MM-DD",'');

	while(isNaN(money) || money == "" || money == null){
		money = +prompt("Ваш бюджет на месяц?",'');
	}
}

start();

let appData = {
	bydjet: money,
	timeData: time,
	expenses: {},
	optionalExpenses: {} ,
	income: [] ,
	savings: true
};

function chooseExpenses() {
		for (let i = 0; i < 2; i++) {
			a = prompt("Введите обязательную статью расходов в этом месяце",''),
			b = prompt("Во сколько обойдется?", '');

		if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null
			&& a != '' && b != '' && a.length < 50) {
				console.log("done");
			appData.expenses[a] = b;
		} else { 
			i = i - 1;
		}
	}
}

chooseExpenses();

appData.maneyPerDay = (appData.bydjet / 30).toFixed(2);

alert("Бюджет на 1 день: " + appData.maneyPerDay);


function detectLevel(){
	if (appData.maneyPerDay <100) {
	console.log("Минимальный уровень достатка");
	}	else if(appData.maneyPerDay >100 && appData.maneyPerDay <2000){
		console.log("Средний уровень достатка");
	} else if (appData.maneyPerDay > 2000){
		console.log("Высокий уровень достатка");
	}else {
		console.log("Произошла ошибка");
	}
}

detectLevel();

	function checkSavings(){
		if (appData.savings == true) {
			let save = +prompt("Какая сума накоплений?"),
				percent = +prompt("под какой процент?");

			appData.monthIncome = save/100/12*percent;
			alert("Доход в месяц с вашего депозита: " + (appData.monthIncome).toFixed(2));
			
		}
	}

	checkSavings();

	function bydjetDay(){
		let bd = (appData.bydjet/30);
	//	return (bd);
		alert("Ваш бюджет на один день: " + bd);
	}

	bydjetDay();

	function chooseOptExpenses(){
		for(i=0; i<3; i++) {
			let n = i + 1;
				nr = prompt("Статья необязательных расходов?");
			console.log(nr);
			appData.optionalExpenses[n] = nr;
		}
	}

chooseOptExpenses();
console.log(appData);