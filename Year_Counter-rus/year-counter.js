var year = prompt ("Введите свой возраст в годах:");
		var countY = (year*365);
		var countH = (countY*24);
		var ans = (countY + " Дней, или " + countH + " Часов!");
		document.write (ans);