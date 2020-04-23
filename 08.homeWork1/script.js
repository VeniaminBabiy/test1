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
	savings: true,
	chooseExpenses: function(){
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
	},
	bydjetDay: function(){	
		let bd = (appData.bydjet/30);
		alert("Ваш бюджет на один день: " + (bd).toFixed(2));
	},
	detectLevel: function() {
		if (appData.maneyPerDay <100) {
			console.log("Минимальный уровень достатка");
			}	else if(appData.maneyPerDay >100 && appData.maneyPerDay <2000){
				console.log("Средний уровень достатка");
			} else if (appData.maneyPerDay > 2000){
				console.log("Высокий уровень достатка");
			}else {
				console.log("Произошла ошибка");
			}

	},
	checkSavings: function() {
		if (appData.savings == true) {
			let save = +prompt("Какая сума накоплений?"),
				percent = +prompt("под какой процент?");

			appData.monthIncome = save/100/12*percent;
			alert("Доход в месяц с вашего депозита: " + (appData.monthIncome).toFixed(2));
		} 
	},
	chooseOptExpenses: function() {
		for(i=0; i<3; i++) {
			let n = i + 1;
				nr = prompt("Статья необязательных расходов?");
			console.log(nr);
			appData.optionalExpenses[n] = nr;
		}
	},
	chooseIncome: function() {
		for (i=0; i<1; i++){
			let items = prompt (`Что принесет дополнительний доход? (пожалуйста, перечислите через запьятую)`, ``);
			appData.income = items.split(`, `);
			appData.income.push(prompt(`Может что-то еще?`));
			appData.income.sort();

			if ( (typeof(items)) === 'string' && (typeof(items)) != null && items.length > 0) {
					console.log("done");
				} else { 
					i = i - 1;
			}
		}
		appData.income.forEach(function(items, i) {
			document.write("Способы доп. заработка: " + (i + 1) + ". " + items);
		});
		
	}
	
};

for (let o in appData) {
	console.log (`Наша програма включает такие дание: ` + o);
}