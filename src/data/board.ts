/**
 * Single-board vase layout: exactly 10 vases arranged 2 rows x 5 columns.
 *
 * Vase positions are expressed as percentages **inside the playfield** (the
 * green lawn), NOT the full 16:9 board image. The board background also paints
 * a house, stone paths, a doormat and a tricycle on the left/edges — those are
 * decorative and NOT playable. `PLAYFIELD_BOUNDS` carves out only the grass, and
 * `GameBoard` renders the vases inside that layer, so a vase can never land on
 * the house or walkway regardless of board size.
 */
export type VaseLayout = {
  id: string;
  /** Horizontal center, % of the playfield width. */
  x: number;
  /** Vertical center, % of the playfield height. */
  y: number;
};

/** Set true to outline the playfield + cells while tuning the bounds. */
export const DEBUG_PLAYFIELD = false;

/** The grass lawn, as a sub-rectangle of the full 16:9 board. */
export const PLAYFIELD_BOUNDS = {
  left: "32%",
  top: "14%",
  width: "58%",
  height: "72%",
} as const;

export const VASE_ROWS = 2;
export const VASE_COLS = 5;

export const VASE_LAYOUT: VaseLayout[] = Array.from({
  length: VASE_ROWS * VASE_COLS,
}).map((_, index) => {
  const row = Math.floor(index / VASE_COLS);
  const col = index % VASE_COLS;
  return {
    id: `vase-${index + 1}`,
    x: ((col + 0.5) / VASE_COLS) * 100,
    y: ((row + 0.5) / VASE_ROWS) * 100,
  };
});

export const TOTAL_VASES = VASE_LAYOUT.length;
