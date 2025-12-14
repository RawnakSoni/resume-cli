#!/usr/bin/env node

const chalk = require("chalk")
const boxen = require("boxen")

const resume = `
${chalk.bold.blue("Ronak Soni")}
Backend Engineer | Node.js | Solana | MongoDB | JAVA

📍 Bengaluru, India
🔗 LinkedIn: https://linkedin.com/in/rawnaksoni
📧 Email: sonironak284@gmail.com

${chalk.bold("Experience")}
• Software Engineer at Juno
• Built AI-powered recommendation systems
• Worked on Solana wallet infrastructure

${chalk.bold("Skills")}
• Node.js, MongoDB, Redis, JAVA
• Blockchain (Solana)
• System Design

${chalk.bold("Projects")}
• Anoncoin ( Anonymous memecoin launchpad )
• AI-driven social platform

${chalk.bold("Education")}
• Bachelor of Computer Application
`

console.log(
    boxen(resume, {
        padding: 1,
        margin: 1,
        borderStyle: "round",
        borderColor: "cyan",
    })
)