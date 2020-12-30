class View {
  constructor(game, $el) {}

  bindEvents() {}

  makeMove($square) {}

  setupBoard() {

    let $ul = $('<ul>').addClass('gridlist')
    $ul.css('display', 'flex').css('width', '310px').css('flex-wrap', 'wrap')

    for (let i=0; i < 9; i++){
     $ul.append($('<li>"A"</li>'))
    }
  }
}



module.exports = View;
