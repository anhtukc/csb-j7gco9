/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Fish2 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("fish-a", "./Fish2/costumes/fish-a.svg", { x: 63, y: 45 }),
      new Costume("fish-b", "./Fish2/costumes/fish-b.svg", { x: 63, y: 45 }),
      new Costume("fish-c", "./Fish2/costumes/fish-c.svg", { x: 63, y: 45 }),
      new Costume("fish-d", "./Fish2/costumes/fish-d.svg", { x: 63, y: 45 })
    ];

    this.sounds = [
      new Sound("bubbles", "./Fish2/sounds/bubbles.wav"),
      new Sound("ocean wave", "./Fish2/sounds/ocean wave.wav")
    ];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = true;
    this.stage.vars.IM = 0;
    while (true) {
      this.move(5);
      /* TODO: Implement motion_ifonedgebounce */ null;
      if (this.touching(this.sprites["Shark2"].andClones())) {
        this.stage.vars.IM += 1;
        this.broadcast("Bị ăn");
        this.visible = false;
        this.costumeNumber += 1;
        this.goto(this.random(-240, 240), this.random(-180, 180));
        yield* this.wait(1);
        this.visible = true;
      }
      yield;
    }
  }
}
