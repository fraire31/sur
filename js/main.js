var table = document.createElement('table');
var th1 = document.createElement('th');
var th2 = document.createElement('th');

var tellUs = document.createTextNode('Tell Us How You Really Feel');
var gradeUse = document.createTextNode('Yes, Sometimes, Rarely, Never');

//TOP HEADINGS OF TABLE
th1.appendChild(tellUs);
th1.setAttribute('id','tellUs');
th2.appendChild(gradeUse);
th2.setAttribute('id','choice');

var tr0 = document.createElement('tr');
var td0 = document.createElement('td');
tr0.appendChild(th1);
tr0.appendChild(th2);
table.appendChild(tr0)

//QUESTION 0 + ANSWER 0
var tr1 = document.createElement('tr');
var tdq0 = document.createElement('td');
tdq0.setAttribute('id','question0');

tda0 = document.createElement('td');
tda0.setAttribute('id','answer0');

tr1.appendChild(tdq0);
tr1.appendChild(tda0);

table.appendChild(tr1);


//QUESTION 1 + ANSWER 1
var tr2 = document.createElement('tr');
var tdq1 = document.createElement('td');
tdq1.setAttribute('id','question1');

tda1 = document.createElement('td');
tda1.setAttribute('id','answer1');

tr2.appendChild(tdq1);
tr2.appendChild(tda1);

table.appendChild(tr2);

//QUESTION 2 + ANSWER 2
var tr3 = document.createElement('tr');
var tdq2 = document.createElement('td');
tdq2.setAttribute('id','question2');

tda2 = document.createElement('td');
tda2.setAttribute('id','answer2');

tr3.appendChild(tdq2);
tr3.appendChild(tda2);

table.appendChild(tr3);


//QUESTION 3 + ANSWER 3
var tr4 = document.createElement('tr');
var tdq3 = document.createElement('td');
tdq3.setAttribute('id','question3');

tda3 = document.createElement('td');
tda3.setAttribute('id','answer3');

tr4.appendChild(tdq3);
tr4.appendChild(tda3);

table.appendChild(tr4);

//QUESTION 4 + ANSWER 4
var tr5 = document.createElement('tr');
var tdq4 = document.createElement('td');
tdq4.setAttribute('id','question4');

tda4 = document.createElement('td');
tda4.setAttribute('id','answer4');

tr5.appendChild(tdq4);
tr5.appendChild(tda4);

table.appendChild(tr5);


//QUESTION 5 + ANSWER 5
var tr6 = document.createElement('tr');
var tdq5 = document.createElement('td');
tdq5.setAttribute('id','question5');

tda5 = document.createElement('td');
tda5.setAttribute('id','answer5');

tr6.appendChild(tdq5);
tr6.appendChild(tda5);

table.appendChild(tr6);


//QUESTION 6 + ANSWER 6
var tr7 = document.createElement('tr');
var tdq6 = document.createElement('td');
tdq6.setAttribute('id','question6');

tda6 = document.createElement('td');
tda6.setAttribute('id','answer6');

tr7.appendChild(tdq6);
tr7.appendChild(tda6);

table.appendChild(tr7);

//QUESTION 7 + ANSWER 7
var tr8 = document.createElement('tr');
var tdq7 = document.createElement('td');
tdq7.setAttribute('id','question7');

tda7 = document.createElement('td');
tda7.setAttribute('id','answer7');

tr8.appendChild(tdq7);
tr8.appendChild(tda7);

table.appendChild(tr8);


//QUESTION 8 + ANSWER 8
var tr9 = document.createElement('tr');
var tdq8 = document.createElement('td');
tdq8.setAttribute('id','question8');

tda8 = document.createElement('td');
tda8.setAttribute('id','answer8');

tr9.appendChild(tdq8);
tr9.appendChild(tda8);

table.appendChild(tr9);

//QUESTION 9 + ANSWER 9
var tr10 = document.createElement('tr');
var tdq9 = document.createElement('td');
tdq9.setAttribute('id','question9');

tda9 = document.createElement('td');
tda9.setAttribute('id','noButtons');
// tda9.setAttribute('id','answer9');

tr10.appendChild(tdq9);
tr10.appendChild(tda9);

table.appendChild(tr10);

//ROW FOR TEXT AREA
var tr11 = document.createElement('tr');
var tdq10 = document.createElement('td');
var tda10 = document.createElement('td');
tdq10.setAttribute('id','textArea');
tda10.setAttribute('id','empty');


var txtArea = document.createElement('textarea');
txtArea.setAttribute('id','txtArea');

tdq10.appendChild(txtArea);
tr11.appendChild(tdq10);
tr11.appendChild(tda10);

table.appendChild(tr11);




//QUESTION FOR EMPLOYEES
var questions = [
	{question:'1.	Overall do you think the company’s policies and procedures make sense?'},
	{question:'2.	Physical working conditions (e.g. heating, ventilation, space, cleanliness) are very good?'},
	{question:'3.	Individual differences are respected here?'},
	{question:'4.	Do we make you feel job security?'},
	{question:'5.	Do feel as if issues reported are handled with precision?'},
	{question:'6.	Are changes in policy and procedures being declared efficiently and accurately?'},
	{question:'7.	Are you comfortable enough to let your supervisors or higher authority aware of any issues you or your peers may have?'},
	{question:'8.	Do you know have easy access to report an incident immediately?'},
	{question:'9.	Have you personally or have you hear of hostility when requesting days off, or having to call out sick?'},
	{question:'10.	Are there any policies/procedures you feel that should be improved or change completely for a better outcome of employee care?'}
];


