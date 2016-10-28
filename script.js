

var quotes = [
	// Array for all the random quotes.
	'The man who coined the phrase \"Money can\'t buy happiness\", never bought himself a good fly rod! ~Reg Baird',
	'Angling may be said to be so like the mathematics that it can never be fully learnt. ~Izaak Walton',
	'Angling may be said to be so like the mathematics that it can never be fully learnt. ~Izaak Walton',
	'To go fishing is the chance to wash one\'s soul with pure air, with the rush of the brook, or with the shimmer of sun on blue water. It brings meekness and inspiration from the decency of nature, charity toward tackle-makers, patience toward fish, a mockery of profits and egos, a quieting of hate, a rejoicing that you do not have to decide a darned thing until next week. And it is discipline in the equality of men - for all men are equal before fish. ~Herbert Hoover',
	'Many go fishing all their lives without knowing that it is not fish they are after. ~Henry David Thoreau',
	'There\’s always a hot new fly. Precious few of these patterns are genuine breakthroughs destined to last for a hundred years, but more often they\'re idle comments on existing traditions, explorations of half-baked theories, attempts to use new and interesting materials, to impress other tiers, or excuses to rename old patterns. The results are often pointless fads like the craze in some pretentious restaurants of plopping fried quail eggs on everything or calling sandwiches \“paninis\". ~John Gierach',
	'Things fishermen know about Trout aren\'t facts, but articles of faith. ~John Gierach',
	'As no man is born an artist, so no man is born an angler. ~Izaak Walton',
	'Be patient and calm - for no one can catch fish in anger. ~Herbert Hoover ',
	'Listen to the sound of the river and you will get a trout. ~Irish proverb'
]

function newQuote() {

var randomNumber = Math.floor(Math.random() * (quotes.length));
	// The "logic" behind finding out which slot of the array we access.

document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
	//Writes to the HTML document.
}


