//Equality of	three values: 5PTS

function equal(a,b,c){
    if(a===b && b===c){
          return true;
      }else{
      return false;
    }}
  //console.log(equal(3,1,1))
  console.log("******************* fonction 1 *******************");
  console.log	(equal(1,1,3))	 
  console.log	(equal("test","test","test"))	
 
  //Convert Minutes to seconds:	10PTS
  function convert(min){
    min*=60;
    return min;
}
let minute=6;

console.log("******************* fonction 2 *******************");
console.log(minute + " minutes = " + convert(minute)+" secondes");


// Return	the	Area of	a rectangle: 5PTS
function rectangle(a,b){
    return a*b;
}
console.log("******************* fonction 3 *******************");
console.log("la surface du rectangle est :" + rectangle(5,2));
 
// The	next number: 5PTS
function next(a){
    return a+=1;
}
console.log("******************* fonction 4 *******************");
console.log("le nombre prochain est :" + next(6));

// Football Points: 10PTS

function football(win,draws,defeats){
    win*=3;
    defeats=0;
    let sum=win+draws+defeats;
    return sum;
  }
console.log("******************* fonction 5 *******************");
console.log(football(1,2,1));
console.log(football(0,0,4));

//   Between 100 AND 200: 5PTS
function between(a){
    return (typeof(a)==="number" && a>=100 && a<=200)
}
console.log("******************* fonction 6 *******************");
console.log(between(120));
console.log(between(12));

//   Hours	and	minutes	to	seconds:	 15PTS
function seconde(hours,minutes){
    hours*=3600;
    minutes*=60;
    let secondes = hours+minutes;
  return secondes;
  }
console.log("******************* fonction 7 *******************");
console.log(seconde(1,30));
console.log(seconde(0,6));

  // Equality check: 15PTS
  function check(a,b){
    if(a===b && typeof(a)===typeof(b)){
        return true;
    }else{
    return false;
  }}
console.log("******************* fonction 8 *******************");
console.log(check(1,2));
console.log(check(6,6));
console.log(check(10,"10"));

//Compare	Strings	by	 Count	of	Characters:	 10PTS
function compareStrings(s,v){
    if(s.length > v.length){
      return "The first string is taller"
    }else{
      return "The second string is taller"
    }
   }
console.log("******************* fonction 9 *******************");
console.log(compareStrings("mahmoudi","yasmine"));


// Unique	Chars	count:	 15PTS
function uniqueCharsCount(s){
  let v= [... new Set(s)];
  let a=v.length;
  return a;
  }
console.log("******************* fonction 10 *******************");
 console.log(uniqueCharsCount("Go My code"))	;
 console.log(uniqueCharsCount("aaaaa"));

  // Concatenate	First	And	Last	Name:	15PTS
  function Fullname(s,v){
    return s+" "+v;
  }
  console.log("******************* fonction 11 *******************");
  console.log(Fullname("mahmoudi","yasmine"));


  // Find	the	index	of	an	item	in	an	array:	 15PTS
function index(tab,a){
  let v;
  for(var i = 0; i < tab.length; i++){
    if(a===tab[i]){
      return i;
    }else{v=0;}
   }
   if (v===0){
     return -1;
   }
}
console.log("******************* fonction 12 *******************");
console.log(index(["Blue", "Red", "Orange", "Green"],"Orange"));
console.log(index([2,10,3],2));
console.log(index([0,3,20,15],7));

// Is	in	range	:	isInRange(4,{min:2,max,10}):	 


function 	inRange(a,{min,max}){
  if(a > min && a < max){
    return true;
  }else{ return false;}
  }
  console.log("******************* fonction 13 *******************");
  console.log(inRange(25,{min:10,max:100}));
  console.log(inRange(10,	{min:3,max:20}));
  console.log	(inRange(5,	{min:12,max:20}));

  // Max	of	an	array:	 15PTS

  function maxArray(tab){
    let max=tab[0];
    for(var i = 0; i < tab.length; i++){
      if(max < tab[i]){
        max=tab[i];
      }
     }
       return max;
     }
   console.log("******************* fonction 14 *******************");
   console.log(maxArray([1,2,56,32,1,3]));
   console.log(maxArray([4,2,20,24,18])); 

  //  Convert	a	number	to	a	month:	 10PTS

  function monthName(a) {
    switch(a) {
	case 1:
		return "Janvier";
		break;
	case 2:
		return "Fevrier";
		break;
  case 3:
		return "Mars";
		break;
  case 4:
		return "Avril";
		break;
	case 5:
		return "Mai";
		break;
  case 6:
		return "Juin";
		break;
  case 7:
		return "Juillet";
		break;
  case 8:
		return "Aout";
		break;
  case 9:
		return "Septembre";
		break;
  case 10:
		return "Octobre";
		break;
  case 11:
		return "Novembre";
		break;
  case 12:
		return "Decembre";
		break;
	default:
		return "Unknown month" ;
	}
}
console.log("******************* fonction 15 *******************");
console.log(monthName(13));
console.log(monthName(1));
console.log(monthName(7));

// Factorial:	 20PTS

function factorial(n){
  var i, n, f = 1;
  for(i = 1; i <= n; i++)  
  {
    f = f * i;
  }  
  return f;
}
console.log("******************* fonction 16 *******************");
console.log("le factoriel de 4 est: " + factorial(4));
console.log("le factoriel de 5 est: " + factorial(5));