var button = document.getElementById('beginSurvey');


var surveyBtn = document.createElement('button');
surveyBtn.setAttribute('type','submit');
surveyBtn.setAttribute('id','surveySub');
surveyBtn.setAttribute('onclick','surveySummary()');


button.addEventListener('click', function(){
	var place = document.getElementById('placeSurveyHere');
	place.appendChild(table);



	var btnDiv = document.getElementById('buttn');
	btnDiv.appendChild(surveyBtn);

	surveyBtn.innerHTML='Submit'

	

	//FOR LOOP TO PLACE QUESTIONS
	for(var i = 0; i < questions.length; i++){
		
		var question = questions[i].question;
		var el = document.getElementById('question' + [i]);

		el.textContent = question;

		//CIRCLE INPUTS
        var radioOne = document.createElement('input');
        radioOne.setAttribute('id','radioOne')
        radioOne.setAttribute('type','radio');
        radioOne.setAttribute('value','yes');

        var radioTwo = document.createElement('input');
        radioTwo.setAttribute('id','radioTwo');
        radioTwo.setAttribute('type','radio');
        radioTwo.setAttribute('value','sometimes');

        var radioThree = document.createElement('input');
        radioThree.setAttribute('id','radioThree');
        radioThree.setAttribute('type','radio');
        radioThree.setAttribute('value','rarely');

        var radioFour = document.createElement('input');
        radioFour.setAttribute('id','radioFour');
        radioFour.setAttribute('type','radio');
        radioFour.setAttribute('value','never');

        var radioDiv = document.createElement('div');
        radioDiv.setAttribute('class','radioInputs');

        radioDiv.appendChild(radioOne);
        radioDiv.appendChild(radioTwo);
        radioDiv.appendChild(radioThree);
        radioDiv.appendChild(radioFour);

        var answers = document.getElementById('answer' + [i]);
        answers.appendChild(radioDiv); //error may appear about appenchild, bc i removed the id of an answer div to make radio button disappear
	
	}




	var resultsTable = document.createElement('table');
	resultsTable.setAttribute('id','resultTable');

	var Rtr = document.createElement('tr');
	var Rth = document.createElement('th');
	var hereResults = document.createTextNode('Survey Results');

	Rth.appendChild(hereResults);
	Rtr.appendChild(Rth);

	resultsTable.appendChild(Rtr);

	// QUESTION ONE RESULT
	var Rtr1 = document.createElement('tr');
	var Rth1 = document.createElement('td');
	Rth1.setAttribute('id','rQuestion1');
	Rtr1.appendChild(Rth1);

	resultsTable.appendChild(Rtr1);

	// QUESTION TWO RESULT
	var Rtr2 = document.createElement('tr');
	var Rth2 = document.createElement('td');
	Rth2.setAttribute('id','rQuestion2');

	Rtr2.appendChild(Rth2);
	resultsTable.appendChild(Rtr2);

	// QUESTION THREE RESULT
	var Rtr3 = document.createElement('tr');
	var Rth3 = document.createElement('td');
	Rth3.setAttribute('id','rQuestion3');
	Rtr3.appendChild(Rth3);

	resultsTable.appendChild(Rtr3);


	// QUESTION FOUR RESULT
	var Rtr4 = document.createElement('tr');
	var Rth4 = document.createElement('td');
	Rth4.setAttribute('id','rQuestion4');
	Rtr4.appendChild(Rth4);

	resultsTable.appendChild(Rtr4);

	// QUESTION FIVE RESULT
	var Rtr5 = document.createElement('tr');
	var Rth5 = document.createElement('td');
	Rth5.setAttribute('id','rQuestion5');
	Rtr5.appendChild(Rth5);

	resultsTable.appendChild(Rtr5);


	// QUESTION SIX RESULT
	var Rtr6 = document.createElement('tr');
	var Rth6 = document.createElement('td');
	Rth6.setAttribute('id','rQuestion6');
	Rtr6.appendChild(Rth6);

	resultsTable.appendChild(Rtr6);


	// QUESTION SEVEN RESULT
	var Rtr7 = document.createElement('tr');
	var Rth7 = document.createElement('td');
	Rth7.setAttribute('id','rQuestion7');
	Rtr7.appendChild(Rth7);

	resultsTable.appendChild(Rtr7);

	// QUESTION EIGHT RESULT
	var Rtr8 = document.createElement('tr');
	var Rth8 = document.createElement('td');
	Rth8.setAttribute('id','rQuestion8');
	Rtr8.appendChild(Rth8);

	resultsTable.appendChild(Rtr8);


	// QUESTION NINE RESULT
	var Rtr9 = document.createElement('tr');
	var Rth9 = document.createElement('td');
	Rth9.setAttribute('id','rQuestion9');
	Rtr9.appendChild(Rth9);

	resultsTable.appendChild(Rtr9);

	// QUESTION TEN RESULT
	var Rtr10 = document.createElement('tr');
	var Rth10 = document.createElement('td');
	Rth10.setAttribute('id','rQuestion10');
	Rtr10.appendChild(Rth10);

	resultsTable.appendChild(Rtr10);

	surveyBtn.addEventListener('click',function(){
		var tableS = document.getElementById('summary');
		tableS.appendChild(resultsTable);
	});







});


