import { makeScene2D } from "@motion-canvas/2d/lib/scenes";
import { makeRefs } from "@motion-canvas/core/lib/utils";
import { any, all, chain, delay, waitFor } from "@motion-canvas/core/lib/flow";
import Key, { KeyTravel } from "../../components/Key";
import Output from "../../components/Output";
import { linear } from "@motion-canvas/core/lib/tweening";

export default makeScene2D(function* (view) {
  const interrupt = makeRefs<typeof Key>();
  view.add(<Key refs={interrupt} binding={"&kp"} params={"J"} />);
  interrupt.group.position.x(125);
  interrupt.group.position.y(-150);
  interrupt.duration.fill("#D9D9D9");

  const hold = makeRefs<typeof Key>();
  view.add(<Key refs={hold} binding={"&ht_tp"} params={"\u21e7 F"} />);
  hold.group.position.x(-125);
  hold.group.position.y(-150);
  hold.duration.fill("#D9D9D9");

  const hold_output = makeRefs<typeof Output>();
  view.add(<Output refs={hold_output} />);
  hold_output.group.position(hold.group.position().addX(125));
  hold_output.group.position.y(hold_output.group.position.y() + 300);

  yield* waitFor(0.5);
  yield* any(
    hold.body.position.y(KeyTravel, 0.15),
    hold.duration.grow(0.5, 1, linear)
  );
  yield* delay(
    0.35,
    all(
      interrupt.body.position.y(KeyTravel, 0.15),
      hold.duration.fill("F21D00", 0.15)
    )
  );
  yield* delay(
    0.35,
    chain(
      hold.body.position.y(0, 0.15),
      hold.group.rotation(3, 0.03),
      hold.group.rotation(-3, 0.06),
      hold.group.rotation(0, 0.03),
      hold.duration.grow(0, 0.15),
      delay(0.05, hold_output.output.text("f", 0)),
      delay(0.05, hold_output.output.text("fj", 0))
    )
  );
  yield* waitFor(0.25);
  yield* interrupt.body.position.y(0, 0.15);
  yield* waitFor(1);
});
