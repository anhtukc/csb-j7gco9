import { Project } from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import Shark2 from "./Shark2/Shark2.js";
import Fish2 from "./Fish2/Fish2.js";
import PoisonFish from "./PoisonFish/PoisonFish.js";

const stage = new Stage({ costumeNumber: 2 });

const sprites = {
  Shark2: new Shark2({
    x: 109,
    y: 49,
    direction: 90,
    costumeNumber: 1,
    size: 32,
    visible: true
  }),
  Fish2: new Fish2({
    x: -86.08980814339175,
    y: -47.60227802132758,
    direction: -108.40303607587728,
    costumeNumber: 1,
    size: 40,
    visible: true
  }),
  PoisonFish: new PoisonFish({
    x: 90.75244437728848,
    y: 17.348245884067623,
    direction: 108.40303607587728,
    costumeNumber: 1,
    size: 40,
    visible: true
  })
};

const project = new Project(stage, sprites);
export default project;
