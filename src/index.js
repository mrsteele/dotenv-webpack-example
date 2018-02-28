// const { TEST, TEST2 } = process.env
//
// document.querySelector('body').innerHTML = `
//   Structured: ${process.env.TEST}<br />
//   Destructured: ${TEST}<br />
//   <hr />
//   Structured: ${process.env.TEST2}<br />
//   Destructured: ${TEST2}<br />
// `

console.log('we are here')
console.log('process.env', process.env)

document.querySelector('body').innerHTML = `
  env: ${process.env.TEST}<br />
  define: ${process.env.SUPERTEST}<br />
  all: ${JSON.stringify(process.env)}
`
