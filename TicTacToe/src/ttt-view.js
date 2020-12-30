class View {
  constructor(game, $el) {
    $el.append(this.setupBoard());
  }

  bindEvents() {
    $('ul').on('click', game.playMove);
  }

  makeMove($square) {
    
  }

  setupBoard() {
    
    let $ul = $('<ul>').addClass('gridlist')
    $ul.css('display', 'flex').css('width', '309px').css('flex-wrap', 'wrap')
    $ul.css('list-style-type', 'none')

    for (let i=0; i < 9; i++){
      let $li = $('<li>?</li>')
      $li.css('box-sizing', 'border-box').css('border-style', 'solid').css('width', '103px').css('background-color', 'grey')
      $li.hover(
        function () {
          $(this).css('background-color', 'yellow')
        },
        function () {
          $(this).css('background-color', 'grey')
        })
      $ul.append($li)
    };
    return $ul
  }
}



module.exports = View;
