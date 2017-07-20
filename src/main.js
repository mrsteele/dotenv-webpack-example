const { TEST } = process.env

document.querySelector('body').innerHTML = `
  Structured: ${process.env.TEST}<br />
  Destructured: ${TEST}
`
