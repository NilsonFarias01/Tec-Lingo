const SHOW_FAQ_ANSWER_BUTTONS = document.querySelectorAll(
  '.show-faq-answer-button'
);

const DOWN_ARROW_ICON = `
<svg
  version="1.1"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"
  viewBox="0 0 330 330"
  xml:space="preserve"
>
  <path
    id="XMLID_225_"
    d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393
c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393
s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"
  />
</svg>
`;
const CLOSE_FAQ_ANSWER_ICON = `
<svg
  version="1.1"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"
  viewBox="0 0 26 26"
  xml:space="preserve"
>
  <g>
    <path
      d="M21.125,0H4.875C2.182,0,0,2.182,0,4.875v16.25C0,23.818,2.182,26,4.875,26h16.25
C23.818,26,26,23.818,26,21.125V4.875C26,2.182,23.818,0,21.125,0z M18.78,17.394l-1.388,1.387c-0.254,0.255-0.67,0.255-0.924,0
L13,15.313L9.533,18.78c-0.255,0.255-0.67,0.255-0.925-0.002L7.22,17.394c-0.253-0.256-0.253-0.669,0-0.926l3.468-3.467
L7.221,9.534c-0.254-0.256-0.254-0.672,0-0.925l1.388-1.388c0.255-0.257,0.671-0.257,0.925,0L13,10.689l3.468-3.468
c0.255-0.257,0.671-0.257,0.924,0l1.388,1.386c0.254,0.255,0.254,0.671,0.001,0.927l-3.468,3.467l3.468,3.467
C19.033,16.725,19.033,17.138,18.78,17.394z"
    />
  </g>
</svg>
`;

function toggleFaqAnswer() {
  let faq_question_div = this.parentElement.parentElement;
  faq_question_div.classList.toggle('active');

  if (faq_question_div.classList.contains('active')) {
    this.innerHTML = CLOSE_FAQ_ANSWER_ICON;
  } else {
    this.innerHTML = DOWN_ARROW_ICON;
  }
}

SHOW_FAQ_ANSWER_BUTTONS.forEach(showFaqAnswerButton => {
  showFaqAnswerButton.addEventListener('click', toggleFaqAnswer);
});


function voltarPagina() {
  window.history.back();
}
