import { Context } from "../context/context.js";
import ora, { Options, Ora } from "ora";

export const useSpinners = Context.memo(() => {
  const spinners: Ora[] = [];
  return spinners;
});

export function createSpinner(options: Options | string) {
  const spinners = useSpinners();
  const next = ora(options);
  spinners.push(next);
  return next;
}
