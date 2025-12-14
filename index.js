#!/usr/bin/env node

const chalk = require("chalk");
const boxen = require("boxen");

const resume = `
${chalk.blue.bold("Ronak Soni")}
Backend Engineer | Building at the intersection of AI, Blockchain & Automation

📍 Bengaluru, Karnataka, India
🔗 LinkedIn: https://linkedin.com/in/rawnaksoni

${chalk.bold("Skills")}
• Node.js
• GoLang
• TypeScript
• JAVA
• MySql
• MongoDB

${chalk.bold("Experience")}
• AI Engineer ( Anoncoin )
    • Built backend services and APIs for scalable applications.
    • Collaborated with cross-functional teams to define and design new features.

• Software Development Engineer ( JUNO )
    • Assisted in the development of web applications.
    • Maintained and improved existing codebases.

${chalk.bold("Education")}
• Bachelor of Computer Applications
    • Maharshi Dayanand Saraswati University
    • Graduated: 2022

${chalk.bold("Contact")}
• Email: sonironak284@gmail.com
• GitHub: www.github.com/RawnakSoni
• Phone: +918107664092

${chalk.italic("Feel free to reach out for collaborations or opportunities!")}

`;

console.log(
    boxen(resume, {
        padding: 1,
        margin: 1,
        borderStyle: "round",
        borderColor: "cyan",
    })
);
