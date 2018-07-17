// @flow
import type { AwesomeType } from "ischool-sdk";

const e: AwesomeType = {
  a: 1,
  b: 2,
  sum: () => e.a + e.b
};

export default e;
