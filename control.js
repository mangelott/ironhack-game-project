class Control {
  constructor (game) {
    this.game=game;
  }

  setKeyBindings () {
    window.addEventListener('keydown', event => {
      const key = event.keyCode;
      if (key >= 37 && key <= 40) {
        event.preventDefault();
        switch (key) {
          case 37:
            this.game.controls.left();
            break;
          case 38:
            this.game.controls.up();
            break;
          case 39:
            this.game.controls.right();
            break;
          case 40:
            this.game.controls.down();
            break;
        }
      }
    });
  }
  
}