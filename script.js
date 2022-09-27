const $ask__title = document.querySelector('.ask__title');
const $ask__answer = document.querySelector('.ask__answer');
// Buttons
const $player__generals = document.querySelector('.player--generals');
const $player__naimarys = document.querySelector('.player--naimarys');
const $player__denyerly = document.querySelector('.player--denyerly');
const $player__susej = document.querySelector('.player--susej');

const isGenerateAksGenerals = () => {
	const index = Math.floor(Math.random()*generals.length);
	$ask__title.innerHTML = generals[index].ask;
	$ask__answer.innerHTML = generals[index].res;
};

const isGenerateAksNaimarys = () => {
	const index = Math.floor(Math.random()*naimarys.length);
	$ask__title.innerHTML = naimarys[index].ask;
	$ask__answer.innerHTML = naimarys[index].res;
};

const isGenerateAksDenyerly = () => {
	const index = Math.floor(Math.random()*denyerly.length);
	$ask__title.innerHTML = denyerly[index].ask;
	$ask__answer.innerHTML = denyerly[index].res;
};

const isGenerateAksSusej = () => {
	const index = Math.floor(Math.random()*susej.length);
	$ask__title.innerHTML = susej[index].ask;
	$ask__answer.innerHTML = susej[index].res;
};

$player__generals.addEventListener('click', isGenerateAksGenerals);
$player__naimarys.addEventListener('click', isGenerateAksNaimarys);
$player__denyerly.addEventListener('click', isGenerateAksDenyerly);
$player__susej.addEventListener('click', isGenerateAksSusej);

