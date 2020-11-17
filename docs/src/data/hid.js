/*
 * Copyright (c) 2020 The ZMK Contributors
 *
 * SPDX-License-Identifier: CC-BY-NC-SA-4.0
 */

import {
  keyboard as keyboardApplication,
  consumer as consumerApplication,
} from "./hid-applications";

import { key as keyPage, consumer as consumerPage } from "./hid-usage-pages";

import usage from "../hid-usage";

export default [
  {
    names: ["A"],
    description: "a and A",
    context: "Keyboard",
    clarify: false,
    usages: [
      {
        application: keyboardApplication,
        item: usage(keyPage, 0x04),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=83",
    os: {
      // A
      windows: true,
      linux: true,
      android: true,
      macos: true,
      ios: true,
    },
    footnotes: {},
  },
  {
    names: ["B"],
    description: "b and B",
    context: "Keyboard",
    clarify: false,
    usages: [
      {
        application: keyboardApplication,
        item: usage(keyPage, 0x05),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=83",
    os: {
      // B
      windows: true,
      linux: true,
      android: true,
      macos: true,
      ios: true,
    },
    footnotes: {},
  },
  {
    names: ["C"],
    description: "c and C",
    context: "Keyboard",
    clarify: false,
    usages: [
      {
        application: keyboardApplication,
        item: usage(keyPage, 0x06),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=83",
    os: {
      // C
      windows: true,
      linux: true,
      android: true,
      macos: true,
      ios: true,
    },
    footnotes: {},
  },
  {
    names: ["D"],
    description: "d and D",
    context: "Keyboard",
    clarify: false,
    usages: [
      {
        application: keyboardApplication,
        item: usage(keyPage, 0x07),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=83",
    os: {
      // D
      windows: true,
      linux: true,
      android: true,
      macos: true,
      ios: true,
    },
    footnotes: {},
  },
  {
    names: ["E"],
    description: "e and E",
    context: "Keyboard",
    clarify: false,
    usages: [
      {
        application: keyboardApplication,
        item: usage(keyPage, 0x08),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=83",
    os: {
      // E
      windows: true,
      linux: true,
      android: true,
      macos: true,
      ios: true,
    },
    footnotes: {},
  },
  {
    names: ["F"],
    description: "f and F",
    context: "Keyboard",
    clarify: false,
    usages: [
      {
        application: keyboardApplication,
        item: usage(keyPage, 0x09),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=83",
    os: {
      // F
      windows: true,
      linux: true,
      android: true,
      macos: true,
      ios: true,
    },
    footnotes: {},
  },
  {
    names: ["G"],
    description: "g and G",
    context: "Keyboard",
    clarify: false,
    usages: [
      {
        application: keyboardApplication,
        item: usage(keyPage, 0x0a),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=83",
    os: {
      // G
      windows: true,
      linux: true,
      android: true,
      macos: true,
      ios: true,
    },
    footnotes: {},
  },
  {
    names: ["H"],
    description: "h and H",
    context: "Keyboard",
    clarify: false,
    usages: [
      {
        application: keyboardApplication,
        item: usage(keyPage, 0x0b),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=83",
    os: {
      // H
      windows: true,
      linux: true,
      android: true,
      macos: true,
      ios: true,
    },
    footnotes: {},
  },
  {
    names: ["I"],
    description: "i and I",
    context: "Keyboard",
    clarify: false,
    usages: [
      {
        application: keyboardApplication,
        item: usage(keyPage, 0x0c),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=83",
    os: {
      // I
      windows: true,
      linux: true,
      android: true,
      macos: true,
      ios: true,
    },
    footnotes: {},
  },
  {
    names: ["J"],
    description: "j and J",
    context: "Keyboard",
    clarify: false,
    usages: [
      {
        application: keyboardApplication,
        item: usage(keyPage, 0x0d),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=83",
    os: {
      // J
      windows: true,
      linux: true,
      android: true,
      macos: true,
      ios: true,
    },
    footnotes: {},
  },
  {
    names: ["K"],
    description: "k and K",
    context: "Keyboard",
    clarify: false,
    usages: [
      {
        application: keyboardApplication,
        item: usage(keyPage, 0x0e),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=83",
    os: {
      // K
      windows: true,
      linux: true,
      android: true,
      macos: true,
      ios: true,
    },
    footnotes: {},
  },
  {
    names: ["L"],
    description: "l and L",
    context: "Keyboard",
    clarify: false,
    usages: [
      {
        application: keyboardApplication,
        item: usage(keyPage, 0x0f),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=83",
    os: {
      // L
      windows: true,
      linux: true,
      android: true,
      macos: true,
      ios: true,
    },
    footnotes: {},
  },
  {
    names: ["M"],
    description: "m and M",
    context: "Keyboard",
    clarify: false,
    usages: [
      {
        application: keyboardApplication,
        item: usage(keyPage, 0x10),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=83",
    os: {
      // M
      windows: true,
      linux: true,
      android: true,
      macos: true,
      ios: true,
    },
    footnotes: {},
  },
  {
    names: ["N"],
    description: "n and N",
    context: "Keyboard",
    clarify: false,
    usages: [
      {
        application: keyboardApplication,
        item: usage(keyPage, 0x11),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=83",
    os: {
      // N
      windows: true,
      linux: true,
      android: true,
      macos: true,
      ios: true,
    },
    footnotes: {},
  },
  {
    names: ["O"],
    description: "o and O",
    context: "Keyboard",
    clarify: false,
    usages: [
      {
        application: keyboardApplication,
        item: usage(keyPage, 0x12),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=83",
    os: {
      // O
      windows: true,
      linux: true,
      android: true,
      macos: true,
      ios: true,
    },
    footnotes: {},
  },
  {
    names: ["P"],
    description: "p and P",
    context: "Keyboard",
    clarify: false,
    usages: [
      {
        application: keyboardApplication,
        item: usage(keyPage, 0x13),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=83",
    os: {
      // P
      windows: true,
      linux: true,
      android: true,
      macos: true,
      ios: true,
    },
    footnotes: {},
  },
  {
    names: ["Q"],
    description: "q and Q",
    context: "Keyboard",
    clarify: false,
    usages: [
      {
        application: keyboardApplication,
        item: usage(keyPage, 0x14),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=83",
    os: {
      // Q
      windows: true,
      linux: true,
      android: true,
      macos: true,
      ios: true,
    },
    footnotes: {},
  },
  {
    names: ["R"],
    description: "r and R",
    context: "Keyboard",
    clarify: false,
    usages: [
      {
        application: keyboardApplication,
        item: usage(keyPage, 0x15),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=83",
    os: {
      // R
      windows: true,
      linux: true,
      android: true,
      macos: true,
      ios: true,
    },
    footnotes: {},
  },
  {
    names: ["S"],
    description: "s and S",
    context: "Keyboard",
    clarify: false,
    usages: [
      {
        application: keyboardApplication,
        item: usage(keyPage, 0x16),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=83",
    os: {
      // S
      windows: true,
      linux: true,
      android: true,
      macos: true,
      ios: true,
    },
    footnotes: {},
  },
  {
    names: ["T"],
    description: "t and T",
    context: "Keyboard",
    clarify: false,
    usages: [
      {
        application: keyboardApplication,
        item: usage(keyPage, 0x17),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=83",
    os: {
      // T
      windows: true,
      linux: true,
      android: true,
      macos: true,
      ios: true,
    },
    footnotes: {},
  },
  {
    names: ["U"],
    description: "u and U",
    context: "Keyboard",
    clarify: false,
    usages: [
      {
        application: keyboardApplication,
        item: usage(keyPage, 0x18),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=83",
    os: {
      // U
      windows: true,
      linux: true,
      android: true,
      macos: true,
      ios: true,
    },
    footnotes: {},
  },
  {
    names: ["V"],
    description: "v and V",
    context: "Keyboard",
    clarify: false,
    usages: [
      {
        application: keyboardApplication,
        item: usage(keyPage, 0x19),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=84",
    os: {
      // V
      windows: true,
      linux: true,
      android: true,
      macos: true,
      ios: true,
    },
    footnotes: {},
  },
  {
    names: ["W"],
    description: "w and W",
    context: "Keyboard",
    clarify: false,
    usages: [
      {
        application: keyboardApplication,
        item: usage(keyPage, 0x1a),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=84",
    os: {
      // W
      windows: true,
      linux: true,
      android: true,
      macos: true,
      ios: true,
    },
    footnotes: {},
  },
  {
    names: ["X"],
    description: "x and X",
    context: "Keyboard",
    clarify: false,
    usages: [
      {
        application: keyboardApplication,
        item: usage(keyPage, 0x1b),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=84",
    os: {
      // X
      windows: true,
      linux: true,
      android: true,
      macos: true,
      ios: true,
    },
    footnotes: {},
  },
  {
    names: ["Y"],
    description: "y and Y",
    context: "Keyboard",
    clarify: false,
    usages: [
      {
        application: keyboardApplication,
        item: usage(keyPage, 0x1c),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=84",
    os: {
      // Y
      windows: true,
      linux: true,
      android: true,
      macos: true,
      ios: true,
    },
    footnotes: {},
  },
  {
    names: ["Z"],
    description: "z and Z",
    context: "Keyboard",
    clarify: false,
    usages: [
      {
        application: keyboardApplication,
        item: usage(keyPage, 0x1d),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=84",
    os: {
      // Z
      windows: true,
      linux: true,
      android: true,
      macos: true,
      ios: true,
    },
    footnotes: {},
  },
  {
    names: ["NUMBER_1", "N1"],
    description: "1 and ! [Exclamation]",
    context: "Keyboard",
    clarify: false,
    usages: [
      {
        application: keyboardApplication,
        item: usage(keyPage, 0x1e),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=84",
    os: {
      // NUMBER_1
      windows: true,
      linux: true,
      android: true,
      macos: true,
      ios: true,
    },
    footnotes: {},
  },
  {
    names: ["EXCLAMATION", "EXCL"],
    description: "! [Exclamation]",
    context: "Keyboard",
    clarify: false,
    usages: [
      {
        application: keyboardApplication,
        item: usage(keyPage, 0x1e),
      },
      {
        application: keyboardApplication,
        item: usage(keyPage, 0xe1),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=84",
    os: {
      // EXCLAMATION
      windows: true,
      linux: true,
      android: true,
      macos: true,
      ios: true,
    },
    footnotes: {},
  },
  {
    names: ["NUMBER_2", "N2"],
    description: "2 and @ [At Sign]",
    context: "Keyboard",
    clarify: false,
    usages: [
      {
        application: keyboardApplication,
        item: usage(keyPage, 0x1f),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=84",
    os: {
      // NUMBER_2
      windows: true,
      linux: true,
      android: true,
      macos: true,
      ios: true,
    },
    footnotes: {},
  },
  {
    names: ["AT_SIGN", "AT"],
    description: "@ [At Sign]",
    context: "Keyboard",
    clarify: false,
    usages: [
      {
        application: keyboardApplication,
        item: usage(keyPage, 0x1f),
      },
      {
        application: keyboardApplication,
        item: usage(keyPage, 0xe1),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=84",
    os: {
      // AT_SIGN
      windows: true,
      linux: true,
      android: true,
      macos: true,
      ios: true,
    },
    footnotes: {},
  },
  {
    names: ["NUMBER_3", "N3"],
    description: "3 and # [Hash / Pound]",
    context: "Keyboard",
    clarify: false,
    usages: [
      {
        application: keyboardApplication,
        item: usage(keyPage, 0x20),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=84",
    os: {
      // NUMBER_3
      windows: true,
      linux: true,
      android: true,
      macos: true,
      ios: true,
    },
    footnotes: {},
  },
  {
    names: ["HASH", "POUND"],
    description: "# [Hash / Pound]",
    context: "Keyboard",
    clarify: false,
    usages: [
      {
        application: keyboardApplication,
        item: usage(keyPage, 0x20),
      },
      {
        application: keyboardApplication,
        item: usage(keyPage, 0xe1),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=84",
    os: {
      // HASH
      windows: true,
      linux: true,
      android: true,
      macos: true,
      ios: true,
    },
    footnotes: {},
  },
  {
    names: ["NUMBER_4", "N4"],
    description: "4 and $ [Dollar]",
    context: "Keyboard",
    clarify: false,
    usages: [
      {
        application: keyboardApplication,
        item: usage(keyPage, 0x21),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=84",
    os: {
      // NUMBER_4
      windows: true,
      linux: true,
      android: true,
      macos: true,
      ios: true,
    },
    footnotes: {},
  },
  {
    names: ["DOLLAR", "DLLR"],
    description: "$ [Dollar]",
    context: "Keyboard",
    clarify: false,
    usages: [
      {
        application: keyboardApplication,
        item: usage(keyPage, 0x21),
      },
      {
        application: keyboardApplication,
        item: usage(keyPage, 0xe1),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=84",
    os: {
      // DOLLAR
      windows: true,
      linux: true,
      android: true,
      macos: true,
      ios: true,
    },
    footnotes: {},
  },
  {
    names: ["NUMBER_5", "N5"],
    description: "5 and % [Percent]",
    context: "Keyboard",
    clarify: false,
    usages: [
      {
        application: keyboardApplication,
        item: usage(keyPage, 0x22),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=84",
    os: {
      // NUMBER_5
      windows: true,
      linux: true,
      android: true,
      macos: true,
      ios: true,
    },
    footnotes: {},
  },
  {
    names: ["PERCENT", "PRCNT"],
    description: "% [Percent]",
    context: "Keyboard",
    clarify: false,
    usages: [
      {
        application: keyboardApplication,
        item: usage(keyPage, 0x22),
      },
      {
        application: keyboardApplication,
        item: usage(keyPage, 0xe1),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=84",
    os: {
      // PERCENT
      windows: true,
      linux: true,
      android: true,
      macos: true,
      ios: true,
    },
    footnotes: {},
  },
  {
    names: ["NUMBER_6", "N6"],
    description: "6 and ^ [Caret]",
    context: "Keyboard",
    clarify: false,
    usages: [
      {
        application: keyboardApplication,
        item: usage(keyPage, 0x23),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=84",
    os: {
      // NUMBER_6
      windows: true,
      linux: true,
      android: true,
      macos: true,
      ios: true,
    },
    footnotes: {},
  },
  {
    names: ["CARET"],
    description: "^ [Caret]",
    context: "Keyboard",
    clarify: false,
    usages: [
      {
        application: keyboardApplication,
        item: usage(keyPage, 0x23),
      },
      {
        application: keyboardApplication,
        item: usage(keyPage, 0xe1),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=84",
    os: {
      // CARET
      windows: true,
      linux: true,
      android: true,
      macos: true,
      ios: true,
    },
    footnotes: {},
  },
  {
    names: ["NUMBER_7", "N7"],
    description: "7 and & [Ampersand]",
    context: "Keyboard",
    clarify: false,
    usages: [
      {
        application: keyboardApplication,
        item: usage(keyPage, 0x24),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=84",
    os: {
      // NUMBER_7
      windows: true,
      linux: true,
      android: true,
      macos: true,
      ios: true,
    },
    footnotes: {},
  },
  {
    names: ["AMPERSAND", "AMPS"],
    description: "& [Ampersand]",
    context: "Keyboard",
    clarify: false,
    usages: [
      {
        application: keyboardApplication,
        item: usage(keyPage, 0x24),
      },
      {
        application: keyboardApplication,
        item: usage(keyPage, 0xe1),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=84",
    os: {
      // AMPERSAND
      windows: true,
      linux: true,
      android: true,
      macos: true,
      ios: true,
    },
    footnotes: {},
  },
  {
    names: ["NUMBER_8", "N8"],
    description: "8 and * [Asterisk / Star]",
    context: "Keyboard",
    clarify: false,
    usages: [
      {
        application: keyboardApplication,
        item: usage(keyPage, 0x25),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=84",
    os: {
      // NUMBER_8
      windows: true,
      linux: true,
      android: true,
      macos: true,
      ios: true,
    },
    footnotes: {},
  },
  {
    names: ["ASTERISK", "ASTRK", "STAR"],
    description: "* [Asterisk / Star]",
    context: "Keyboard",
    clarify: false,
    usages: [
      {
        application: keyboardApplication,
        item: usage(keyPage, 0x25),
      },
      {
        application: keyboardApplication,
        item: usage(keyPage, 0xe1),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=84",
    os: {
      // ASTERISK
      windows: true,
      linux: true,
      android: true,
      macos: true,
      ios: true,
    },
    footnotes: {},
  },
  {
    names: ["NUMBER_9", "N9"],
    description: "9 and ( [Left Parenthesis]",
    context: "Keyboard",
    clarify: false,
    usages: [
      {
        application: keyboardApplication,
        item: usage(keyPage, 0x26),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=84",
    os: {
      // NUMBER_9
      windows: true,
      linux: true,
      android: true,
      macos: true,
      ios: true,
    },
    footnotes: {},
  },
  {
    names: ["LEFT_PARENTHESIS", "LPAR"],
    description: "( [Left Parenthesis]",
    context: "Keyboard",
    clarify: false,
    usages: [
      {
        application: keyboardApplication,
        item: usage(keyPage, 0x26),
      },
      {
        application: keyboardApplication,
        item: usage(keyPage, 0xe1),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=84",
    os: {
      // LEFT_PARENTHESIS
      windows: true,
      linux: true,
      android: true,
      macos: true,
      ios: true,
    },
    footnotes: {},
  },
  {
    names: ["NUMBER_0", "N0"],
    description: "0 and ) [Right Parenthesis]",
    context: "Keyboard",
    clarify: false,
    usages: [
      {
        application: keyboardApplication,
        item: usage(keyPage, 0x27),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=84",
    os: {
      // NUMBER_0
      windows: true,
      linux: true,
      android: true,
      macos: true,
      ios: true,
    },
    footnotes: {},
  },
  {
    names: ["RIGHT_PARENTHESIS", "RPAR"],
    description: ") [Right Parenthesis]",
    context: "Keyboard",
    clarify: false,
    usages: [
      {
        application: keyboardApplication,
        item: usage(keyPage, 0x27),
      },
      {
        application: keyboardApplication,
        item: usage(keyPage, 0xe1),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=84",
    os: {
      // RIGHT_PARENTHESIS
      windows: true,
      linux: true,
      android: true,
      macos: true,
      ios: true,
    },
    footnotes: {},
  },
  {
    names: ["RETURN", "ENTER", "RET"],
    description: "Return (Enter)",
    context: "Keyboard",
    clarify: false,
    usages: [
      {
        application: keyboardApplication,
        item: usage(keyPage, 0x28),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=84",
    os: {
      // RETURN
      windows: true,
      linux: true,
      android: true,
      macos: true,
      ios: true,
    },
    footnotes: {},
  },
  {
    names: ["ESCAPE", "ESC"],
    description: "Escape",
    context: "Keyboard",
    clarify: false,
    usages: [
      {
        application: keyboardApplication,
        item: usage(keyPage, 0x29),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=84",
    os: {
      // ESCAPE
      windows: true,
      linux: true,
      android: true,
      macos: true,
      ios: true,
    },
    footnotes: {},
  },
  {
    names: ["BACKSPACE", "BSPC"],
    description: "Backspace",
    context: "Keyboard",
    clarify: false,
    usages: [
      {
        application: keyboardApplication,
        item: usage(keyPage, 0x2a),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=84",
    os: {
      // BACKSPACE
      windows: true,
      linux: true,
      android: true,
      macos: true,
      ios: true,
    },
    footnotes: {},
  },
  {
    names: ["TAB"],
    description: "Tab",
    context: "Keyboard",
    clarify: false,
    usages: [
      {
        application: keyboardApplication,
        item: usage(keyPage, 0x2b),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=84",
    os: {
      // TAB
      windows: true,
      linux: true,
      android: true,
      macos: true,
      ios: true,
    },
    footnotes: {},
  },
  {
    names: ["SPACE"],
    description: "Space",
    context: "Keyboard",
    clarify: false,
    usages: [
      {
        application: keyboardApplication,
        item: usage(keyPage, 0x2c),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=84",
    os: {
      // SPACE
      windows: true,
      linux: true,
      android: true,
      macos: true,
      ios: true,
    },
    footnotes: {},
  },
  {
    names: ["MINUS"],
    description: "- [Minus] and _ [Underscore]",
    context: "Keyboard",
    clarify: false,
    usages: [
      {
        application: keyboardApplication,
        item: usage(keyPage, 0x2d),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=84",
    os: {
      // MINUS
      windows: true,
      linux: true,
      android: true,
      macos: true,
      ios: true,
    },
    footnotes: {},
  },
  {
    names: ["UNDERSCORE", "UNDER"],
    description: "_ [Underscore]",
    context: "Keyboard",
    clarify: false,
    usages: [
      {
        application: keyboardApplication,
        item: usage(keyPage, 0x2d),
      },
      {
        application: keyboardApplication,
        item: usage(keyPage, 0xe1),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=84",
    os: {
      // UNDERSCORE
      windows: true,
      linux: true,
      android: true,
      macos: true,
      ios: true,
    },
    footnotes: {},
  },
  {
    names: ["EQUAL"],
    description: "= [Equal] and + [Plus]",
    context: "Keyboard",
    clarify: false,
    usages: [
      {
        application: keyboardApplication,
        item: usage(keyPage, 0x2e),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=84",
    os: {
      // EQUAL
      windows: true,
      linux: true,
      android: true,
      macos: true,
      ios: true,
    },
    footnotes: {},
  },
  {
    names: ["PLUS"],
    description: "+ [Plus]",
    context: "Keyboard",
    clarify: false,
    usages: [
      {
        application: keyboardApplication,
        item: usage(keyPage, 0x2e),
      },
      {
        application: keyboardApplication,
        item: usage(keyPage, 0xe1),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=84",
    os: {
      // PLUS
      windows: true,
      linux: true,
      android: true,
      macos: true,
      ios: true,
    },
    footnotes: {},
  },
  {
    names: ["LEFT_BRACKET", "LBKT"],
    description: "[ [Left Bracket] and { [Left Brace]",
    context: "Keyboard",
    clarify: false,
    usages: [
      {
        application: keyboardApplication,
        item: usage(keyPage, 0x2f),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=84",
    os: {
      // LEFT_BRACKET
      windows: true,
      linux: true,
      android: true,
      macos: true,
      ios: true,
    },
    footnotes: {},
  },
  {
    names: ["LEFT_BRACE", "LBRC"],
    description: "{ [Left Brace]",
    context: "Keyboard",
    clarify: false,
    usages: [
      {
        application: keyboardApplication,
        item: usage(keyPage, 0x2f),
      },
      {
        application: keyboardApplication,
        item: usage(keyPage, 0xe1),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=84",
    os: {
      // LEFT_BRACE
      windows: true,
      linux: true,
      android: true,
      macos: true,
      ios: true,
    },
    footnotes: {},
  },
  {
    names: ["RIGHT_BRACKET", "RBKT"],
    description: "] [Right Bracket] and } [Right Brace]",
    context: "Keyboard",
    clarify: false,
    usages: [
      {
        application: keyboardApplication,
        item: usage(keyPage, 0x30),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=84",
    os: {
      // RIGHT_BRACKET
      windows: true,
      linux: true,
      android: true,
      macos: true,
      ios: true,
    },
    footnotes: {},
  },
  {
    names: ["RIGHT_BRACE", "RBRC"],
    description: "} [Right Brace]",
    context: "Keyboard",
    clarify: false,
    usages: [
      {
        application: keyboardApplication,
        item: usage(keyPage, 0x30),
      },
      {
        application: keyboardApplication,
        item: usage(keyPage, 0xe1),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=84",
    os: {
      // RIGHT_BRACE
      windows: true,
      linux: true,
      android: true,
      macos: true,
      ios: true,
    },
    footnotes: {},
  },
  {
    names: ["BACKSLASH", "BSLH"],
    description: "\\ [Backslash] and | [Pipe]",
    context: "Keyboard",
    clarify: false,
    usages: [
      {
        application: keyboardApplication,
        item: usage(keyPage, 0x31),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=84",
    os: {
      // BACKSLASH
      windows: true,
      linux: true,
      android: true,
      macos: true,
      ios: true,
    },
    footnotes: {},
  },
  {
    names: ["PIPE"],
    description: "| [Pipe]",
    context: "Keyboard",
    clarify: false,
    usages: [
      {
        application: keyboardApplication,
        item: usage(keyPage, 0x31),
      },
      {
        application: keyboardApplication,
        item: usage(keyPage, 0xe1),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=84",
    os: {
      // PIPE
      windows: true,
      linux: true,
      android: true,
      macos: true,
      ios: true,
    },
    footnotes: {},
  },
  {
    names: ["NON_US_HASH"],
    description: "Non-US # [Hash/Pound] and ~ [Tilde]",
    context: "Keyboard",
    clarify: false,
    usages: [
      {
        application: keyboardApplication,
        item: usage(keyPage, 0x32),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=84",
    os: {
      // NON_US_HASH
      windows: null,
      linux: true,
      android: true,
      macos: null,
      ios: null,
    },
    footnotes: {},
  },
  {
    names: ["TILDE2"],
    description: "~ [Tilde]",
    context: "Keyboard",
    clarify: false,
    usages: [
      {
        application: keyboardApplication,
        item: usage(keyPage, 0x32),
      },
      {
        application: keyboardApplication,
        item: usage(keyPage, 0xe1),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=84",
    os: {
      // TILDE2
      windows: null,
      linux: true,
      android: true,
      macos: null,
      ios: null,
    },
    footnotes: {},
  },
  {
    names: ["SEMICOLON", "SEMI"],
    description: "; [Semicolon] and : [Colon]",
    context: "Keyboard",
    clarify: false,
    usages: [
      {
        application: keyboardApplication,
        item: usage(keyPage, 0x33),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=84",
    os: {
      // SEMICOLON
      windows: true,
      linux: true,
      android: true,
      macos: true,
      ios: true,
    },
    footnotes: {},
  },
  {
    names: ["COLON"],
    description: ": [Colon]",
    context: "Keyboard",
    clarify: false,
    usages: [
      {
        application: keyboardApplication,
        item: usage(keyPage, 0x33),
      },
      {
        application: keyboardApplication,
        item: usage(keyPage, 0xe1),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=84",
    os: {
      // COLON
      windows: true,
      linux: true,
      android: true,
      macos: true,
      ios: true,
    },
    footnotes: {},
  },
  {
    names: ["SINGLE_QUOTE", "SQT", "APOSTROPHE", "APOS"],
    description: "' [Apostrophe] and \" [Quote (Double)]",
    context: "Keyboard",
    clarify: false,
    usages: [
      {
        application: keyboardApplication,
        item: usage(keyPage, 0x34),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=84",
    os: {
      // SINGLE_QUOTE
      windows: true,
      linux: true,
      android: true,
      macos: true,
      ios: true,
    },
    footnotes: {},
  },
  {
    names: ["DOUBLE_QUOTES", "DQT"],
    description: '" [Quote (Double)]',
    context: "Keyboard",
    clarify: false,
    usages: [
      {
        application: keyboardApplication,
        item: usage(keyPage, 0x34),
      },
      {
        application: keyboardApplication,
        item: usage(keyPage, 0xe1),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=84",
    os: {
      // DOUBLE_QUOTES
      windows: true,
      linux: true,
      android: true,
      macos: true,
      ios: true,
    },
    footnotes: {},
  },
  {
    names: ["GRAVE"],
    description: "` [Grave Accent] and ~ [Tilde]",
    context: "Keyboard",
    clarify: false,
    usages: [
      {
        application: keyboardApplication,
        item: usage(keyPage, 0x35),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=84",
    os: {
      // GRAVE
      windows: true,
      linux: true,
      android: true,
      macos: true,
      ios: true,
    },
    footnotes: {},
  },
  {
    names: ["TILDE"],
    description: "~ [Tilde]",
    context: "Keyboard",
    clarify: false,
    usages: [
      {
        application: keyboardApplication,
        item: usage(keyPage, 0x35),
      },
      {
        application: keyboardApplication,
        item: usage(keyPage, 0xe1),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=84",
    os: {
      // TILDE
      windows: true,
      linux: true,
      android: true,
      macos: true,
      ios: true,
    },
    footnotes: {},
  },
  {
    names: ["COMMA"],
    description: ", [Comma] and < [Less Than]",
    context: "Keyboard",
    clarify: false,
    usages: [
      {
        application: keyboardApplication,
        item: usage(keyPage, 0x36),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=84",
    os: {
      // COMMA
      windows: true,
      linux: true,
      android: true,
      macos: true,
      ios: true,
    },
    footnotes: {},
  },
  {
    names: ["LESS_THAN", "LT"],
    description: "< [Less Than]",
    context: "Keyboard",
    clarify: false,
    usages: [
      {
        application: keyboardApplication,
        item: usage(keyPage, 0x36),
      },
      {
        application: keyboardApplication,
        item: usage(keyPage, 0xe1),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=84",
    os: {
      // LESS_THAN
      windows: true,
      linux: true,
      android: true,
      macos: true,
      ios: true,
    },
    footnotes: {},
  },
  {
    names: ["PERIOD", "DOT"],
    description: ". [Period] and > [Greater Than]",
    context: "Keyboard",
    clarify: false,
    usages: [
      {
        application: keyboardApplication,
        item: usage(keyPage, 0x37),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=84",
    os: {
      // PERIOD
      windows: true,
      linux: true,
      android: true,
      macos: true,
      ios: true,
    },
    footnotes: {},
  },
  {
    names: ["GREATER_THAN", "GT"],
    description: "> [Greater Than]",
    context: "Keyboard",
    clarify: false,
    usages: [
      {
        application: keyboardApplication,
        item: usage(keyPage, 0x37),
      },
      {
        application: keyboardApplication,
        item: usage(keyPage, 0xe1),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=84",
    os: {
      // GREATER_THAN
      windows: true,
      linux: true,
      android: true,
      macos: true,
      ios: true,
    },
    footnotes: {},
  },
  {
    names: ["SLASH", "FSLH"],
    description: "/ [Forward Slash] and ? [Question Mark]",
    context: "Keyboard",
    clarify: false,
    usages: [
      {
        application: keyboardApplication,
        item: usage(keyPage, 0x38),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=84",
    os: {
      // SLASH
      windows: true,
      linux: true,
      android: true,
      macos: true,
      ios: true,
    },
    footnotes: {},
  },
  {
    names: ["QUESTION", "QMARK"],
    description: "? [Question Mark]",
    context: "Keyboard",
    clarify: false,
    usages: [
      {
        application: keyboardApplication,
        item: usage(keyPage, 0x38),
      },
      {
        application: keyboardApplication,
        item: usage(keyPage, 0xe1),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=84",
    os: {
      // QUESTION
      windows: true,
      linux: true,
      android: true,
      macos: true,
      ios: true,
    },
    footnotes: {},
  },
  {
    names: ["CAPSLOCK", "CAPS", "CLCK"],
    description: "Caps Lock",
    context: "Keyboard",
    clarify: false,
    usages: [
      {
        application: keyboardApplication,
        item: usage(keyPage, 0x39),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=84",
    os: {
      // CAPSLOCK
      windows: true,
      linux: true,
      android: true,
      macos: true,
      ios: true,
    },
    footnotes: {},
  },
  {
    names: ["F1"],
    description: "F1",
    context: "Keyboard",
    clarify: false,
    usages: [
      {
        application: keyboardApplication,
        item: usage(keyPage, 0x3a),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=84",
    os: {
      // F1
      windows: true,
      linux: true,
      android: true,
      macos: true,
      ios: true,
    },
    footnotes: {},
  },
  {
    names: ["F2"],
    description: "F2",
    context: "Keyboard",
    clarify: false,
    usages: [
      {
        application: keyboardApplication,
        item: usage(keyPage, 0x3b),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=84",
    os: {
      // F2
      windows: true,
      linux: true,
      android: true,
      macos: true,
      ios: true,
    },
    footnotes: {},
  },
  {
    names: ["F3"],
    description: "F3",
    context: "Keyboard",
    clarify: false,
    usages: [
      {
        application: keyboardApplication,
        item: usage(keyPage, 0x3c),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=84",
    os: {
      // F3
      windows: true,
      linux: true,
      android: true,
      macos: true,
      ios: true,
    },
    footnotes: {},
  },
  {
    names: ["F4"],
    description: "F4",
    context: "Keyboard",
    clarify: false,
    usages: [
      {
        application: keyboardApplication,
        item: usage(keyPage, 0x3d),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=84",
    os: {
      // F4
      windows: true,
      linux: true,
      android: true,
      macos: true,
      ios: true,
    },
    footnotes: {},
  },
  {
    names: ["F5"],
    description: "F5",
    context: "Keyboard",
    clarify: false,
    usages: [
      {
        application: keyboardApplication,
        item: usage(keyPage, 0x3e),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=85",
    os: {
      // F5
      windows: true,
      linux: true,
      android: true,
      macos: true,
      ios: true,
    },
    footnotes: {},
  },
  {
    names: ["F6"],
    description: "F6",
    context: "Keyboard",
    clarify: false,
    usages: [
      {
        application: keyboardApplication,
        item: usage(keyPage, 0x3f),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=85",
    os: {
      // F6
      windows: true,
      linux: true,
      android: true,
      macos: true,
      ios: true,
    },
    footnotes: {},
  },
  {
    names: ["F7"],
    description: "F7",
    context: "Keyboard",
    clarify: false,
    usages: [
      {
        application: keyboardApplication,
        item: usage(keyPage, 0x40),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=85",
    os: {
      // F7
      windows: true,
      linux: true,
      android: true,
      macos: true,
      ios: true,
    },
    footnotes: {},
  },
  {
    names: ["F8"],
    description: "F8",
    context: "Keyboard",
    clarify: false,
    usages: [
      {
        application: keyboardApplication,
        item: usage(keyPage, 0x41),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=85",
    os: {
      // F8
      windows: true,
      linux: true,
      android: true,
      macos: true,
      ios: true,
    },
    footnotes: {},
  },
  {
    names: ["F9"],
    description: "F9",
    context: "Keyboard",
    clarify: false,
    usages: [
      {
        application: keyboardApplication,
        item: usage(keyPage, 0x42),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=85",
    os: {
      // F9
      windows: true,
      linux: true,
      android: true,
      macos: true,
      ios: true,
    },
    footnotes: {},
  },
  {
    names: ["F10"],
    description: "F10",
    context: "Keyboard",
    clarify: false,
    usages: [
      {
        application: keyboardApplication,
        item: usage(keyPage, 0x43),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=85",
    os: {
      // F10
      windows: true,
      linux: true,
      android: true,
      macos: true,
      ios: true,
    },
    footnotes: {},
  },
  {
    names: ["F11"],
    description: "F11",
    context: "Keyboard",
    clarify: false,
    usages: [
      {
        application: keyboardApplication,
        item: usage(keyPage, 0x44),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=85",
    os: {
      // F11
      windows: true,
      linux: true,
      android: true,
      macos: true,
      ios: true,
    },
    footnotes: {},
  },
  {
    names: ["F12"],
    description: "F12",
    context: "Keyboard",
    clarify: false,
    usages: [
      {
        application: keyboardApplication,
        item: usage(keyPage, 0x45),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=85",
    os: {
      // F12
      windows: true,
      linux: true,
      android: true,
      macos: true,
      ios: true,
    },
    footnotes: {},
  },
  {
    names: ["PRINTSCREEN", "PSCRN"],
    description: "Print Screen",
    context: "Keyboard",
    clarify: false,
    usages: [
      {
        application: keyboardApplication,
        item: usage(keyPage, 0x46),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=85",
    os: {
      // PRINTSCREEN
      windows: true,
      linux: true,
      android: true,
      macos: true,
      ios: true,
    },
    footnotes: {},
  },
  {
    names: ["SCROLLLOCK", "SLCK"],
    description: "Scroll Lock",
    context: "Keyboard",
    clarify: false,
    usages: [
      {
        application: keyboardApplication,
        item: usage(keyPage, 0x47),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=85",
    os: {
      // SCROLLLOCK
      windows: true,
      linux: true,
      android: true,
      macos: true,
      ios: true,
    },
    footnotes: {},
  },
  {
    names: ["PAUSE_BREAK"],
    description: "Pause / Break",
    context: "Keyboard",
    clarify: false,
    usages: [
      {
        application: keyboardApplication,
        item: usage(keyPage, 0x48),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=85",
    os: {
      // PAUSE_BREAK
      windows: true,
      linux: true,
      android: true,
      macos: true,
      ios: true,
    },
    footnotes: {},
  },
  {
    names: ["INSERT", "INS"],
    description: "Insert",
    context: "Keyboard",
    clarify: false,
    usages: [
      {
        application: keyboardApplication,
        item: usage(keyPage, 0x49),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=85",
    os: {
      // INSERT
      windows: true,
      linux: true,
      android: true,
      macos: true,
      ios: true,
    },
    footnotes: {},
  },
  {
    names: ["HOME"],
    description: "Home",
    context: "Keyboard",
    clarify: false,
    usages: [
      {
        application: keyboardApplication,
        item: usage(keyPage, 0x4a),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=85",
    os: {
      // HOME
      windows: true,
      linux: true,
      android: true,
      macos: true,
      ios: true,
    },
    footnotes: {},
  },
  {
    names: ["PAGE_UP", "PG_UP"],
    description: "Page Up",
    context: "Keyboard",
    clarify: false,
    usages: [
      {
        application: keyboardApplication,
        item: usage(keyPage, 0x4b),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=85",
    os: {
      // PAGE_UP
      windows: true,
      linux: true,
      android: true,
      macos: true,
      ios: true,
    },
    footnotes: {},
  },
  {
    names: ["DELETE", "DEL"],
    description: "Delete",
    context: "Keyboard",
    clarify: false,
    usages: [
      {
        application: keyboardApplication,
        item: usage(keyPage, 0x4c),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=85",
    os: {
      // DELETE
      windows: true,
      linux: true,
      android: true,
      macos: true,
      ios: true,
    },
    footnotes: {},
  },
  {
    names: ["END"],
    description: "End",
    context: "Keyboard",
    clarify: false,
    usages: [
      {
        application: keyboardApplication,
        item: usage(keyPage, 0x4d),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=85",
    os: {
      // END
      windows: true,
      linux: true,
      android: true,
      macos: true,
      ios: true,
    },
    footnotes: {},
  },
  {
    names: ["PAGE_DOWN", "PG_DN"],
    description: "Page Down",
    context: "Keyboard",
    clarify: false,
    usages: [
      {
        application: keyboardApplication,
        item: usage(keyPage, 0x4e),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=85",
    os: {
      // PAGE_DOWN
      windows: true,
      linux: true,
      android: true,
      macos: true,
      ios: true,
    },
    footnotes: {},
  },
  {
    names: ["RIGHT_ARROW", "RIGHT"],
    description: "⮕ [Right Arrow]",
    context: "Keyboard",
    clarify: false,
    usages: [
      {
        application: keyboardApplication,
        item: usage(keyPage, 0x4f),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=85",
    os: {
      // RIGHT_ARROW
      windows: true,
      linux: true,
      android: true,
      macos: true,
      ios: true,
    },
    footnotes: {},
  },
  {
    names: ["LEFT_ARROW", "LEFT"],
    description: "⬅ [Left Arrow]",
    context: "Keyboard",
    clarify: false,
    usages: [
      {
        application: keyboardApplication,
        item: usage(keyPage, 0x50),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=85",
    os: {
      // LEFT_ARROW
      windows: true,
      linux: true,
      android: true,
      macos: true,
      ios: true,
    },
    footnotes: {},
  },
  {
    names: ["DOWN_ARROW", "DOWN"],
    description: "⬇ [Down Arrow]",
    context: "Keyboard",
    clarify: false,
    usages: [
      {
        application: keyboardApplication,
        item: usage(keyPage, 0x51),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=85",
    os: {
      // DOWN_ARROW
      windows: true,
      linux: true,
      android: true,
      macos: true,
      ios: true,
    },
    footnotes: {},
  },
  {
    names: ["UP_ARROW", "UP"],
    description: "⬆ [Up Arrow]",
    context: "Keyboard",
    clarify: false,
    usages: [
      {
        application: keyboardApplication,
        item: usage(keyPage, 0x52),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=85",
    os: {
      // UP_ARROW
      windows: true,
      linux: true,
      android: true,
      macos: true,
      ios: true,
    },
    footnotes: {},
  },
  {
    names: ["KP_NUMLOCK", "KP_NUM", "KP_NLCK"],
    description: "Numlock and Clear",
    context: "Keypad",
    clarify: false,
    usages: [
      {
        application: keyboardApplication,
        item: usage(keyPage, 0x53),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=85",
    os: {
      // KP_NUMLOCK
      windows: true,
      linux: true,
      android: true,
      macos: true,
      ios: null,
    },
    footnotes: {},
  },
  {
    names: ["CLEAR2"],
    description: "Clear",
    context: "Keypad",
    clarify: null,
    usages: [
      {
        application: keyboardApplication,
        item: usage(keyPage, 0x53),
      },
      {
        application: keyboardApplication,
        item: usage(keyPage, 0xe1),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=85",
    os: {
      // CLEAR2
      windows: null,
      linux: true,
      android: true,
      macos: null,
      ios: null,
    },
    footnotes: {},
  },
  {
    names: ["KP_DIVIDE", "KP_SLASH"],
    description: "/ [Divide]",
    context: "Keypad",
    clarify: false,
    usages: [
      {
        application: keyboardApplication,
        item: usage(keyPage, 0x54),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=85",
    os: {
      // KP_DIVIDE
      windows: true,
      linux: true,
      android: true,
      macos: true,
      ios: null,
    },
    footnotes: {},
  },
  {
    names: ["KP_MULTIPLY", "KP_ASTERISK"],
    description: "* [Multiply]",
    context: "Keypad",
    clarify: false,
    usages: [
      {
        application: keyboardApplication,
        item: usage(keyPage, 0x55),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=85",
    os: {
      // KP_MULTIPLY
      windows: true,
      linux: true,
      android: true,
      macos: true,
      ios: null,
    },
    footnotes: {},
  },
  {
    names: ["KP_MINUS", "KP_SUBTRACT"],
    description: "- [Minus]",
    context: "Keypad",
    clarify: false,
    usages: [
      {
        application: keyboardApplication,
        item: usage(keyPage, 0x56),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=85",
    os: {
      // KP_MINUS
      windows: true,
      linux: true,
      android: true,
      macos: true,
      ios: null,
    },
    footnotes: {},
  },
  {
    names: ["KP_PLUS"],
    description: "+ [Plus]",
    context: "Keypad",
    clarify: false,
    usages: [
      {
        application: keyboardApplication,
        item: usage(keyPage, 0x57),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=85",
    os: {
      // KP_PLUS
      windows: true,
      linux: true,
      android: true,
      macos: true,
      ios: null,
    },
    footnotes: {},
  },
  {
    names: ["KP_ENTER"],
    description: "Enter",
    context: "Keypad",
    clarify: false,
    usages: [
      {
        application: keyboardApplication,
        item: usage(keyPage, 0x58),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=85",
    os: {
      // KP_ENTER
      windows: true,
      linux: true,
      android: true,
      macos: true,
      ios: null,
    },
    footnotes: {},
  },
  {
    names: ["KP_NUMBER_1", "KP_N1"],
    description: "1",
    context: "Keypad",
    clarify: false,
    usages: [
      {
        application: keyboardApplication,
        item: usage(keyPage, 0x59),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=85",
    os: {
      // KP_NUMBER_1
      windows: true,
      linux: true,
      android: true,
      macos: true,
      ios: null,
    },
    footnotes: {},
  },
  {
    names: ["KP_NUMBER_2", "KP_N2"],
    description: "2",
    context: "Keypad",
    clarify: false,
    usages: [
      {
        application: keyboardApplication,
        item: usage(keyPage, 0x5a),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=85",
    os: {
      // KP_NUMBER_2
      windows: true,
      linux: true,
      android: true,
      macos: true,
      ios: null,
    },
    footnotes: {},
  },
  {
    names: ["KP_NUMBER_3", "KP_N3"],
    description: "3",
    context: "Keypad",
    clarify: false,
    usages: [
      {
        application: keyboardApplication,
        item: usage(keyPage, 0x5b),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=85",
    os: {
      // KP_NUMBER_3
      windows: true,
      linux: true,
      android: true,
      macos: true,
      ios: null,
    },
    footnotes: {},
  },
  {
    names: ["KP_NUMBER_4", "KP_N4"],
    description: "4",
    context: "Keypad",
    clarify: false,
    usages: [
      {
        application: keyboardApplication,
        item: usage(keyPage, 0x5c),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=85",
    os: {
      // KP_NUMBER_4
      windows: true,
      linux: true,
      android: true,
      macos: true,
      ios: null,
    },
    footnotes: {},
  },
  {
    names: ["KP_NUMBER_5", "KP_N5"],
    description: "5",
    context: "Keypad",
    clarify: false,
    usages: [
      {
        application: keyboardApplication,
        item: usage(keyPage, 0x5d),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=85",
    os: {
      // KP_NUMBER_5
      windows: true,
      linux: true,
      android: true,
      macos: true,
      ios: null,
    },
    footnotes: {},
  },
  {
    names: ["KP_NUMBER_6", "KP_N6"],
    description: "6",
    context: "Keypad",
    clarify: false,
    usages: [
      {
        application: keyboardApplication,
        item: usage(keyPage, 0x5e),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=85",
    os: {
      // KP_NUMBER_6
      windows: true,
      linux: true,
      android: true,
      macos: true,
      ios: null,
    },
    footnotes: {},
  },
  {
    names: ["KP_NUMBER_7", "KP_N7"],
    description: "7",
    context: "Keypad",
    clarify: false,
    usages: [
      {
        application: keyboardApplication,
        item: usage(keyPage, 0x5f),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=85",
    os: {
      // KP_NUMBER_7
      windows: true,
      linux: true,
      android: true,
      macos: true,
      ios: null,
    },
    footnotes: {},
  },
  {
    names: ["KP_NUMBER_8", "KP_N8"],
    description: "8",
    context: "Keypad",
    clarify: false,
    usages: [
      {
        application: keyboardApplication,
        item: usage(keyPage, 0x60),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=85",
    os: {
      // KP_NUMBER_8
      windows: true,
      linux: true,
      android: true,
      macos: true,
      ios: null,
    },
    footnotes: {},
  },
  {
    names: ["KP_NUMBER_9", "KP_N9"],
    description: "9",
    context: "Keypad",
    clarify: false,
    usages: [
      {
        application: keyboardApplication,
        item: usage(keyPage, 0x61),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=85",
    os: {
      // KP_NUMBER_9
      windows: true,
      linux: true,
      android: true,
      macos: true,
      ios: null,
    },
    footnotes: {},
  },
  {
    names: ["KP_NUMBER_0", "KP_N0"],
    description: "0",
    context: "Keypad",
    clarify: false,
    usages: [
      {
        application: keyboardApplication,
        item: usage(keyPage, 0x62),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=85",
    os: {
      // KP_NUMBER_0
      windows: true,
      linux: true,
      android: true,
      macos: true,
      ios: null,
    },
    footnotes: {},
  },
  {
    names: ["KP_DOT"],
    description: ". [Dot]",
    context: "Keypad",
    clarify: false,
    usages: [
      {
        application: keyboardApplication,
        item: usage(keyPage, 0x63),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=86",
    os: {
      // KP_DOT
      windows: true,
      linux: true,
      android: true,
      macos: true,
      ios: null,
    },
    footnotes: {},
  },
  {
    names: ["NON_US_BACKSLASH", "NON_US_BSLH"],
    description: "Non-US \\ [Backslash] and | [Pipe]",
    context: "Keyboard",
    clarify: false,
    usages: [
      {
        application: keyboardApplication,
        item: usage(keyPage, 0x64),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=86",
    os: {
      // NON_US_BACKSLASH
      windows: true,
      linux: true,
      android: true,
      macos: true,
      ios: true,
    },
    footnotes: {},
  },
  {
    names: ["PIPE2"],
    description: "| [Pipe]",
    context: "Keyboard",
    clarify: false,
    usages: [
      {
        application: keyboardApplication,
        item: usage(keyPage, 0x64),
      },
      {
        application: keyboardApplication,
        item: usage(keyPage, 0xe1),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=86",
    os: {
      // PIPE2
      windows: true,
      linux: true,
      android: true,
      macos: true,
      ios: true,
    },
    footnotes: {},
  },
  {
    names: ["K_APPLICATION", "K_APP", "K_CONTEXT_MENU", "K_CMENU"],
    description: "Application (Context Menu)",
    context: "Keyboard",
    clarify: false,
    usages: [
      {
        application: keyboardApplication,
        item: usage(keyPage, 0x65),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=86",
    os: {
      // K_APPLICATION
      windows: null,
      linux: true,
      android: true,
      macos: null,
      ios: null,
    },
    footnotes: {},
  },
  {
    names: ["K_POWER", "K_PWR"],
    description: "Power",
    context: "Keyboard",
    clarify: true,
    usages: [
      {
        application: keyboardApplication,
        item: usage(keyPage, 0x66),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=86",
    os: {
      // K_POWER
      windows: null,
      linux: false,
      android: true,
      macos: null,
      ios: null,
    },
    footnotes: {},
  },
  {
    names: ["KP_EQUAL"],
    description: "= [Equal]",
    context: "Keypad",
    clarify: false,
    usages: [
      {
        application: keyboardApplication,
        item: usage(keyPage, 0x67),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=86",
    os: {
      // KP_EQUAL
      windows: null,
      linux: true,
      android: true,
      macos: null,
      ios: null,
    },
    footnotes: {},
  },
  {
    names: ["F13"],
    description: "F13",
    context: "Keyboard",
    clarify: false,
    usages: [
      {
        application: keyboardApplication,
        item: usage(keyPage, 0x68),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=86",
    os: {
      // F13
      windows: null,
      linux: true,
      android: false,
      macos: null,
      ios: null,
    },
    footnotes: {},
  },
  {
    names: ["F14"],
    description: "F14",
    context: "Keyboard",
    clarify: false,
    usages: [
      {
        application: keyboardApplication,
        item: usage(keyPage, 0x69),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=86",
    os: {
      // F14
      windows: null,
      linux: true,
      android: false,
      macos: null,
      ios: null,
    },
    footnotes: {},
  },
  {
    names: ["F15"],
    description: "F15",
    context: "Keyboard",
    clarify: false,
    usages: [
      {
        application: keyboardApplication,
        item: usage(keyPage, 0x6a),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=86",
    os: {
      // F15
      windows: null,
      linux: true,
      android: false,
      macos: null,
      ios: null,
    },
    footnotes: {},
  },
  {
    names: ["F16"],
    description: "F16",
    context: "Keyboard",
    clarify: false,
    usages: [
      {
        application: keyboardApplication,
        item: usage(keyPage, 0x6b),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=86",
    os: {
      // F16
      windows: null,
      linux: true,
      android: false,
      macos: null,
      ios: null,
    },
    footnotes: {},
  },
  {
    names: ["F17"],
    description: "F17",
    context: "Keyboard",
    clarify: false,
    usages: [
      {
        application: keyboardApplication,
        item: usage(keyPage, 0x6c),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=86",
    os: {
      // F17
      windows: null,
      linux: true,
      android: false,
      macos: null,
      ios: null,
    },
    footnotes: {},
  },
  {
    names: ["F18"],
    description: "F18",
    context: "Keyboard",
    clarify: false,
    usages: [
      {
        application: keyboardApplication,
        item: usage(keyPage, 0x6d),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=86",
    os: {
      // F18
      windows: null,
      linux: true,
      android: false,
      macos: null,
      ios: null,
    },
    footnotes: {},
  },
  {
    names: ["F19"],
    description: "F19",
    context: "Keyboard",
    clarify: false,
    usages: [
      {
        application: keyboardApplication,
        item: usage(keyPage, 0x6e),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=86",
    os: {
      // F19
      windows: null,
      linux: true,
      android: false,
      macos: null,
      ios: null,
    },
    footnotes: {},
  },
  {
    names: ["F20"],
    description: "F20",
    context: "Keyboard",
    clarify: false,
    usages: [
      {
        application: keyboardApplication,
        item: usage(keyPage, 0x6f),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=86",
    os: {
      // F20
      windows: null,
      linux: true,
      android: false,
      macos: null,
      ios: null,
    },
    footnotes: {},
  },
  {
    names: ["F21"],
    description: "F21",
    context: "Keyboard",
    clarify: false,
    usages: [
      {
        application: keyboardApplication,
        item: usage(keyPage, 0x70),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=86",
    os: {
      // F21
      windows: null,
      linux: true,
      android: false,
      macos: null,
      ios: null,
    },
    footnotes: {},
  },
  {
    names: ["F22"],
    description: "F22",
    context: "Keyboard",
    clarify: false,
    usages: [
      {
        application: keyboardApplication,
        item: usage(keyPage, 0x71),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=86",
    os: {
      // F22
      windows: null,
      linux: true,
      android: false,
      macos: null,
      ios: null,
    },
    footnotes: {},
  },
  {
    names: ["F23"],
    description: "F23",
    context: "Keyboard",
    clarify: false,
    usages: [
      {
        application: keyboardApplication,
        item: usage(keyPage, 0x72),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=86",
    os: {
      // F23
      windows: null,
      linux: true,
      android: false,
      macos: null,
      ios: null,
    },
    footnotes: {},
  },
  {
    names: ["F24"],
    description: "F24",
    context: "Keyboard",
    clarify: false,
    usages: [
      {
        application: keyboardApplication,
        item: usage(keyPage, 0x73),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=86",
    os: {
      // F24
      windows: null,
      linux: true,
      android: false,
      macos: null,
      ios: null,
    },
    footnotes: {},
  },
  {
    names: ["K_EXECUTE", "K_EXEC"],
    description: "Execute",
    context: "Keyboard",
    clarify: true,
    usages: [
      {
        application: keyboardApplication,
        item: usage(keyPage, 0x74),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=86",
    os: {
      // K_EXECUTE
      windows: null,
      linux: true,
      android: false,
      macos: null,
      ios: null,
    },
    footnotes: {},
  },
  {
    names: ["K_HELP"],
    description: "Help",
    context: "Keyboard",
    clarify: true,
    usages: [
      {
        application: keyboardApplication,
        item: usage(keyPage, 0x75),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=86",
    os: {
      // K_HELP
      windows: null,
      linux: true,
      android: false,
      macos: null,
      ios: null,
    },
    footnotes: {},
  },
  {
    names: ["K_MENU"],
    description: "Menu",
    context: "Keyboard",
    clarify: true,
    usages: [
      {
        application: keyboardApplication,
        item: usage(keyPage, 0x76),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=86",
    os: {
      // K_MENU
      windows: null,
      linux: true,
      android: false,
      macos: null,
      ios: null,
    },
    footnotes: {},
  },
  {
    names: ["K_SELECT"],
    description: "Select",
    context: "Keyboard",
    clarify: true,
    usages: [
      {
        application: keyboardApplication,
        item: usage(keyPage, 0x77),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=86",
    os: {
      // K_SELECT
      windows: null,
      linux: true,
      android: false,
      macos: null,
      ios: null,
    },
    footnotes: {},
  },
  {
    names: ["K_STOP"],
    description: "Stop",
    context: "Keyboard",
    clarify: true,
    usages: [
      {
        application: keyboardApplication,
        item: usage(keyPage, 0x78),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=86",
    os: {
      // K_STOP
      windows: null,
      linux: true,
      android: true,
      macos: null,
      ios: null,
    },
    footnotes: {},
  },
  {
    names: ["K_AGAIN", "K_REDO"],
    description: "Again",
    context: "Keyboard",
    clarify: true,
    usages: [
      {
        application: keyboardApplication,
        item: usage(keyPage, 0x79),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=86",
    os: {
      // K_AGAIN
      windows: null,
      linux: true,
      android: false,
      macos: null,
      ios: null,
    },
    footnotes: {},
  },
  {
    names: ["K_UNDO"],
    description: "Undo",
    context: "Keyboard",
    clarify: true,
    usages: [
      {
        application: keyboardApplication,
        item: usage(keyPage, 0x7a),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=86",
    os: {
      // K_UNDO
      windows: null,
      linux: true,
      android: false,
      macos: null,
      ios: null,
    },
    footnotes: {},
  },
  {
    names: ["K_CUT"],
    description: "Cut",
    context: "Keyboard",
    clarify: true,
    usages: [
      {
        application: keyboardApplication,
        item: usage(keyPage, 0x7b),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=86",
    os: {
      // K_CUT
      windows: null,
      linux: true,
      android: false,
      macos: null,
      ios: null,
    },
    footnotes: {},
  },
  {
    names: ["K_COPY"],
    description: "Copy",
    context: "Keyboard",
    clarify: true,
    usages: [
      {
        application: keyboardApplication,
        item: usage(keyPage, 0x7c),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=86",
    os: {
      // K_COPY
      windows: null,
      linux: true,
      android: false,
      macos: null,
      ios: null,
    },
    footnotes: {},
  },
  {
    names: ["K_PASTE"],
    description: "Paste",
    context: "Keyboard",
    clarify: true,
    usages: [
      {
        application: keyboardApplication,
        item: usage(keyPage, 0x7d),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=86",
    os: {
      // K_PASTE
      windows: null,
      linux: true,
      android: false,
      macos: null,
      ios: null,
    },
    footnotes: {},
  },
  {
    names: ["K_FIND"],
    description: "Find",
    context: "Keyboard",
    clarify: true,
    usages: [
      {
        application: keyboardApplication,
        item: usage(keyPage, 0x7e),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=86",
    os: {
      // K_FIND
      windows: null,
      linux: true,
      android: false,
      macos: null,
      ios: null,
    },
    footnotes: {},
  },
  {
    names: ["K_MUTE"],
    description: "Mute",
    context: "Keyboard",
    clarify: true,
    usages: [
      {
        application: keyboardApplication,
        item: usage(keyPage, 0x7f),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=86",
    os: {
      // K_MUTE
      windows: null,
      linux: true,
      android: true,
      macos: null,
      ios: null,
    },
    footnotes: {},
  },
  {
    names: ["K_VOLUME_UP", "K_VOL_UP"],
    description: "Volume Up",
    context: "Keyboard",
    clarify: true,
    usages: [
      {
        application: keyboardApplication,
        item: usage(keyPage, 0x80),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=86",
    os: {
      // K_VOLUME_UP
      windows: null,
      linux: true,
      android: true,
      macos: null,
      ios: null,
    },
    footnotes: {},
  },
  {
    names: ["K_VOLUME_DOWN", "K_VOL_DN"],
    description: "Volume Down",
    context: "Keyboard",
    clarify: true,
    usages: [
      {
        application: keyboardApplication,
        item: usage(keyPage, 0x81),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=86",
    os: {
      // K_VOLUME_DOWN
      windows: null,
      linux: true,
      android: true,
      macos: null,
      ios: null,
    },
    footnotes: {},
  },
  {
    names: ["LOCKING_CAPS", "LCAPS"],
    description: "Locking Caps Lock",
    context: "Keyboard",
    clarify: false,
    usages: [
      {
        application: keyboardApplication,
        item: usage(keyPage, 0x82),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=86",
    os: {
      // LOCKING_CAPS
      windows: null,
      linux: false,
      android: false,
      macos: null,
      ios: null,
    },
    footnotes: {},
  },
  {
    names: ["LOCKING_NUM", "LNLCK"],
    description: "Locking Num Lock",
    context: "Keyboard",
    clarify: false,
    usages: [
      {
        application: keyboardApplication,
        item: usage(keyPage, 0x83),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=86",
    os: {
      // LOCKING_NUM
      windows: null,
      linux: false,
      android: false,
      macos: null,
      ios: null,
    },
    footnotes: {},
  },
  {
    names: ["LOCKING_SCROLL", "LSLCK"],
    description: "Locking Scroll Lock",
    context: "Keyboard",
    clarify: false,
    usages: [
      {
        application: keyboardApplication,
        item: usage(keyPage, 0x84),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=86",
    os: {
      // LOCKING_SCROLL
      windows: null,
      linux: false,
      android: false,
      macos: null,
      ios: null,
    },
    footnotes: {},
  },
  {
    names: ["KP_COMMA"],
    description: ", [Comma]",
    context: "Keypad",
    clarify: false,
    usages: [
      {
        application: keyboardApplication,
        item: usage(keyPage, 0x85),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=86",
    os: {
      // KP_COMMA
      windows: null,
      linux: true,
      android: true,
      macos: null,
      ios: null,
    },
    footnotes: {},
  },
  {
    names: ["KP_EQUAL_AS400"],
    description: "= [Equal] (AS/400 keyboards)",
    context: "Keypad",
    clarify: false,
    usages: [
      {
        application: keyboardApplication,
        item: usage(keyPage, 0x86),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=86",
    os: {
      // KP_EQUAL_AS400
      windows: null,
      linux: false,
      android: false,
      macos: null,
      ios: null,
    },
    footnotes: {},
  },
  {
    names: ["INTERNATIONAL_1", "INT1", "INT_RO"],
    description: "ろ (International 1)",
    context: "Keyboard",
    clarify: false,
    usages: [
      {
        application: keyboardApplication,
        item: usage(keyPage, 0x87),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=86",
    os: {
      // INTERNATIONAL_1
      windows: null,
      linux: true,
      android: false,
      macos: null,
      ios: null,
    },
    footnotes: {},
  },
  {
    names: ["INTERNATIONAL_2", "INT2", "INT_KATAKANAHIRAGANA", "INT_KANA"],
    description: "かな (International 2)",
    context: "Keyboard",
    clarify: false,
    usages: [
      {
        application: keyboardApplication,
        item: usage(keyPage, 0x88),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=86",
    os: {
      // INTERNATIONAL_2
      windows: null,
      linux: true,
      android: false,
      macos: null,
      ios: null,
    },
    footnotes: {},
  },
  {
    names: ["INTERNATIONAL_3", "INT3", "INT_YEN"],
    description: "¥ (International 3)",
    context: "Keyboard",
    clarify: false,
    usages: [
      {
        application: keyboardApplication,
        item: usage(keyPage, 0x89),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=86",
    os: {
      // INTERNATIONAL_3
      windows: null,
      linux: true,
      android: false,
      macos: null,
      ios: null,
    },
    footnotes: {},
  },
  {
    names: ["INTERNATIONAL_4", "INT4", "INT_HENKAN"],
    description: "変換 (International 4)",
    context: "Keyboard",
    clarify: false,
    usages: [
      {
        application: keyboardApplication,
        item: usage(keyPage, 0x8a),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=86",
    os: {
      // INTERNATIONAL_4
      windows: null,
      linux: true,
      android: false,
      macos: null,
      ios: null,
    },
    footnotes: {},
  },
  {
    names: ["INTERNATIONAL_5", "INT5", "INT_MUHENKAN"],
    description: "無変換 (International 5)",
    context: "Keyboard",
    clarify: false,
    usages: [
      {
        application: keyboardApplication,
        item: usage(keyPage, 0x8b),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=87",
    os: {
      // INTERNATIONAL_5
      windows: null,
      linux: true,
      android: false,
      macos: null,
      ios: null,
    },
    footnotes: {},
  },
  {
    names: ["INTERNATIONAL_6", "INT6", "INT_KPJPCOMMA"],
    description: ", [カソマ] (International 6)",
    context: "Keyboard",
    clarify: false,
    usages: [
      {
        application: keyboardApplication,
        item: usage(keyPage, 0x8c),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=87",
    os: {
      // INTERNATIONAL_6
      windows: null,
      linux: true,
      android: false,
      macos: null,
      ios: null,
    },
    footnotes: {},
  },
  {
    names: ["INTERNATIONAL_7", "INT7"],
    description: "International 7",
    context: "Keyboard",
    clarify: false,
    usages: [
      {
        application: keyboardApplication,
        item: usage(keyPage, 0x8d),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=87",
    os: {
      // INTERNATIONAL_7
      windows: null,
      linux: false,
      android: false,
      macos: null,
      ios: null,
    },
    footnotes: {},
  },
  {
    names: ["INTERNATIONAL_8", "INT8"],
    description: "International 8",
    context: "Keyboard",
    clarify: false,
    usages: [
      {
        application: keyboardApplication,
        item: usage(keyPage, 0x8e),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=87",
    os: {
      // INTERNATIONAL_8
      windows: null,
      linux: false,
      android: false,
      macos: null,
      ios: null,
    },
    footnotes: {},
  },
  {
    names: ["INTERNATIONAL_9", "INT9"],
    description: "International 9",
    context: "Keyboard",
    clarify: false,
    usages: [
      {
        application: keyboardApplication,
        item: usage(keyPage, 0x8f),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=87",
    os: {
      // INTERNATIONAL_9
      windows: null,
      linux: false,
      android: false,
      macos: null,
      ios: null,
    },
    footnotes: {},
  },
  {
    names: ["LANGUAGE_1", "LANG1", "LANG_HANGEUL"],
    description: "한/영 (Language 1)",
    context: "Keyboard",
    clarify: false,
    usages: [
      {
        application: keyboardApplication,
        item: usage(keyPage, 0x90),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=87",
    os: {
      // LANGUAGE_1
      windows: null,
      linux: true,
      android: false,
      macos: null,
      ios: null,
    },
    footnotes: {},
  },
  {
    names: ["LANGUAGE_2", "LANG2", "LANG_HANJA"],
    description: "한자 (Language 2)",
    context: "Keyboard",
    clarify: false,
    usages: [
      {
        application: keyboardApplication,
        item: usage(keyPage, 0x91),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=87",
    os: {
      // LANGUAGE_2
      windows: null,
      linux: true,
      android: false,
      macos: null,
      ios: null,
    },
    footnotes: {},
  },
  {
    names: ["LANGUAGE_3", "LANG3", "LANG_KATAKANA"],
    description: "カタカナ (Language 3)",
    context: "Keyboard",
    clarify: false,
    usages: [
      {
        application: keyboardApplication,
        item: usage(keyPage, 0x92),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=87",
    os: {
      // LANGUAGE_3
      windows: null,
      linux: true,
      android: false,
      macos: null,
      ios: null,
    },
    footnotes: {},
  },
  {
    names: ["LANGUAGE_4", "LANG4", "LANG_HIRAGANA"],
    description: "ひらがな (Language 4)",
    context: "Keyboard",
    clarify: false,
    usages: [
      {
        application: keyboardApplication,
        item: usage(keyPage, 0x93),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=87",
    os: {
      // LANGUAGE_4
      windows: null,
      linux: true,
      android: false,
      macos: null,
      ios: null,
    },
    footnotes: {},
  },
  {
    names: ["LANGUAGE_5", "LANG5", "LANG_ZENKAKUHANKAKU"],
    description: "半角/全角 (Language 5)",
    context: "Keyboard",
    clarify: false,
    usages: [
      {
        application: keyboardApplication,
        item: usage(keyPage, 0x94),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=87",
    os: {
      // LANGUAGE_5
      windows: null,
      linux: true,
      android: false,
      macos: null,
      ios: null,
    },
    footnotes: {},
  },
  {
    names: ["LANGUAGE_6", "LANG6"],
    description: "Language 6",
    context: "Keyboard",
    clarify: false,
    usages: [
      {
        application: keyboardApplication,
        item: usage(keyPage, 0x95),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=87",
    os: {
      // LANGUAGE_6
      windows: null,
      linux: false,
      android: false,
      macos: null,
      ios: null,
    },
    footnotes: {},
  },
  {
    names: ["LANGUAGE_7", "LANG7"],
    description: "Language 7",
    context: "Keyboard",
    clarify: false,
    usages: [
      {
        application: keyboardApplication,
        item: usage(keyPage, 0x96),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=87",
    os: {
      // LANGUAGE_7
      windows: null,
      linux: false,
      android: false,
      macos: null,
      ios: null,
    },
    footnotes: {},
  },
  {
    names: ["LANGUAGE_8", "LANG8"],
    description: "Language 8",
    context: "Keyboard",
    clarify: false,
    usages: [
      {
        application: keyboardApplication,
        item: usage(keyPage, 0x97),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=87",
    os: {
      // LANGUAGE_8
      windows: null,
      linux: false,
      android: false,
      macos: null,
      ios: null,
    },
    footnotes: {},
  },
  {
    names: ["LANGUAGE_9", "LANG9"],
    description: "Language 9",
    context: "Keyboard",
    clarify: false,
    usages: [
      {
        application: keyboardApplication,
        item: usage(keyPage, 0x98),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=87",
    os: {
      // LANGUAGE_9
      windows: null,
      linux: false,
      android: false,
      macos: null,
      ios: null,
    },
    footnotes: {},
  },
  {
    names: ["ALT_ERASE"],
    description: "Alternate Erase",
    context: "Keyboard",
    clarify: false,
    usages: [
      {
        application: keyboardApplication,
        item: usage(keyPage, 0x99),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=87",
    os: {
      // ALT_ERASE
      windows: null,
      linux: false,
      android: false,
      macos: null,
      ios: null,
    },
    footnotes: {},
  },
  {
    names: ["SYSREQ", "ATTENTION"],
    description: "SysReq / Attention",
    context: "Keyboard",
    clarify: false,
    usages: [
      {
        application: keyboardApplication,
        item: usage(keyPage, 0x9a),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=87",
    os: {
      // SYSREQ
      windows: null,
      linux: false,
      android: false,
      macos: null,
      ios: null,
    },
    footnotes: {},
  },
  {
    names: ["K_CANCEL"],
    description: "Cancel",
    context: "Keyboard",
    clarify: true,
    usages: [
      {
        application: keyboardApplication,
        item: usage(keyPage, 0x9b),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=87",
    os: {
      // K_CANCEL
      windows: null,
      linux: false,
      android: false,
      macos: null,
      ios: null,
    },
    footnotes: {},
  },
  {
    names: ["CLEAR"],
    description: "Clear",
    context: "Keyboard",
    clarify: false,
    usages: [
      {
        application: keyboardApplication,
        item: usage(keyPage, 0x9c),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=87",
    os: {
      // CLEAR
      windows: null,
      linux: true,
      android: false,
      macos: null,
      ios: null,
    },
    footnotes: {},
  },
  {
    names: ["PRIOR"],
    description: "Prior",
    context: "Keyboard",
    clarify: false,
    usages: [
      {
        application: keyboardApplication,
        item: usage(keyPage, 0x9d),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=87",
    os: {
      // PRIOR
      windows: null,
      linux: false,
      android: false,
      macos: null,
      ios: null,
    },
    footnotes: {},
  },
  {
    names: ["RETURN2", "RET2"],
    description: "Return",
    context: "Keyboard",
    clarify: false,
    usages: [
      {
        application: keyboardApplication,
        item: usage(keyPage, 0x9e),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=87",
    os: {
      // RETURN2
      windows: null,
      linux: false,
      android: false,
      macos: null,
      ios: null,
    },
    footnotes: {},
  },
  {
    names: ["SEPARATOR"],
    description: "Separator",
    context: "Keyboard",
    clarify: false,
    usages: [
      {
        application: keyboardApplication,
        item: usage(keyPage, 0x9f),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=87",
    os: {
      // SEPARATOR
      windows: null,
      linux: false,
      android: false,
      macos: null,
      ios: null,
    },
    footnotes: {},
  },
  {
    names: ["OUT"],
    description: "Out",
    context: "Keyboard",
    clarify: false,
    usages: [
      {
        application: keyboardApplication,
        item: usage(keyPage, 0xa0),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=87",
    os: {
      // OUT
      windows: null,
      linux: false,
      android: false,
      macos: null,
      ios: null,
    },
    footnotes: {},
  },
  {
    names: ["OPER"],
    description: "Oper",
    context: "Keyboard",
    clarify: false,
    usages: [
      {
        application: keyboardApplication,
        item: usage(keyPage, 0xa1),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=87",
    os: {
      // OPER
      windows: null,
      linux: false,
      android: false,
      macos: null,
      ios: null,
    },
    footnotes: {},
  },
  {
    names: ["CLEAR_AGAIN"],
    description: "Clear / Again",
    context: "Keyboard",
    clarify: false,
    usages: [
      {
        application: keyboardApplication,
        item: usage(keyPage, 0xa2),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=87",
    os: {
      // CLEAR_AGAIN
      windows: null,
      linux: false,
      android: false,
      macos: null,
      ios: null,
    },
    footnotes: {},
  },
  {
    names: ["CRSEL"],
    description: "CrSel / Props",
    context: "Keyboard",
    clarify: false,
    usages: [
      {
        application: keyboardApplication,
        item: usage(keyPage, 0xa3),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=87",
    os: {
      // CRSEL
      windows: null,
      linux: false,
      android: false,
      macos: null,
      ios: null,
    },
    footnotes: {},
  },
  {
    names: ["EXSEL"],
    description: "ExSel",
    context: "Keyboard",
    clarify: false,
    usages: [
      {
        application: keyboardApplication,
        item: usage(keyPage, 0xa4),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=87",
    os: {
      // EXSEL
      windows: null,
      linux: false,
      android: false,
      macos: null,
      ios: null,
    },
    footnotes: {},
  },
  {
    names: ["KP_LEFT_PARENTHESIS", "KP_LPAR"],
    description: "( [Left Parenthesis]",
    context: "Keypad",
    clarify: false,
    usages: [
      {
        application: keyboardApplication,
        item: usage(keyPage, 0xb6),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=87",
    os: {
      // KP_LEFT_PARENTHESIS
      windows: null,
      linux: true,
      android: true,
      macos: null,
      ios: null,
    },
    footnotes: {},
  },
  {
    names: ["KP_RIGHT_PARENTHESIS", "KP_RPAR"],
    description: ") [Right Parenthesis]",
    context: "Keypad",
    clarify: false,
    usages: [
      {
        application: keyboardApplication,
        item: usage(keyPage, 0xb7),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=87",
    os: {
      // KP_RIGHT_PARENTHESIS
      windows: null,
      linux: true,
      android: true,
      macos: null,
      ios: null,
    },
    footnotes: {},
  },
  {
    names: ["KP_CLEAR"],
    description: "Clear",
    context: "Keypad",
    clarify: false,
    usages: [
      {
        application: keyboardApplication,
        item: usage(keyPage, 0xd8),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=88",
    os: {
      // KP_CLEAR
      windows: null,
      linux: true,
      android: false,
      macos: null,
      ios: null,
    },
    footnotes: {},
  },
  {
    names: ["LEFT_CONTROL", "LCTRL", "LC(code)"],
    description: "Left Control",
    context: "Keyboard",
    clarify: false,
    usages: [
      {
        application: keyboardApplication,
        item: usage(keyPage, 0xe0),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=88",
    os: {
      // LEFT_CONTROL
      windows: true,
      linux: true,
      android: true,
      macos: true,
      ios: true,
    },
    footnotes: {},
  },
  {
    names: ["LEFT_SHIFT", "LSHFT", "LS(code)"],
    description: "Left Shift ⇧",
    context: "Keyboard",
    clarify: false,
    usages: [
      {
        application: keyboardApplication,
        item: usage(keyPage, 0xe1),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=88",
    os: {
      // LEFT_SHIFT
      windows: true,
      linux: true,
      android: true,
      macos: true,
      ios: true,
    },
    footnotes: {},
  },
  {
    names: ["LEFT_ALT", "LALT", "LA(code)"],
    description: "Left Alt",
    context: "Keyboard",
    clarify: false,
    usages: [
      {
        application: keyboardApplication,
        item: usage(keyPage, 0xe2),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=88",
    os: {
      // LEFT_ALT
      windows: true,
      linux: true,
      android: true,
      macos: true,
      ios: true,
    },
    footnotes: {},
  },
  {
    names: [
      "LEFT_GUI",
      "LGUI",
      "LG(code)",
      "LEFT_WIN",
      "LWIN",
      "LEFT_COMMAND",
      "LCMD",
      "LEFT_META",
      "LMETA",
    ],
    description: "Left GUI (Windows / Command / Meta)",
    context: "Keyboard",
    clarify: false,
    usages: [
      {
        application: keyboardApplication,
        item: usage(keyPage, 0xe3),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=88",
    os: {
      windows: true,
      linux: true,
      android: true,
      macos: true,
      ios: true,
    },
    footnotes: {},
  },
  {
    names: ["RIGHT_CONTROL", "RCTRL", "RC(code)"],
    description: "Right Control",
    context: "Keyboard",
    clarify: false,
    usages: [
      {
        application: keyboardApplication,
        item: usage(keyPage, 0xe4),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=88",
    os: {
      // RIGHT_CONTROL
      windows: true,
      linux: true,
      android: true,
      macos: true,
      ios: true,
    },
    footnotes: {},
  },
  {
    names: ["RIGHT_SHIFT", "RSHFT", "RS(code)"],
    description: "Right Shift ⇧",
    context: "Keyboard",
    clarify: false,
    usages: [
      {
        application: keyboardApplication,
        item: usage(keyPage, 0xe5),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=89",
    os: {
      // RIGHT_SHIFT
      windows: true,
      linux: true,
      android: true,
      macos: true,
      ios: true,
    },
    footnotes: {},
  },
  {
    names: ["RIGHT_ALT", "RALT", "RA(code)"],
    description: "Right Alt",
    context: "Keyboard",
    clarify: false,
    usages: [
      {
        application: keyboardApplication,
        item: usage(keyPage, 0xe6),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=89",
    os: {
      // RIGHT_ALT
      windows: true,
      linux: true,
      android: true,
      macos: true,
      ios: true,
    },
    footnotes: {},
  },
  {
    names: [
      "RIGHT_GUI",
      "RGUI",
      "RG(code)",
      "RIGHT_WIN",
      "RWIN",
      "RIGHT_COMMAND",
      "RCMD",
      "RIGHT_META",
      "RMETA",
    ],
    description: "Right GUI (Windows / Command / Meta)",
    context: "Keyboard",
    clarify: false,
    usages: [
      {
        application: keyboardApplication,
        item: usage(keyPage, 0xe7),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=89",
    os: {
      windows: true,
      linux: true,
      android: true,
      macos: true,
      ios: true,
    },
    footnotes: {},
  },
  {
    names: ["K_PLAY_PAUSE", "K_PP"],
    description: "Play / Pause",
    context: "Keyboard",
    clarify: true,
    usages: [
      {
        application: keyboardApplication,
        item: usage(keyPage, 0xe8),
      },
    ],
    documentation:
      "https://source.android.com/devices/input/keyboard-devices#hid-keyboard-and-keypad-page-0x07",
    os: {
      // K_PLAY_PAUSE
      windows: null,
      linux: true,
      android: true,
      macos: null,
      ios: null,
    },
    footnotes: {},
  },
  {
    names: ["K_STOP2"],
    description: "Stop",
    context: "Keyboard",
    clarify: true,
    usages: [
      {
        application: keyboardApplication,
        item: usage(keyPage, 0xe9),
      },
    ],
    documentation:
      "https://source.android.com/devices/input/keyboard-devices#hid-keyboard-and-keypad-page-0x07",
    os: {
      // K_STOP2
      windows: null,
      linux: true,
      android: true,
      macos: null,
      ios: null,
    },
    footnotes: {},
  },
  {
    names: ["K_PREVIOUS", "K_PREV"],
    description: "Previous",
    context: "Keyboard",
    clarify: true,
    usages: [
      {
        application: keyboardApplication,
        item: usage(keyPage, 0xea),
      },
    ],
    documentation:
      "https://source.android.com/devices/input/keyboard-devices#hid-keyboard-and-keypad-page-0x07",
    os: {
      // K_PREVIOUS
      windows: null,
      linux: true,
      android: true,
      macos: null,
      ios: null,
    },
    footnotes: {},
  },
  {
    names: ["K_NEXT"],
    description: "Next",
    context: "Keyboard",
    clarify: true,
    usages: [
      {
        application: keyboardApplication,
        item: usage(keyPage, 0xeb),
      },
    ],
    documentation:
      "https://source.android.com/devices/input/keyboard-devices#hid-keyboard-and-keypad-page-0x07",
    os: {
      // K_NEXT
      windows: null,
      linux: true,
      android: true,
      macos: null,
      ios: null,
    },
    footnotes: {},
  },
  {
    names: ["K_EJECT"],
    description: "Eject",
    context: "Keyboard",
    clarify: true,
    usages: [
      {
        application: keyboardApplication,
        item: usage(keyPage, 0xec),
      },
    ],
    documentation:
      "https://source.android.com/devices/input/keyboard-devices#hid-keyboard-and-keypad-page-0x07",
    os: {
      // K_EJECT
      windows: null,
      linux: true,
      android: true,
      macos: null,
      ios: null,
    },
    footnotes: {},
  },
  {
    names: ["K_VOLUME_UP2", "K_VOL_UP2"],
    description: "Volume Up",
    context: "Keyboard",
    clarify: true,
    usages: [
      {
        application: keyboardApplication,
        item: usage(keyPage, 0xed),
      },
    ],
    documentation:
      "https://source.android.com/devices/input/keyboard-devices#hid-keyboard-and-keypad-page-0x07",
    os: {
      // K_VOLUME_UP2
      windows: null,
      linux: true,
      android: true,
      macos: null,
      ios: null,
    },
    footnotes: {},
  },
  {
    names: ["K_VOLUME_DOWN2", "K_VOL_DN2"],
    description: "Volume Down",
    context: "Keyboard",
    clarify: true,
    usages: [
      {
        application: keyboardApplication,
        item: usage(keyPage, 0xee),
      },
    ],
    documentation:
      "https://source.android.com/devices/input/keyboard-devices#hid-keyboard-and-keypad-page-0x07",
    os: {
      // K_VOLUME_DOWN2
      windows: null,
      linux: true,
      android: true,
      macos: null,
      ios: null,
    },
    footnotes: {},
  },
  {
    names: ["K_MUTE2"],
    description: "Mute",
    context: "Keyboard",
    clarify: true,
    usages: [
      {
        application: keyboardApplication,
        item: usage(keyPage, 0xef),
      },
    ],
    documentation:
      "https://source.android.com/devices/input/keyboard-devices#hid-keyboard-and-keypad-page-0x07",
    os: {
      // K_MUTE2
      windows: null,
      linux: true,
      android: true,
      macos: null,
      ios: null,
    },
    footnotes: {},
  },
  {
    names: ["K_WWW"],
    description: "Internet Browser",
    context: "Keyboard",
    clarify: true,
    usages: [
      {
        application: keyboardApplication,
        item: usage(keyPage, 0xf0),
      },
    ],
    documentation:
      "https://source.android.com/devices/input/keyboard-devices#hid-keyboard-and-keypad-page-0x07",
    os: {
      // K_WWW
      windows: null,
      linux: true,
      android: true,
      macos: null,
      ios: null,
    },
    footnotes: {},
  },
  {
    names: ["K_BACK"],
    description: "Back",
    context: "Keyboard",
    clarify: true,
    usages: [
      {
        application: keyboardApplication,
        item: usage(keyPage, 0xf1),
      },
    ],
    documentation:
      "https://source.android.com/devices/input/keyboard-devices#hid-keyboard-and-keypad-page-0x07",
    os: {
      // K_BACK
      windows: null,
      linux: true,
      android: true,
      macos: null,
      ios: null,
    },
    footnotes: {},
  },
  {
    names: ["K_FORWARD"],
    description: "Forward",
    context: "Keyboard",
    clarify: true,
    usages: [
      {
        application: keyboardApplication,
        item: usage(keyPage, 0xf2),
      },
    ],
    documentation:
      "https://source.android.com/devices/input/keyboard-devices#hid-keyboard-and-keypad-page-0x07",
    os: {
      // K_FORWARD
      windows: null,
      linux: true,
      android: true,
      macos: null,
      ios: null,
    },
    footnotes: {},
  },
  {
    names: ["K_STOP3"],
    description: "Stop",
    context: "Keyboard",
    clarify: true,
    usages: [
      {
        application: keyboardApplication,
        item: usage(keyPage, 0xf3),
      },
    ],
    documentation:
      "https://source.android.com/devices/input/keyboard-devices#hid-keyboard-and-keypad-page-0x07",
    os: {
      // K_STOP3
      windows: null,
      linux: true,
      android: true,
      macos: null,
      ios: null,
    },
    footnotes: {},
  },
  {
    names: ["K_FIND2"],
    description: "Find",
    context: "Keyboard",
    clarify: true,
    usages: [
      {
        application: keyboardApplication,
        item: usage(keyPage, 0xf4),
      },
    ],
    documentation:
      "https://source.android.com/devices/input/keyboard-devices#hid-keyboard-and-keypad-page-0x07",
    os: {
      // K_FIND2
      windows: null,
      linux: true,
      android: false,
      macos: null,
      ios: null,
    },
    footnotes: {},
  },
  {
    names: ["K_SCROLL_UP"],
    description: "Scroll Up",
    context: "Keyboard",
    clarify: true,
    usages: [
      {
        application: keyboardApplication,
        item: usage(keyPage, 0xf5),
      },
    ],
    documentation:
      "https://source.android.com/devices/input/keyboard-devices#hid-keyboard-and-keypad-page-0x07",
    os: {
      // K_SCROLL_UP
      windows: null,
      linux: true,
      android: true,
      macos: null,
      ios: null,
    },
    footnotes: {},
  },
  {
    names: ["K_SCROLL_DOWN"],
    description: "Scroll Down",
    context: "Keyboard",
    clarify: true,
    usages: [
      {
        application: keyboardApplication,
        item: usage(keyPage, 0xf6),
      },
    ],
    documentation:
      "https://source.android.com/devices/input/keyboard-devices#hid-keyboard-and-keypad-page-0x07",
    os: {
      // K_SCROLL_DOWN
      windows: null,
      linux: true,
      android: true,
      macos: null,
      ios: null,
    },
    footnotes: {},
  },
  {
    names: ["K_EDIT"],
    description: "Edit",
    context: "Keyboard",
    clarify: true,
    usages: [
      {
        application: keyboardApplication,
        item: usage(keyPage, 0xf7),
      },
    ],
    documentation:
      "https://source.android.com/devices/input/keyboard-devices#hid-keyboard-and-keypad-page-0x07",
    os: {
      // K_EDIT
      windows: null,
      linux: true,
      android: false,
      macos: null,
      ios: null,
    },
    footnotes: {},
  },
  {
    names: ["K_SLEEP"],
    description: "Sleep",
    context: "Keyboard",
    clarify: true,
    usages: [
      {
        application: keyboardApplication,
        item: usage(keyPage, 0xf8),
      },
    ],
    documentation:
      "https://source.android.com/devices/input/keyboard-devices#hid-keyboard-and-keypad-page-0x07",
    os: {
      // K_SLEEP
      windows: null,
      linux: true,
      android: false,
      macos: null,
      ios: null,
    },
    footnotes: {},
  },
  {
    names: ["K_LOCK", "K_SCREENSAVER", "K_COFFEE"],
    description: "Lock",
    context: "Keyboard",
    clarify: true,
    usages: [
      {
        application: keyboardApplication,
        item: usage(keyPage, 0xf9),
      },
    ],
    documentation:
      "https://source.android.com/devices/input/keyboard-devices#hid-keyboard-and-keypad-page-0x07",
    os: {
      // K_LOCK
      windows: null,
      linux: true,
      android: true,
      macos: null,
      ios: null,
    },
    footnotes: {},
  },
  {
    names: ["K_REFRESH"],
    description: "Refresh",
    context: "Keyboard",
    clarify: true,
    usages: [
      {
        application: keyboardApplication,
        item: usage(keyPage, 0xfa),
      },
    ],
    documentation:
      "https://source.android.com/devices/input/keyboard-devices#hid-keyboard-and-keypad-page-0x07",
    os: {
      // K_REFRESH
      windows: null,
      linux: true,
      android: false,
      macos: null,
      ios: null,
    },
    footnotes: {},
  },
  {
    names: ["K_CALCULATOR", "K_CALC"],
    description: "Calculator",
    context: "Keyboard",
    clarify: true,
    usages: [
      {
        application: keyboardApplication,
        item: usage(keyPage, 0xfb),
      },
    ],
    documentation:
      "https://source.android.com/devices/input/keyboard-devices#hid-keyboard-and-keypad-page-0x07",
    os: {
      // K_CALCULATOR
      windows: null,
      linux: true,
      android: true,
      macos: null,
      ios: null,
    },
    footnotes: {},
  },
  {
    names: ["C_POWER", "C_PWR"],
    description: "Power",
    context: "Consumer",
    clarify: true,
    usages: [
      {
        application: consumerApplication,
        item: usage(consumerPage, 0x30),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=132",
    os: {
      // C_POWER
      windows: null,
      linux: true,
      android: false,
      macos: null,
      ios: null,
    },
    footnotes: {},
  },
  {
    names: ["C_RESET"],
    description: "Reset",
    context: "Consumer",
    clarify: true,
    usages: [
      {
        application: consumerApplication,
        item: usage(consumerPage, 0x31),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=132",
    os: {
      // C_RESET
      windows: null,
      linux: true,
      android: false,
      macos: null,
      ios: null,
    },
    footnotes: {},
  },
  {
    names: ["C_SLEEP"],
    description: "Sleep",
    context: "Consumer",
    clarify: true,
    usages: [
      {
        application: consumerApplication,
        item: usage(consumerPage, 0x32),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=132",
    os: {
      // C_SLEEP
      windows: null,
      linux: true,
      android: false,
      macos: null,
      ios: null,
    },
    footnotes: {},
  },
  {
    names: ["C_SLEEP_MODE"],
    description: "Sleep Mode",
    context: "Consumer",
    clarify: true,
    usages: [
      {
        application: consumerApplication,
        item: usage(consumerPage, 0x34),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=132",
    os: {
      // C_SLEEP_MODE
      windows: null,
      linux: false,
      android: true,
      macos: null,
      ios: null,
    },
    footnotes: {},
  },
  {
    names: ["C_MENU"],
    description: "Menu",
    context: "Consumer Menu",
    clarify: true,
    usages: [
      {
        application: consumerApplication,
        item: usage(consumerPage, 0x40),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=133",
    os: {
      // C_MENU
      windows: null,
      linux: true,
      android: true,
      macos: null,
      ios: null,
    },
    footnotes: {},
  },
  {
    names: ["C_MENU_PICK", "C_MENU_SELECT"],
    description: "Pick",
    context: "Consumer Menu",
    clarify: true,
    usages: [
      {
        application: consumerApplication,
        item: usage(consumerPage, 0x41),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=133",
    os: {
      // C_MENU_PICK
      windows: null,
      linux: true,
      android: false,
      macos: null,
      ios: null,
    },
    footnotes: {},
  },
  {
    names: ["C_MENU_UP"],
    description: "Up",
    context: "Consumer Menu",
    clarify: true,
    usages: [
      {
        application: consumerApplication,
        item: usage(consumerPage, 0x42),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=133",
    os: {
      // C_MENU_UP
      windows: null,
      linux: true,
      android: false,
      macos: null,
      ios: null,
    },
    footnotes: {},
  },
  {
    names: ["C_MENU_DOWN"],
    description: "Down",
    context: "Consumer Menu",
    clarify: true,
    usages: [
      {
        application: consumerApplication,
        item: usage(consumerPage, 0x43),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=133",
    os: {
      // C_MENU_DOWN
      windows: null,
      linux: true,
      android: false,
      macos: null,
      ios: null,
    },
    footnotes: {},
  },
  {
    names: ["C_MENU_LEFT"],
    description: "Left",
    context: "Consumer Menu",
    clarify: true,
    usages: [
      {
        application: consumerApplication,
        item: usage(consumerPage, 0x44),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=133",
    os: {
      // C_MENU_LEFT
      windows: null,
      linux: true,
      android: false,
      macos: null,
      ios: null,
    },
    footnotes: {},
  },
  {
    names: ["C_MENU_RIGHT"],
    description: "Right",
    context: "Consumer Menu",
    clarify: true,
    usages: [
      {
        application: consumerApplication,
        item: usage(consumerPage, 0x45),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=133",
    os: {
      // C_MENU_RIGHT
      windows: null,
      linux: true,
      android: false,
      macos: null,
      ios: null,
    },
    footnotes: {},
  },
  {
    names: ["C_MENU_ESCAPE", "C_MENU_ESC"],
    description: "Escape",
    context: "Consumer Menu",
    clarify: true,
    usages: [
      {
        application: consumerApplication,
        item: usage(consumerPage, 0x46),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=133",
    os: {
      // C_MENU_ESCAPE
      windows: null,
      linux: true,
      android: false,
      macos: null,
      ios: null,
    },
    footnotes: {},
  },
  {
    names: ["C_MENU_INCREASE", "C_MENU_INC"],
    description: "Value Increase",
    context: "Consumer Menu",
    clarify: true,
    usages: [
      {
        application: consumerApplication,
        item: usage(consumerPage, 0x47),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=133",
    os: {
      // C_MENU_INCREASE
      windows: null,
      linux: true,
      android: false,
      macos: null,
      ios: null,
    },
    footnotes: {},
  },
  {
    names: ["C_MENU_DECREASE", "C_MENU_DEC"],
    description: "Value Decrease",
    context: "Consumer Menu",
    clarify: true,
    usages: [
      {
        application: consumerApplication,
        item: usage(consumerPage, 0x48),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=133",
    os: {
      // C_MENU_DECREASE
      windows: null,
      linux: true,
      android: false,
      macos: null,
      ios: null,
    },
    footnotes: {},
  },
  {
    names: ["C_DATA_ON_SCREEN"],
    description: "Data On Screen",
    context: "Consumer",
    clarify: true,
    usages: [
      {
        application: consumerApplication,
        item: usage(consumerPage, 0x60),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=134",
    os: {
      // C_DATA_ON_SCREEN
      windows: null,
      linux: true,
      android: null,
      macos: null,
      ios: null,
    },
    footnotes: {},
  },
  {
    names: ["C_CAPTIONS", "C_SUBTITILES"],
    description: "Closed Caption",
    context: "Consumer",
    clarify: true,
    usages: [
      {
        application: consumerApplication,
        item: usage(consumerPage, 0x61),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=134",
    os: {
      // C_CAPTIONS
      windows: null,
      linux: true,
      android: true,
      macos: null,
      ios: null,
    },
    footnotes: {},
  },
  {
    names: ["C_SNAPSHOT"],
    description: "Snapshot",
    context: "Consumer",
    clarify: true,
    usages: [
      {
        application: consumerApplication,
        item: usage(consumerPage, 0x65),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=134",
    os: {
      // C_SNAPSHOT
      windows: null,
      linux: true,
      android: null,
      macos: null,
      ios: null,
    },
    footnotes: {},
  },
  {
    names: ["C_PIP"],
    description: "Picture-in-Picture Toggle",
    context: "Consumer",
    clarify: true,
    usages: [
      {
        application: consumerApplication,
        item: usage(consumerPage, 0x67),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=134",
    os: {
      // C_PIP
      windows: null,
      linux: false,
      android: true,
      macos: null,
      ios: null,
    },
    footnotes: {},
  },
  {
    names: ["C_RED_BUTTON", "C_RED"],
    description: "Red Button",
    context: "Consumer Menu",
    clarify: true,
    usages: [
      {
        application: consumerApplication,
        item: usage(consumerPage, 0x69),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=133",
    os: {
      // C_RED_BUTTON
      windows: null,
      linux: true,
      android: true,
      macos: null,
      ios: null,
    },
    footnotes: {},
  },
  {
    names: ["C_GREEN_BUTTON", "C_GREEN"],
    description: "Green Button",
    context: "Consumer Menu",
    clarify: true,
    usages: [
      {
        application: consumerApplication,
        item: usage(consumerPage, 0x6a),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=133",
    os: {
      // C_GREEN_BUTTON
      windows: null,
      linux: true,
      android: true,
      macos: null,
      ios: null,
    },
    footnotes: {},
  },
  {
    names: ["C_BLUE_BUTTON", "C_BLUE"],
    description: "Blue Button",
    context: "Consumer Menu",
    clarify: true,
    usages: [
      {
        application: consumerApplication,
        item: usage(consumerPage, 0x6b),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=133",
    os: {
      // C_BLUE_BUTTON
      windows: null,
      linux: true,
      android: true,
      macos: null,
      ios: null,
    },
    footnotes: {},
  },
  {
    names: ["C_YELLOW_BUTTON", "C_YELLOW"],
    description: "Yellow Button",
    context: "Consumer Menu",
    clarify: true,
    usages: [
      {
        application: consumerApplication,
        item: usage(consumerPage, 0x6c),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=133",
    os: {
      // C_YELLOW_BUTTON
      windows: null,
      linux: true,
      android: true,
      macos: null,
      ios: null,
    },
    footnotes: {},
  },
  {
    names: ["C_ASPECT"],
    description: "Aspect",
    context: "Consumer",
    clarify: true,
    usages: [
      {
        application: consumerApplication,
        item: usage(consumerPage, 0x6d),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=134",
    os: {
      // C_ASPECT
      windows: null,
      linux: true,
      android: null,
      macos: null,
      ios: null,
    },
    footnotes: {},
  },
  {
    names: ["C_BRIGHTNESS_INC", "C_BRI_INC", "C_BRI_UP"],
    description: "Increase Brightness",
    context: "Consumer",
    clarify: true,
    usages: [
      {
        application: consumerApplication,
        item: usage(consumerPage, 0x6f),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=134",
    os: {
      // C_BRIGHTNESS_INC
      windows: null,
      linux: true,
      android: null,
      macos: null,
      ios: null,
    },
    footnotes: {},
  },
  {
    names: ["C_BRIGHTNESS_DEC", "C_BRI_DEC", "C_BRI_DN"],
    description: "Decrease Brightness",
    context: "Consumer",
    clarify: true,
    usages: [
      {
        application: consumerApplication,
        item: usage(consumerPage, 0x70),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=134",
    os: {
      // C_BRIGHTNESS_DEC
      windows: null,
      linux: true,
      android: null,
      macos: null,
      ios: null,
    },
    footnotes: {},
  },
  {
    names: ["C_BACKLIGHT_TOGGLE", "C_BKLT_TOG"],
    description: "Backlight Toggle",
    context: "Consumer",
    clarify: true,
    usages: [
      {
        application: consumerApplication,
        item: usage(consumerPage, 0x72),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=134",
    os: {
      // C_BACKLIGHT_TOGGLE
      windows: null,
      linux: true,
      android: null,
      macos: null,
      ios: null,
    },
    footnotes: {},
  },
  {
    names: ["C_BRIGHTNESS_MINIMUM", "C_BRI_MIN"],
    description: "Minimum Brightness",
    context: "Consumer",
    clarify: true,
    usages: [
      {
        application: consumerApplication,
        item: usage(consumerPage, 0x73),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=134",
    os: {
      // C_BRIGHTNESS_MINIMUM
      windows: null,
      linux: true,
      android: null,
      macos: null,
      ios: null,
    },
    footnotes: {},
  },
  {
    names: ["C_BRIGHTNESS_MAXIMUM", "C_BRI_MAX"],
    description: "Maximum Brightness",
    context: "Consumer",
    clarify: true,
    usages: [
      {
        application: consumerApplication,
        item: usage(consumerPage, 0x74),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=134",
    os: {
      // C_BRIGHTNESS_MAXIMUM
      windows: null,
      linux: true,
      android: null,
      macos: null,
      ios: null,
    },
    footnotes: {},
  },
  {
    names: ["C_BRIGHTNESS_AUTO", "C_BRI_AUTO"],
    description: "Auto Brightness",
    context: "Consumer",
    clarify: true,
    usages: [
      {
        application: consumerApplication,
        item: usage(consumerPage, 0x75),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=134",
    os: {
      // C_BRIGHTNESS_AUTO
      windows: null,
      linux: true,
      android: null,
      macos: null,
      ios: null,
    },
    footnotes: {},
  },
  {
    names: ["C_MEDIA_STEP", "C_MODE_STEP"],
    description: "Mode Step",
    context: "Consumer Media",
    clarify: true,
    usages: [
      {
        application: consumerApplication,
        item: usage(consumerPage, 0x82),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=135",
    os: {
      // C_MEDIA_STEP
      windows: null,
      linux: true,
      android: false,
      macos: null,
      ios: null,
    },
    footnotes: {},
  },
  {
    names: ["C_RECALL_LAST", "C_CHAN_LAST"],
    description: "Recall Last",
    context: "Consumer",
    clarify: true,
    usages: [
      {
        application: consumerApplication,
        item: usage(consumerPage, 0x83),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=135",
    os: {
      // C_RECALL_LAST
      windows: null,
      linux: true,
      android: true,
      macos: null,
      ios: null,
    },
    footnotes: {},
  },
  {
    names: ["C_MEDIA_COMPUTER"],
    description: "Computer",
    context: "Consumer Media",
    clarify: true,
    usages: [
      {
        application: consumerApplication,
        item: usage(consumerPage, 0x88),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=135",
    os: {
      // C_MEDIA_COMPUTER
      windows: null,
      linux: true,
      android: false,
      macos: null,
      ios: null,
    },
    footnotes: {},
  },
  {
    names: ["C_MEDIA_TV"],
    description: "TV",
    context: "Consumer Media",
    clarify: true,
    usages: [
      {
        application: consumerApplication,
        item: usage(consumerPage, 0x89),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=135",
    os: {
      // C_MEDIA_TV
      windows: null,
      linux: true,
      android: true,
      macos: null,
      ios: null,
    },
    footnotes: {},
  },
  {
    names: ["C_MEDIA_WWW"],
    description: "WWW",
    context: "Consumer Media",
    clarify: true,
    usages: [
      {
        application: consumerApplication,
        item: usage(consumerPage, 0x8a),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=135",
    os: {
      // C_MEDIA_WWW
      windows: null,
      linux: true,
      android: true,
      macos: null,
      ios: null,
    },
    footnotes: {},
  },
  {
    names: ["C_MEDIA_DVD"],
    description: "DVD",
    context: "Consumer Media",
    clarify: true,
    usages: [
      {
        application: consumerApplication,
        item: usage(consumerPage, 0x8b),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=135",
    os: {
      // C_MEDIA_DVD
      windows: null,
      linux: true,
      android: false,
      macos: null,
      ios: null,
    },
    footnotes: {},
  },
  {
    names: ["C_MEDIA_PHONE"],
    description: "Telephone",
    context: "Consumer Media",
    clarify: true,
    usages: [
      {
        application: consumerApplication,
        item: usage(consumerPage, 0x8c),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=135",
    os: {
      // C_MEDIA_PHONE
      windows: null,
      linux: true,
      android: true,
      macos: null,
      ios: null,
    },
    footnotes: {},
  },
  {
    names: ["C_MEDIA_GUIDE"],
    description: "Program Guide",
    context: "Consumer Media",
    clarify: true,
    usages: [
      {
        application: consumerApplication,
        item: usage(consumerPage, 0x8d),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=135",
    os: {
      // C_MEDIA_GUIDE
      windows: null,
      linux: true,
      android: true,
      macos: null,
      ios: null,
    },
    footnotes: {},
  },
  {
    names: ["C_MEDIA_VIDEOPHONE"],
    description: "Video Phone",
    context: "Consumer Media",
    clarify: true,
    usages: [
      {
        application: consumerApplication,
        item: usage(consumerPage, 0x8e),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=135",
    os: {
      // C_MEDIA_VIDEOPHONE
      windows: null,
      linux: true,
      android: false,
      macos: null,
      ios: null,
    },
    footnotes: {},
  },
  {
    names: ["C_MEDIA_GAMES"],
    description: "Games",
    context: "Consumer Media",
    clarify: true,
    usages: [
      {
        application: consumerApplication,
        item: usage(consumerPage, 0x8f),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=135",
    os: {
      // C_MEDIA_GAMES
      windows: null,
      linux: true,
      android: false,
      macos: null,
      ios: null,
    },
    footnotes: {},
  },
  {
    names: ["C_MEDIA_MESSAGES"],
    description: "Messages",
    context: "Consumer Media",
    clarify: true,
    usages: [
      {
        application: consumerApplication,
        item: usage(consumerPage, 0x90),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=135",
    os: {
      // C_MEDIA_MESSAGES
      windows: null,
      linux: true,
      android: false,
      macos: null,
      ios: null,
    },
    footnotes: {},
  },
  {
    names: ["C_MEDIA_CD"],
    description: "CD",
    context: "Consumer Media",
    clarify: true,
    usages: [
      {
        application: consumerApplication,
        item: usage(consumerPage, 0x91),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=135",
    os: {
      // C_MEDIA_CD
      windows: null,
      linux: true,
      android: false,
      macos: null,
      ios: null,
    },
    footnotes: {},
  },
  {
    names: ["C_MEDIA_VCR"],
    description: "VCR",
    context: "Consumer Media",
    clarify: true,
    usages: [
      {
        application: consumerApplication,
        item: usage(consumerPage, 0x92),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=135",
    os: {
      // C_MEDIA_VCR
      windows: null,
      linux: true,
      android: false,
      macos: null,
      ios: null,
    },
    footnotes: {},
  },
  {
    names: ["C_MEDIA_TUNER"],
    description: "Tuner",
    context: "Consumer Media",
    clarify: true,
    usages: [
      {
        application: consumerApplication,
        item: usage(consumerPage, 0x93),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=135",
    os: {
      // C_MEDIA_TUNER
      windows: null,
      linux: true,
      android: false,
      macos: null,
      ios: null,
    },
    footnotes: {},
  },
  {
    names: ["C_QUIT"],
    description: "Quit",
    context: "Consumer",
    clarify: true,
    usages: [
      {
        application: consumerApplication,
        item: usage(consumerPage, 0x94),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=135",
    os: {
      // C_QUIT
      windows: null,
      linux: true,
      android: false,
      macos: null,
      ios: null,
    },
    footnotes: {},
  },
  {
    names: ["C_HELP"],
    description: "Help",
    context: "Consumer",
    clarify: true,
    usages: [
      {
        application: consumerApplication,
        item: usage(consumerPage, 0x95),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=135",
    os: {
      // C_HELP
      windows: null,
      linux: true,
      android: false,
      macos: null,
      ios: null,
    },
    footnotes: {},
  },
  {
    names: ["C_MEDIA_TAPE"],
    description: "Tape",
    context: "Consumer Media",
    clarify: true,
    usages: [
      {
        application: consumerApplication,
        item: usage(consumerPage, 0x96),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=135",
    os: {
      // C_MEDIA_TAPE
      windows: null,
      linux: true,
      android: false,
      macos: null,
      ios: null,
    },
    footnotes: {},
  },
  {
    names: ["C_MEDIA_CABLE"],
    description: "Cable",
    context: "Consumer Media",
    clarify: true,
    usages: [
      {
        application: consumerApplication,
        item: usage(consumerPage, 0x97),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=135",
    os: {
      // C_MEDIA_CABLE
      windows: null,
      linux: true,
      android: false,
      macos: null,
      ios: null,
    },
    footnotes: {},
  },
  {
    names: ["C_MEDIA_SATELLITE"],
    description: "Satellite",
    context: "Consumer Media",
    clarify: true,
    usages: [
      {
        application: consumerApplication,
        item: usage(consumerPage, 0x98),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=135",
    os: {
      // C_MEDIA_SATELLITE
      windows: null,
      linux: true,
      android: false,
      macos: null,
      ios: null,
    },
    footnotes: {},
  },
  {
    names: ["C_MEDIA_HOME"],
    description: "Home",
    context: "Consumer Media",
    clarify: true,
    usages: [
      {
        application: consumerApplication,
        item: usage(consumerPage, 0x9a),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=136",
    os: {
      // C_MEDIA_HOME
      windows: null,
      linux: true,
      android: true,
      macos: null,
      ios: null,
    },
    footnotes: {},
  },
  {
    names: ["C_CHANNEL_INC", "C_CHAN_INC"],
    description: "Channel Increment",
    context: "Consumer",
    clarify: true,
    usages: [
      {
        application: consumerApplication,
        item: usage(consumerPage, 0x9c),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=136",
    os: {
      // C_CHANNEL_INC
      windows: null,
      linux: true,
      android: true,
      macos: null,
      ios: null,
    },
    footnotes: {},
  },
  {
    names: ["C_CHANNEL_DEC", "C_CHAN_DEC"],
    description: "Channel Decrement",
    context: "Consumer",
    clarify: true,
    usages: [
      {
        application: consumerApplication,
        item: usage(consumerPage, 0x9d),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=136",
    os: {
      // C_CHANNEL_DEC
      windows: null,
      linux: true,
      android: true,
      macos: null,
      ios: null,
    },
    footnotes: {},
  },
  {
    names: ["C_MEDIA_VCR_PLUS"],
    description: "VCR Plus",
    context: "Consumer Media",
    clarify: true,
    usages: [
      {
        application: consumerApplication,
        item: usage(consumerPage, 0xa0),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=135",
    os: {
      // C_MEDIA_VCR_PLUS
      windows: null,
      linux: true,
      android: false,
      macos: null,
      ios: null,
    },
    footnotes: {},
  },
  {
    names: ["C_PLAY"],
    description: "Play",
    context: "Consumer",
    clarify: true,
    usages: [
      {
        application: consumerApplication,
        item: usage(consumerPage, 0xb0),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=137",
    os: {
      // C_PLAY
      windows: null,
      linux: true,
      android: true,
      macos: null,
      ios: null,
    },
    footnotes: {},
  },
  {
    names: ["C_PAUSE"],
    description: "Pause",
    context: "Consumer",
    clarify: true,
    usages: [
      {
        application: consumerApplication,
        item: usage(consumerPage, 0xb1),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=137",
    os: {
      // C_PAUSE
      windows: null,
      linux: true,
      android: true,
      macos: null,
      ios: null,
    },
    footnotes: {},
  },
  {
    names: ["C_RECORD", "C_REC"],
    description: "Record",
    context: "Consumer",
    clarify: true,
    usages: [
      {
        application: consumerApplication,
        item: usage(consumerPage, 0xb2),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=137",
    os: {
      // C_RECORD
      windows: null,
      linux: true,
      android: true,
      macos: null,
      ios: null,
    },
    footnotes: {},
  },
  {
    names: ["C_FAST_FORWARD", "C_FF"],
    description: "Fast Forward",
    context: "Consumer",
    clarify: true,
    usages: [
      {
        application: consumerApplication,
        item: usage(consumerPage, 0xb3),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=137",
    os: {
      // C_FAST_FORWARD
      windows: null,
      linux: true,
      android: true,
      macos: null,
      ios: null,
    },
    footnotes: {},
  },
  {
    names: ["C_REWIND", "C_RW"],
    description: "Rewind",
    context: "Consumer",
    clarify: true,
    usages: [
      {
        application: consumerApplication,
        item: usage(consumerPage, 0xb4),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=137",
    os: {
      // C_REWIND
      windows: null,
      linux: true,
      android: true,
      macos: null,
      ios: null,
    },
    footnotes: {},
  },
  {
    names: ["C_NEXT"],
    description: "Next",
    context: "Consumer",
    clarify: true,
    usages: [
      {
        application: consumerApplication,
        item: usage(consumerPage, 0xb5),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=137",
    os: {
      // C_NEXT
      windows: null,
      linux: true,
      android: true,
      macos: null,
      ios: null,
    },
    footnotes: {},
  },
  {
    names: ["C_PREVIOUS", "C_PREV"],
    description: "Previous",
    context: "Consumer",
    clarify: true,
    usages: [
      {
        application: consumerApplication,
        item: usage(consumerPage, 0xb6),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=137",
    os: {
      // C_PREVIOUS
      windows: null,
      linux: true,
      android: true,
      macos: null,
      ios: null,
    },
    footnotes: {},
  },
  {
    names: ["C_STOP"],
    description: "Stop",
    context: "Consumer",
    clarify: true,
    usages: [
      {
        application: consumerApplication,
        item: usage(consumerPage, 0xb7),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=137",
    os: {
      // C_STOP
      windows: null,
      linux: true,
      android: true,
      macos: null,
      ios: null,
    },
    footnotes: {},
  },
  {
    names: ["C_EJECT"],
    description: "Eject",
    context: "Consumer",
    clarify: true,
    usages: [
      {
        application: consumerApplication,
        item: usage(consumerPage, 0xb8),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=137",
    os: {
      // C_EJECT
      windows: null,
      linux: true,
      android: true,
      macos: null,
      ios: null,
    },
    footnotes: {},
  },
  {
    names: ["C_RANDOM_PLAY", "C_SHUFFLE"],
    description: "Random Play",
    context: "Consumer",
    clarify: true,
    usages: [
      {
        application: consumerApplication,
        item: usage(consumerPage, 0xb9),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=137",
    os: {
      // C_RANDOM_PLAY
      windows: null,
      linux: true,
      android: false,
      macos: null,
      ios: null,
    },
    footnotes: {},
  },
  {
    names: ["C_REPEAT"],
    description: "Repeat",
    context: "Consumer",
    clarify: true,
    usages: [
      {
        application: consumerApplication,
        item: usage(consumerPage, 0xbc),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=137",
    os: {
      // C_REPEAT
      windows: null,
      linux: true,
      android: false,
      macos: null,
      ios: null,
    },
    footnotes: {},
  },
  {
    names: ["C_SLOW_TRACKING", "C_SLOW2"],
    description: "Slow Tracking",
    context: "Consumer",
    clarify: true,
    usages: [
      {
        application: consumerApplication,
        item: usage(consumerPage, 0xbf),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=137",
    os: {
      // C_SLOW_TRACKING
      windows: null,
      linux: true,
      android: null,
      macos: null,
      ios: null,
    },
    footnotes: {},
  },
  {
    names: ["C_STOP_EJECT"],
    description: "Stop / Eject",
    context: "Consumer",
    clarify: true,
    usages: [
      {
        application: consumerApplication,
        item: usage(consumerPage, 0xcc),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=137",
    os: {
      // C_STOP_EJECT
      windows: null,
      linux: false,
      android: false,
      macos: null,
      ios: null,
    },
    footnotes: {},
  },
  {
    names: ["C_PLAY_PAUSE", "C_PP"],
    description: "Play / Pause",
    context: "Consumer",
    clarify: true,
    usages: [
      {
        application: consumerApplication,
        item: usage(consumerPage, 0xcd),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=137",
    os: {
      // C_PLAY_PAUSE
      windows: null,
      linux: true,
      android: true,
      macos: null,
      ios: null,
    },
    footnotes: {},
  },
  {
    names: ["C_VOICE_COMMAND"],
    description: "Voice Command",
    context: "Consumer",
    clarify: true,
    usages: [
      {
        application: consumerApplication,
        item: usage(consumerPage, 0xcf),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=132",
    os: {
      // C_VOICE_COMMAND
      windows: null,
      linux: true,
      android: null,
      macos: null,
      ios: null,
    },
    footnotes: {},
  },
  {
    names: ["C_MUTE"],
    description: "Mute",
    context: "Consumer",
    clarify: true,
    usages: [
      {
        application: consumerApplication,
        item: usage(consumerPage, 0xe2),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=139",
    os: {
      // C_MUTE
      windows: null,
      linux: true,
      android: true,
      macos: null,
      ios: null,
    },
    footnotes: {},
  },
  {
    names: ["C_BASS_BOOST"],
    description: "Bass Boost",
    context: "Consumer",
    clarify: true,
    usages: [
      {
        application: consumerApplication,
        item: usage(consumerPage, 0xe5),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=139",
    os: {
      // C_BASS_BOOST
      windows: null,
      linux: true,
      android: false,
      macos: null,
      ios: null,
    },
    footnotes: {},
  },
  {
    names: ["C_VOLUME_UP", "C_VOL_UP"],
    description: "Volume Up",
    context: "Consumer",
    clarify: true,
    usages: [
      {
        application: consumerApplication,
        item: usage(consumerPage, 0xe9),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=139",
    os: {
      // C_VOLUME_UP
      windows: null,
      linux: true,
      android: true,
      macos: null,
      ios: null,
    },
    footnotes: {},
  },
  {
    names: ["C_VOLUME_DOWN", "C_VOL_DN"],
    description: "Volume Down",
    context: "Consumer",
    clarify: true,
    usages: [
      {
        application: consumerApplication,
        item: usage(consumerPage, 0xea),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=139",
    os: {
      // C_VOLUME_DOWN
      windows: null,
      linux: true,
      android: true,
      macos: null,
      ios: null,
    },
    footnotes: {},
  },
  {
    names: ["C_SLOW"],
    description: "Slow",
    context: "Consumer",
    clarify: true,
    usages: [
      {
        application: consumerApplication,
        item: usage(consumerPage, 0xf5),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=141",
    os: {
      // C_SLOW
      windows: null,
      linux: true,
      android: null,
      macos: null,
      ios: null,
    },
    footnotes: {},
  },
  {
    names: ["C_ALTERNATE_AUDIO_INCREMENT", "C_ALT_AUDIO_INC"],
    description: "Alternate Audio Increment",
    context: "Consumer",
    clarify: true,
    usages: [
      {
        application: consumerApplication,
        item: usage(consumerPage, 0x173),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf",
    os: {
      // C_ALTERNATE_AUDIO_INCREMENT
      windows: null,
      linux: false,
      android: true,
      macos: null,
      ios: null,
    },
    footnotes: {},
  },
  {
    names: ["C_AL_CCC"],
    description: "Consumer Control Configuration",
    context: "Consumer AL",
    clarify: true,
    usages: [
      {
        application: consumerApplication,
        item: usage(consumerPage, 0x183),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=147",
    os: {
      // C_AL_CCC
      windows: null,
      linux: true,
      android: true,
      macos: null,
      ios: null,
    },
    footnotes: {},
  },
  {
    names: ["C_AL_WORD"],
    description: "Word Processor",
    context: "Consumer AL",
    clarify: true,
    usages: [
      {
        application: consumerApplication,
        item: usage(consumerPage, 0x184),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=147",
    os: {
      // C_AL_WORD
      windows: null,
      linux: true,
      android: false,
      macos: null,
      ios: null,
    },
    footnotes: {},
  },
  {
    names: ["C_AL_TEXT_EDITOR"],
    description: "Text Editor",
    context: "Consumer AL",
    clarify: true,
    usages: [
      {
        application: consumerApplication,
        item: usage(consumerPage, 0x185),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=147",
    os: {
      // C_AL_TEXT_EDITOR
      windows: null,
      linux: true,
      android: false,
      macos: null,
      ios: null,
    },
    footnotes: {},
  },
  {
    names: ["C_AL_SPREADSHEET", "C_AL_SHEET"],
    description: "Spreadsheet",
    context: "Consumer AL",
    clarify: true,
    usages: [
      {
        application: consumerApplication,
        item: usage(consumerPage, 0x186),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=147",
    os: {
      // C_AL_SPREADSHEET
      windows: null,
      linux: true,
      android: false,
      macos: null,
      ios: null,
    },
    footnotes: {},
  },
  {
    names: ["C_AL_GRAPHICS_EDITOR"],
    description: "Graphics Editor",
    context: "Consumer AL",
    clarify: true,
    usages: [
      {
        application: consumerApplication,
        item: usage(consumerPage, 0x187),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=147",
    os: {
      // C_AL_GRAPHICS_EDITOR
      windows: null,
      linux: true,
      android: false,
      macos: null,
      ios: null,
    },
    footnotes: {},
  },
  {
    names: ["C_AL_PRESENTATION"],
    description: "Presentation",
    context: "Consumer AL",
    clarify: true,
    usages: [
      {
        application: consumerApplication,
        item: usage(consumerPage, 0x188),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=147",
    os: {
      // C_AL_PRESENTATION
      windows: null,
      linux: true,
      android: false,
      macos: null,
      ios: null,
    },
    footnotes: {},
  },
  {
    names: ["C_AL_DATABASE", "C_AL_DB"],
    description: "Database App",
    context: "Consumer AL",
    clarify: true,
    usages: [
      {
        application: consumerApplication,
        item: usage(consumerPage, 0x189),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=147",
    os: {
      // C_AL_DATABASE
      windows: null,
      linux: true,
      android: false,
      macos: null,
      ios: null,
    },
    footnotes: {},
  },
  {
    names: ["C_AL_EMAIL", "C_AL_MAIL"],
    description: "Email Reader",
    context: "Consumer AL",
    clarify: true,
    usages: [
      {
        application: consumerApplication,
        item: usage(consumerPage, 0x18a),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=147",
    os: {
      // C_AL_EMAIL
      windows: null,
      linux: true,
      android: true,
      macos: null,
      ios: null,
    },
    footnotes: {},
  },
  {
    names: ["C_AL_NEWS"],
    description: "Newsreader",
    context: "Consumer AL",
    clarify: true,
    usages: [
      {
        application: consumerApplication,
        item: usage(consumerPage, 0x18b),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=147",
    os: {
      // C_AL_NEWS
      windows: null,
      linux: true,
      android: false,
      macos: null,
      ios: null,
    },
    footnotes: {},
  },
  {
    names: ["C_AL_VOICEMAIL"],
    description: "Voicemail",
    context: "Consumer AL",
    clarify: true,
    usages: [
      {
        application: consumerApplication,
        item: usage(consumerPage, 0x18c),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=147",
    os: {
      // C_AL_VOICEMAIL
      windows: null,
      linux: true,
      android: false,
      macos: null,
      ios: null,
    },
    footnotes: {},
  },
  {
    names: ["C_AL_CONTACTS", "C_AL_ADDRESS_BOOK"],
    description: "Contacts / Address Book",
    context: "Consumer AL",
    clarify: true,
    usages: [
      {
        application: consumerApplication,
        item: usage(consumerPage, 0x18d),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=147",
    os: {
      // C_AL_CONTACTS
      windows: null,
      linux: true,
      android: true,
      macos: null,
      ios: null,
    },
    footnotes: {},
  },
  {
    names: ["C_AL_CALENDAR", "C_AL_CAL"],
    description: "Calendar / Schedule",
    context: "Consumer AL",
    clarify: true,
    usages: [
      {
        application: consumerApplication,
        item: usage(consumerPage, 0x18e),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=147",
    os: {
      // C_AL_CALENDAR
      windows: null,
      linux: true,
      android: true,
      macos: null,
      ios: null,
    },
    footnotes: {},
  },
  {
    names: ["C_AL_TASK_MANAGER"],
    description: "Task / Project Manager",
    context: "Consumer AL",
    clarify: true,
    usages: [
      {
        application: consumerApplication,
        item: usage(consumerPage, 0x18f),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=147",
    os: {
      // C_AL_TASK_MANAGER
      windows: null,
      linux: true,
      android: false,
      macos: null,
      ios: null,
    },
    footnotes: {},
  },
  {
    names: ["C_AL_JOURNAL"],
    description: "Log / Journal / Timecard",
    context: "Consumer AL",
    clarify: true,
    usages: [
      {
        application: consumerApplication,
        item: usage(consumerPage, 0x190),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=147",
    os: {
      // C_AL_JOURNAL
      windows: null,
      linux: true,
      android: false,
      macos: null,
      ios: null,
    },
    footnotes: {},
  },
  {
    names: ["C_AL_FINANCE"],
    description: "Checkbook / Finance",
    context: "Consumer AL",
    clarify: true,
    usages: [
      {
        application: consumerApplication,
        item: usage(consumerPage, 0x191),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=147",
    os: {
      // C_AL_FINANCE
      windows: null,
      linux: true,
      android: false,
      macos: null,
      ios: null,
    },
    footnotes: {},
  },
  {
    names: ["C_AL_CALCULATOR", "C_AL_CALC"],
    description: "Calculator",
    context: "Consumer AL",
    clarify: true,
    usages: [
      {
        application: consumerApplication,
        item: usage(consumerPage, 0x192),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=147",
    os: {
      // C_AL_CALCULATOR
      windows: null,
      linux: true,
      android: true,
      macos: null,
      ios: null,
    },
    footnotes: {},
  },
  {
    names: ["C_AL_AV_CAPTURE_PLAYBACK"],
    description: "A/V Capture / Playback",
    context: "Consumer AL",
    clarify: true,
    usages: [
      {
        application: consumerApplication,
        item: usage(consumerPage, 0x193),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=147",
    os: {
      // C_AL_AV_CAPTURE_PLAYBACK
      windows: null,
      linux: true,
      android: false,
      macos: null,
      ios: null,
    },
    footnotes: {},
  },
  {
    names: ["C_AL_MY_COMPUTER"],
    description: "Local Machine Browser",
    context: "Consumer AL",
    clarify: true,
    usages: [
      {
        application: consumerApplication,
        item: usage(consumerPage, 0x194),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=147",
    os: {
      // C_AL_MY_COMPUTER
      windows: null,
      linux: true,
      android: false,
      macos: null,
      ios: null,
    },
    footnotes: {},
  },
  {
    names: ["C_AL_WWW"],
    description: "Internet Browser",
    context: "Consumer AL",
    clarify: true,
    usages: [
      {
        application: consumerApplication,
        item: usage(consumerPage, 0x196),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=147",
    os: {
      // C_AL_WWW
      windows: null,
      linux: true,
      android: true,
      macos: null,
      ios: null,
    },
    footnotes: {},
  },
  {
    names: ["C_AL_NETWORK_CHAT", "C_AL_CHAT"],
    description: "Network Chat",
    context: "Consumer AL",
    clarify: true,
    usages: [
      {
        application: consumerApplication,
        item: usage(consumerPage, 0x199),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=148",
    os: {
      // C_AL_NETWORK_CHAT
      windows: null,
      linux: true,
      android: false,
      macos: null,
      ios: null,
    },
    footnotes: {},
  },
  {
    names: ["C_AL_LOGOFF"],
    description: "Logoff",
    context: "Consumer AL",
    clarify: true,
    usages: [
      {
        application: consumerApplication,
        item: usage(consumerPage, 0x19c),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=148",
    os: {
      // C_AL_LOGOFF
      windows: null,
      linux: true,
      android: false,
      macos: null,
      ios: null,
    },
    footnotes: {},
  },
  {
    names: ["C_AL_LOCK", "C_AL_SCREENSAVER", "C_AL_COFFEE"],
    description: "Terminal Lock / Screensaver",
    context: "Consumer AL",
    clarify: true,
    usages: [
      {
        application: consumerApplication,
        item: usage(consumerPage, 0x19e),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=148",
    os: {
      // C_AL_LOCK
      windows: null,
      linux: true,
      android: true,
      macos: null,
      ios: null,
    },
    footnotes: {},
  },
  {
    names: ["C_AL_CONTROL_PANEL"],
    description: "Control Panel",
    context: "Consumer AL",
    clarify: true,
    usages: [
      {
        application: consumerApplication,
        item: usage(consumerPage, 0x19f),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=148",
    os: {
      // C_AL_CONTROL_PANEL
      windows: null,
      linux: true,
      android: false,
      macos: null,
      ios: null,
    },
    footnotes: {},
  },
  {
    names: ["C_AL_SELECT_TASK"],
    description: "Select Task / Application",
    context: "Consumer AL",
    clarify: true,
    usages: [
      {
        application: consumerApplication,
        item: usage(consumerPage, 0x1a2),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=148",
    os: {
      // C_AL_SELECT_TASK
      windows: null,
      linux: true,
      android: false,
      macos: null,
      ios: null,
    },
    footnotes: {},
  },
  {
    names: ["C_AL_NEXT_TASK"],
    description: "Next Task / Application",
    context: "Consumer AL",
    clarify: true,
    usages: [
      {
        application: consumerApplication,
        item: usage(consumerPage, 0x1a3),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=148",
    os: {
      // C_AL_NEXT_TASK
      windows: null,
      linux: true,
      android: false,
      macos: null,
      ios: null,
    },
    footnotes: {},
  },
  {
    names: ["C_AL_PREVIOUS_TASK", "C_AL_PREV_TASK"],
    description: "Previous Task / Application",
    context: "Consumer AL",
    clarify: true,
    usages: [
      {
        application: consumerApplication,
        item: usage(consumerPage, 0x1a4),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=148",
    os: {
      // C_AL_PREVIOUS_TASK
      windows: null,
      linux: true,
      android: false,
      macos: null,
      ios: null,
    },
    footnotes: {},
  },
  {
    names: ["C_AL_HELP"],
    description: "Integrated Help Center",
    context: "Consumer AL",
    clarify: true,
    usages: [
      {
        application: consumerApplication,
        item: usage(consumerPage, 0x1a6),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=148",
    os: {
      // C_AL_HELP
      windows: null,
      linux: true,
      android: false,
      macos: null,
      ios: null,
    },
    footnotes: {},
  },
  {
    names: ["C_AL_DOCUMENTS", "C_AL_DOCS"],
    description: "Documents",
    context: "Consumer AL",
    clarify: true,
    usages: [
      {
        application: consumerApplication,
        item: usage(consumerPage, 0x1a7),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=148",
    os: {
      // C_AL_DOCUMENTS
      windows: null,
      linux: true,
      android: false,
      macos: null,
      ios: null,
    },
    footnotes: {},
  },
  {
    names: ["C_AL_SPELLCHECK", "C_AL_SPELL"],
    description: "Spell Check",
    context: "Consumer AL",
    clarify: true,
    usages: [
      {
        application: consumerApplication,
        item: usage(consumerPage, 0x1ab),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=148",
    os: {
      // C_AL_SPELLCHECK
      windows: null,
      linux: true,
      android: false,
      macos: null,
      ios: null,
    },
    footnotes: {},
  },
  {
    names: ["C_AL_KEYBOARD_LAYOUT"],
    description: "Keyboard Layout",
    context: "Consumer AL",
    clarify: true,
    usages: [
      {
        application: consumerApplication,
        item: usage(consumerPage, 0x1ae),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=148",
    os: {
      // C_AL_KEYBOARD_LAYOUT
      windows: null,
      linux: true,
      android: false,
      macos: null,
      ios: null,
    },
    footnotes: {},
  },
  {
    names: ["C_AL_SCREEN_SAVER"],
    description: "Screen Saver",
    context: "Consumer AL",
    clarify: true,
    usages: [
      {
        application: consumerApplication,
        item: usage(consumerPage, 0x1b1),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=148",
    os: {
      // C_AL_SCREEN_SAVER
      windows: null,
      linux: true,
      android: false,
      macos: null,
      ios: null,
    },
    footnotes: {},
  },
  {
    names: ["C_AL_FILE_BROWSER", "C_AL_FILES"],
    description: "File Browser",
    context: "Consumer AL",
    clarify: true,
    usages: [
      {
        application: consumerApplication,
        item: usage(consumerPage, 0x1b4),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=148",
    os: {
      // C_AL_FILE_BROWSER
      windows: null,
      linux: true,
      android: false,
      macos: null,
      ios: null,
    },
    footnotes: {},
  },
  {
    names: ["C_AL_IMAGE_BROWSER", "C_AL_IMAGES"],
    description: "Image Browser",
    context: "Consumer AL",
    clarify: true,
    usages: [
      {
        application: consumerApplication,
        item: usage(consumerPage, 0x1b6),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=148",
    os: {
      // C_AL_IMAGE_BROWSER
      windows: null,
      linux: true,
      android: true,
      macos: null,
      ios: null,
    },
    footnotes: {},
  },
  {
    names: ["C_AL_AUDIO_BROWSER", "C_AL_AUDIO", "C_AL_MUSIC"],
    description: "Audio Browser",
    context: "Consumer AL",
    clarify: true,
    usages: [
      {
        application: consumerApplication,
        item: usage(consumerPage, 0x1b7),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=148",
    os: {
      // C_AL_AUDIO_BROWSER
      windows: null,
      linux: true,
      android: true,
      macos: null,
      ios: null,
    },
    footnotes: {},
  },
  {
    names: ["C_AL_MOVIE_BROWSER", "C_AL_MOVIES"],
    description: "Movie Browser",
    context: "Consumer AL",
    clarify: true,
    usages: [
      {
        application: consumerApplication,
        item: usage(consumerPage, 0x1b8),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=148",
    os: {
      // C_AL_MOVIE_BROWSER
      windows: null,
      linux: true,
      android: false,
      macos: null,
      ios: null,
    },
    footnotes: {},
  },
  {
    names: ["C_AL_INSTANT_MESSAGING", "C_AL_IM"],
    description: "Instant Messaging",
    context: "Consumer AL",
    clarify: true,
    usages: [
      {
        application: consumerApplication,
        item: usage(consumerPage, 0x1bc),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=149",
    os: {
      // C_AL_INSTANT_MESSAGING
      windows: null,
      linux: true,
      android: false,
      macos: null,
      ios: null,
    },
    footnotes: {},
  },
  {
    names: ["C_AL_OEM_FEATURES", "C_AL_TIPS", "C_AL_TUTORIAL"],
    description: "OEM Features / Tips / Tutorial Browser",
    context: "Consumer AL",
    clarify: true,
    usages: [
      {
        application: consumerApplication,
        item: usage(consumerPage, 0x1bd),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=149",
    os: {
      // C_AL_OEM_FEATURES
      windows: null,
      linux: true,
      android: false,
      macos: null,
      ios: null,
    },
    footnotes: {},
  },
  {
    names: ["C_AC_NEW"],
    description: "New",
    context: "Consumer AC",
    clarify: true,
    usages: [
      {
        application: consumerApplication,
        item: usage(consumerPage, 0x201),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=150",
    os: {
      // C_AC_NEW
      windows: null,
      linux: true,
      android: false,
      macos: null,
      ios: null,
    },
    footnotes: {},
  },
  {
    names: ["C_AC_OPEN"],
    description: "Open",
    context: "Consumer AC",
    clarify: true,
    usages: [
      {
        application: consumerApplication,
        item: usage(consumerPage, 0x202),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=150",
    os: {
      // C_AC_OPEN
      windows: null,
      linux: true,
      android: false,
      macos: null,
      ios: null,
    },
    footnotes: {},
  },
  {
    names: ["C_AC_CLOSE"],
    description: "Close",
    context: "Consumer AC",
    clarify: true,
    usages: [
      {
        application: consumerApplication,
        item: usage(consumerPage, 0x203),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=150",
    os: {
      // C_AC_CLOSE
      windows: null,
      linux: true,
      android: false,
      macos: null,
      ios: null,
    },
    footnotes: {},
  },
  {
    names: ["C_AC_EXIT"],
    description: "Exit",
    context: "Consumer AC",
    clarify: true,
    usages: [
      {
        application: consumerApplication,
        item: usage(consumerPage, 0x204),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=150",
    os: {
      // C_AC_EXIT
      windows: null,
      linux: true,
      android: false,
      macos: null,
      ios: null,
    },
    footnotes: {},
  },
  {
    names: ["C_AC_SAVE"],
    description: "Save",
    context: "Consumer AC",
    clarify: true,
    usages: [
      {
        application: consumerApplication,
        item: usage(consumerPage, 0x207),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=150",
    os: {
      // C_AC_SAVE
      windows: null,
      linux: true,
      android: false,
      macos: null,
      ios: null,
    },
    footnotes: {},
  },
  {
    names: ["C_AC_PRINT"],
    description: "Print",
    context: "Consumer AC",
    clarify: true,
    usages: [
      {
        application: consumerApplication,
        item: usage(consumerPage, 0x208),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=150",
    os: {
      // C_AC_PRINT
      windows: null,
      linux: true,
      android: false,
      macos: null,
      ios: null,
    },
    footnotes: {},
  },
  {
    names: ["C_AC_PROPERTIES", "C_AC_PROPS"],
    description: "Properties",
    context: "Consumer AC",
    clarify: true,
    usages: [
      {
        application: consumerApplication,
        item: usage(consumerPage, 0x209),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=150",
    os: {
      // C_AC_PROPERTIES
      windows: null,
      linux: true,
      android: false,
      macos: null,
      ios: null,
    },
    footnotes: {},
  },
  {
    names: ["C_AC_UNDO"],
    description: "Undo",
    context: "Consumer AC",
    clarify: true,
    usages: [
      {
        application: consumerApplication,
        item: usage(consumerPage, 0x21a),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=150",
    os: {
      // C_AC_UNDO
      windows: null,
      linux: true,
      android: false,
      macos: null,
      ios: null,
    },
    footnotes: {},
  },
  {
    names: ["C_AC_COPY"],
    description: "Copy",
    context: "Consumer AC",
    clarify: true,
    usages: [
      {
        application: consumerApplication,
        item: usage(consumerPage, 0x21b),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=150",
    os: {
      // C_AC_COPY
      windows: null,
      linux: true,
      android: false,
      macos: null,
      ios: null,
    },
    footnotes: {},
  },
  {
    names: ["C_AC_CUT"],
    description: "Cut",
    context: "Consumer AC",
    clarify: true,
    usages: [
      {
        application: consumerApplication,
        item: usage(consumerPage, 0x21c),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=150",
    os: {
      // C_AC_CUT
      windows: null,
      linux: true,
      android: false,
      macos: null,
      ios: null,
    },
    footnotes: {},
  },
  {
    names: ["C_AC_PASTE"],
    description: "Paste",
    context: "Consumer AC",
    clarify: true,
    usages: [
      {
        application: consumerApplication,
        item: usage(consumerPage, 0x21d),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=150",
    os: {
      // C_AC_PASTE
      windows: null,
      linux: true,
      android: false,
      macos: null,
      ios: null,
    },
    footnotes: {},
  },
  {
    names: ["C_AC_FIND"],
    description: "Find",
    context: "Consumer AC",
    clarify: true,
    usages: [
      {
        application: consumerApplication,
        item: usage(consumerPage, 0x21f),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=150",
    os: {
      // C_AC_FIND
      windows: null,
      linux: true,
      android: false,
      macos: null,
      ios: null,
    },
    footnotes: {},
  },
  {
    names: ["C_AC_SEARCH"],
    description: "Search",
    context: "Consumer AC",
    clarify: true,
    usages: [
      {
        application: consumerApplication,
        item: usage(consumerPage, 0x221),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=150",
    os: {
      // C_AC_SEARCH
      windows: null,
      linux: true,
      android: true,
      macos: null,
      ios: null,
    },
    footnotes: {},
  },
  {
    names: ["C_AC_GOTO"],
    description: "Go To",
    context: "Consumer AC",
    clarify: true,
    usages: [
      {
        application: consumerApplication,
        item: usage(consumerPage, 0x222),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=150",
    os: {
      // C_AC_GOTO
      windows: null,
      linux: true,
      android: false,
      macos: null,
      ios: null,
    },
    footnotes: {},
  },
  {
    names: ["C_AC_HOME"],
    description: "Home",
    context: "Consumer AC",
    clarify: true,
    usages: [
      {
        application: consumerApplication,
        item: usage(consumerPage, 0x223),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=150",
    os: {
      // C_AC_HOME
      windows: null,
      linux: true,
      android: true,
      macos: null,
      ios: null,
    },
    footnotes: {},
  },
  {
    names: ["C_AC_BACK"],
    description: "Back",
    context: "Consumer AC",
    clarify: true,
    usages: [
      {
        application: consumerApplication,
        item: usage(consumerPage, 0x224),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=150",
    os: {
      // C_AC_BACK
      windows: null,
      linux: true,
      android: true,
      macos: null,
      ios: null,
    },
    footnotes: {},
  },
  {
    names: ["C_AC_FORWARD"],
    description: "Forward",
    context: "Consumer AC",
    clarify: true,
    usages: [
      {
        application: consumerApplication,
        item: usage(consumerPage, 0x225),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=150",
    os: {
      // C_AC_FORWARD
      windows: null,
      linux: true,
      android: true,
      macos: null,
      ios: null,
    },
    footnotes: {},
  },
  {
    names: ["C_AC_STOP"],
    description: "Stop",
    context: "Consumer AC",
    clarify: true,
    usages: [
      {
        application: consumerApplication,
        item: usage(consumerPage, 0x226),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=150",
    os: {
      // C_AC_STOP
      windows: null,
      linux: true,
      android: true,
      macos: null,
      ios: null,
    },
    footnotes: {},
  },
  {
    names: ["C_AC_REFRESH"],
    description: "Refresh",
    context: "Consumer AC",
    clarify: true,
    usages: [
      {
        application: consumerApplication,
        item: usage(consumerPage, 0x227),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=150",
    os: {
      // C_AC_REFRESH
      windows: null,
      linux: true,
      android: false,
      macos: null,
      ios: null,
    },
    footnotes: {},
  },
  {
    names: ["C_AC_BOOKMARKS", "C_AC_FAVORITES", "C_AC_FAVOURITES"],
    description: "Bookmarks",
    context: "Consumer AC",
    clarify: true,
    usages: [
      {
        application: consumerApplication,
        item: usage(consumerPage, 0x22a),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=150",
    os: {
      // C_AC_BOOKMARKS
      windows: null,
      linux: true,
      android: true,
      macos: null,
      ios: null,
    },
    footnotes: {},
  },
  {
    names: ["C_AC_ZOOM_IN"],
    description: "Zoom In",
    context: "Consumer AC",
    clarify: true,
    usages: [
      {
        application: consumerApplication,
        item: usage(consumerPage, 0x22d),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=150",
    os: {
      // C_AC_ZOOM_IN
      windows: null,
      linux: true,
      android: false,
      macos: null,
      ios: null,
    },
    footnotes: {},
  },
  {
    names: ["C_AC_ZOOM_OUT"],
    description: "Zoom Out",
    context: "Consumer AC",
    clarify: true,
    usages: [
      {
        application: consumerApplication,
        item: usage(consumerPage, 0x22e),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=150",
    os: {
      // C_AC_ZOOM_OUT
      windows: null,
      linux: true,
      android: false,
      macos: null,
      ios: null,
    },
    footnotes: {},
  },
  {
    names: ["C_AC_ZOOM"],
    description: "Zoom",
    context: "Consumer AC",
    clarify: true,
    usages: [
      {
        application: consumerApplication,
        item: usage(consumerPage, 0x22f),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=150",
    os: {
      // C_AC_ZOOM
      windows: null,
      linux: true,
      android: false,
      macos: null,
      ios: null,
    },
    footnotes: {},
  },
  {
    names: ["C_AC_VIEW_TOGGLE"],
    description: "View Toggle",
    context: "Consumer AC",
    clarify: true,
    usages: [
      {
        application: consumerApplication,
        item: usage(consumerPage, 0x232),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=151",
    os: {
      // C_AC_VIEW_TOGGLE
      windows: null,
      linux: true,
      android: false,
      macos: null,
      ios: null,
    },
    footnotes: {},
  },
  {
    names: ["C_AC_SCROLL_UP"],
    description: "Scroll Up",
    context: "Consumer AC",
    clarify: true,
    usages: [
      {
        application: consumerApplication,
        item: usage(consumerPage, 0x233),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=151",
    os: {
      // C_AC_SCROLL_UP
      windows: null,
      linux: true,
      android: true,
      macos: null,
      ios: null,
    },
    footnotes: {},
  },
  {
    names: ["C_AC_SCROLL_DOWN"],
    description: "Scroll Down",
    context: "Consumer AC",
    clarify: true,
    usages: [
      {
        application: consumerApplication,
        item: usage(consumerPage, 0x234),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=151",
    os: {
      // C_AC_SCROLL_DOWN
      windows: null,
      linux: true,
      android: true,
      macos: null,
      ios: null,
    },
    footnotes: {},
  },
  {
    names: ["C_AC_EDIT"],
    description: "Edit",
    context: "Consumer AC",
    clarify: true,
    usages: [
      {
        application: consumerApplication,
        item: usage(consumerPage, 0x23d),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=151",
    os: {
      // C_AC_EDIT
      windows: null,
      linux: true,
      android: false,
      macos: null,
      ios: null,
    },
    footnotes: {},
  },
  {
    names: ["C_AC_CANCEL"],
    description: "Cancel",
    context: "Consumer AC",
    clarify: true,
    usages: [
      {
        application: consumerApplication,
        item: usage(consumerPage, 0x25f),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=152",
    os: {
      // C_AC_CANCEL
      windows: null,
      linux: true,
      android: false,
      macos: null,
      ios: null,
    },
    footnotes: {},
  },
  {
    names: ["C_AC_INSERT", "C_AC_INS"],
    description: "Insert Mode",
    context: "Consumer AC",
    clarify: true,
    usages: [
      {
        application: consumerApplication,
        item: usage(consumerPage, 0x269),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=152",
    os: {
      // C_AC_INSERT
      windows: null,
      linux: true,
      android: false,
      macos: null,
      ios: null,
    },
    footnotes: {},
  },
  {
    names: ["C_AC_DEL"],
    description: "Delete",
    context: "Consumer AC",
    clarify: true,
    usages: [
      {
        application: consumerApplication,
        item: usage(consumerPage, 0x26a),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=152",
    os: {
      // C_AC_DEL
      windows: null,
      linux: true,
      android: false,
      macos: null,
      ios: null,
    },
    footnotes: {},
  },
  {
    names: ["C_AC_REDO"],
    description: "Redo / Repeat",
    context: "Consumer AC",
    clarify: true,
    usages: [
      {
        application: consumerApplication,
        item: usage(consumerPage, 0x279),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=152",
    os: {
      // C_AC_REDO
      windows: null,
      linux: true,
      android: false,
      macos: null,
      ios: null,
    },
    footnotes: {},
  },
  {
    names: ["C_AC_REPLY"],
    description: "Reply",
    context: "Consumer AC",
    clarify: true,
    usages: [
      {
        application: consumerApplication,
        item: usage(consumerPage, 0x289),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=153",
    os: {
      // C_AC_REPLY
      windows: null,
      linux: true,
      android: false,
      macos: null,
      ios: null,
    },
    footnotes: {},
  },
  {
    names: ["C_AC_FORWARD_MAIL"],
    description: "Forward",
    context: "Consumer AC",
    clarify: true,
    usages: [
      {
        application: consumerApplication,
        item: usage(consumerPage, 0x28b),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=153",
    os: {
      // C_AC_FORWARD_MAIL
      windows: null,
      linux: true,
      android: false,
      macos: null,
      ios: null,
    },
    footnotes: {},
  },
  {
    names: ["C_AC_SEND"],
    description: "Send",
    context: "Consumer AC",
    clarify: true,
    usages: [
      {
        application: consumerApplication,
        item: usage(consumerPage, 0x28c),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=153",
    os: {
      // C_AC_SEND
      windows: null,
      linux: true,
      android: false,
      macos: null,
      ios: null,
    },
    footnotes: {},
  },
  {
    names: ["C_AC_DESKTOP_SHOW_ALL_WINDOWS"],
    description: "Desktop Show All Windows",
    context: "Consumer AC",
    clarify: true,
    usages: [
      {
        application: consumerApplication,
        item: usage(consumerPage, 0x29f),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=153",
    os: {
      // C_AC_DESKTOP_SHOW_ALL_WINDOWS
      windows: null,
      linux: true,
      android: null,
      macos: null,
      ios: null,
    },
    footnotes: {},
  },
  {
    names: ["C_KEYBOARD_INPUT_ASSIST_PREVIOUS", "C_KBIA_PREV"],
    description: "Previous",
    context: "Consumer KBIA",
    clarify: true,
    usages: [
      {
        application: consumerApplication,
        item: usage(consumerPage, 0x2c7),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=157",
    os: {
      // C_KEYBOARD_INPUT_ASSIST_PREVIOUS
      windows: null,
      linux: true,
      android: null,
      macos: null,
      ios: null,
    },
    footnotes: {},
  },
  {
    names: ["C_KEYBOARD_INPUT_ASSIST_NEXT", "C_KBIA_NEXT"],
    description: "Next",
    context: "Consumer KBIA",
    clarify: true,
    usages: [
      {
        application: consumerApplication,
        item: usage(consumerPage, 0x2c8),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=157",
    os: {
      // C_KEYBOARD_INPUT_ASSIST_NEXT
      windows: null,
      linux: true,
      android: null,
      macos: null,
      ios: null,
    },
    footnotes: {},
  },
  {
    names: ["C_KEYBOARD_INPUT_ASSIST_PREVIOUS_GROUP", "C_KBIA_PREV_GRP"],
    description: "Previous Group",
    context: "Consumer KBIA",
    clarify: true,
    usages: [
      {
        application: consumerApplication,
        item: usage(consumerPage, 0x2c9),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=157",
    os: {
      // C_KEYBOARD_INPUT_ASSIST_PREVIOUS_GROUP
      windows: null,
      linux: true,
      android: null,
      macos: null,
      ios: null,
    },
    footnotes: {},
  },
  {
    names: ["C_KEYBOARD_INPUT_ASSIST_NEXT_GROUP", "C_KBIA_NEXT_GRP"],
    description: "Next Group",
    context: "Consumer KBIA",
    clarify: true,
    usages: [
      {
        application: consumerApplication,
        item: usage(consumerPage, 0x2ca),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=157",
    os: {
      // C_KEYBOARD_INPUT_ASSIST_NEXT_GROUP
      windows: null,
      linux: true,
      android: null,
      macos: null,
      ios: null,
    },
    footnotes: {},
  },
  {
    names: ["C_KEYBOARD_INPUT_ASSIST_ACCEPT", "C_KBIA_ACCEPT"],
    description: "Accept",
    context: "Consumer KBIA",
    clarify: true,
    usages: [
      {
        application: consumerApplication,
        item: usage(consumerPage, 0x2cb),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=157",
    os: {
      // C_KEYBOARD_INPUT_ASSIST_ACCEPT
      windows: null,
      linux: true,
      android: null,
      macos: null,
      ios: null,
    },
    footnotes: {},
  },
  {
    names: ["C_KEYBOARD_INPUT_ASSIST_CANCEL", "C_KBIA_CANCEL"],
    description: "Cancel",
    context: "Consumer KBIA",
    clarify: true,
    usages: [
      {
        application: consumerApplication,
        item: usage(consumerPage, 0x2cc),
      },
    ],
    documentation: "https://usb.org/sites/default/files/hut1_2.pdf#page=157",
    os: {
      // C_KEYBOARD_INPUT_ASSIST_CANCEL
      windows: null,
      linux: true,
      android: null,
      macos: null,
      ios: null,
    },
    footnotes: {},
  },
];
