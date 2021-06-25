const GateOr = {
  pathString: "M7 0ZZZZC13 6 13 18 7 24H18C30 24 37 18 41 12V12C37 6 30 0 18 0ZZM12 4H0V6H12ZM12 18H0V20H12ZM38 13H48V11H38ZM13 3H18C30 3 34 8 37 12C34 16 30 21 18 21H13C15 15 15 9 13 3Z",
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
  logic: (...a) => a[0] || a[1]
}

export default GateOr;