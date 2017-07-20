const { TEST, TEST2 } = process.env

document.querySelector('body').innerHTML = `
  Structured: ${process.env.TEST}<br />
  Destructured: ${TEST}<br />
  <hr />
  Structured: ${process.env.TEST2}<br />
  Destructured: ${TEST2}<br />
`
