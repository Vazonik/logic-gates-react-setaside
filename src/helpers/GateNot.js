const GateNot = {
  pathString: "M10 0V24L29 13V11ZM11 13V11H0V13ZM29 12A1 1 0 0037 12A1 1 0 0029 12ZM31 12A1 1 0 0135 12A1 1 0 0131 12ZM36 13H48V11H36ZM13 5 26 12 13 19ZM27 13H31V11H27Z",
  size: {
    x: 48,
    y: 24,
  },
  in: [
    {
      pos: { x: 0 , y: 10 }
    }
  ],
  out: [
    {
      pos: { x: 45 , y: 10 }
    }
  ],
  logic: (...a) => !a[0]
}

export default GateNot;