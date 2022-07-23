/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class PoisonFish extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("fish-a", "./PoisonFish/costumes/fish-a.svg", {
        x: 57.14999814814823,
        y: 31.930941860817
      })
    ];

    this.sounds = [
      new Sound("bubbles", "./PoisonFish/sounds/bubbles.wav"),
      new Sound("ocean wave", "./PoisonFish/sounds/ocean wave.wav")
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
        this.stage.vars.IM += -1;
        this.broadcast("ăn cá độc");
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
