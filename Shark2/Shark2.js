/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Shark2 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("shark2-a", "./Shark2/costumes/shark2-a.svg", {
        x: 75,
        y: 75
      }),
      new Costume("shark2-a2", "./Shark2/costumes/shark2-a2.svg", {
        x: 70.50024002608967,
        y: 56.99999914306133
      }),
      new Costume("shark2-b", "./Shark2/costumes/shark2-b.svg", {
        x: 75,
        y: 75
      }),
      new Costume("shark2-c", "./Shark2/costumes/shark2-c.svg", {
        x: 77,
        y: 37
      })
    ];

    this.sounds = [
      new Sound("Water drop", "./Shark2/sounds/Water drop.wav"),
      new Sound("Bite", "./Shark2/sounds/Bite.wav"),
      new Sound("Water drop", "./Shark2/sounds/Water drop.wav")
    ];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "Bị ăn" }, this.whenIReceiveBN),
      new Trigger(
        Trigger.BROADCAST,
        { name: "ăn cá độc" },
        this.whenIReceiveNCC
      )
    ];
  }

  *whenGreenFlagClicked() {
    this.size = 50;
    this.rotationStyle = Sprite.RotationStyle.LEFT_RIGHT;
    while (true) {
      if (this.keyPressed("up arrow")) {
        this.y += 5;
      }
      if (this.keyPressed("down arrow")) {
        this.y += -5;
      }
      if (this.keyPressed("left arrow")) {
        this.direction = -90;
        this.x += -5;
      }
      if (this.keyPressed("right arrow")) {
        this.direction = 90;
        this.x += 5;
      }
      yield;
    }
  }

  *whenIReceiveBN() {
    this.costume = "shark2-b";
    yield* this.playSoundUntilDone("Bite");
    if (this.stage.vars.IM < 50) {
      this.size += 2;
    }
    this.costume = "shark2-a";
  }

  *whenIReceiveNCC() {
    this.costume = "shark2-a2";
    yield* this.playSoundUntilDone("Bite");
    if (this.stage.vars.IM < 50) {
      this.size += -10;
    }
    yield* this.wait(1);
    this.costume = "shark2-a";
  }
}
