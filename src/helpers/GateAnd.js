const GateAnd = {
  pathString: "M9 0H29A.5.5 90 0129 24H9ZM12 3V21H29A.5.5 90 0029 3ZM10 6H0V4H10ZM10 20H0V18H10ZM39 11H48V13H39Z",
  size: {
    x: 48,
    y: 24,
  },
  in: [
    {
      pos: { x: 0 , y: 3 }
    },
    {
      pos: { x: 0 , y: 17 }
    },
  ],
  out: [
    {
      pos: { x: 45 , y: 10 }
    }
  ],
  logic: (...a) => a[0] && a[1]
}

export default GateAnd;