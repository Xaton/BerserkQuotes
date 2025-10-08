let btn = document.querySelector('#new-quote');

let Quote = document.querySelector('.quote');

let Person = document.querySelector('.person');

const quotes =[{
  quote: `"Whether It Suits Them or Not, People Yearn For a Dream."`,
  person: 'Griffith'
},
{
quote:`"He Died Doing What He Wanted, No Matter What, Right? I Bet He Was Happy."`,
person: `Guts`
},
{
quote:`“Struggle, Contend, Wriggle!! For That Alone Is the Sword Of One Who Confronts Death!!"`,
person:`Skull Knight`},
{
  quote:`"At least it is true that man has no control, even over his own will".`,
  person:`Void`
},
{
quote:`“There’s No Paradise for You to Escape to.”`,
person:`Guts`},
{
  quote:`“Fate is a chain that binds all men, but chains can be broken.”`,
  person:`Skull Knight`
},
{
 quote:`“I will fight, even if it kills me… because this is the only way I can protect the people I care about.”`,
 person:`Casca`
},
{
  quote:`“I’m not perfect… but I’ll stay true to what I believe, even if the world doesn’t understand me.”`,
  person:`Serpico`
},
{
  quote:`“Life’s too short to worry all the time… but sometimes the world’s cruelty hits harder than my jokes can fix.”`,
  person:`Puck`
},
{
  quote:`Even if I’m not the strongest, I’ll fight to protect my friends.”`,
  person:`Judeau`

},
{
  quote:`"you are not a victim of fate!" `,
  person:'Guts'
},
{
  quote:`“I can’t fight like Guts or Griffith… maybe my strength lies somewhere else.”`,
  person:'Rickert'
},
{
quote:`“I used to hide behind orders and rules… but now I have to face what I truly am.”`,
person:`Farnese`
},
{
  quote:`“Desire is the root of suffering, yet it is the sweetest of chains.”`,
  person:`Slan`
},
{
  quote:`“Do you not see? All events have already been written. You cannot escape fate.”`,
  person:`Void`
},
{
  quote:`“Nothing is born without pain, nothing dies without meaning.”`,
  person:`Conrad`
},
];


function unleashWord(){
 let Random = Math.floor(Math.random() * quotes.length);
 Quote.innerText = quotes[Random].quote;
 Person.innerText = quotes[Random].person;
}
btn.addEventListener('click', unleashWord);

