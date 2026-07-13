:root {
  color-scheme: dark;
  font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  background: #0b1020;
  color: #edf2ff;
}

* { box-sizing: border-box; }
body { margin: 0; min-height: 100vh; background: radial-gradient(circle at top, #17213f 0, #0b1020 44rem); }
a { color: #a9bcff; text-decoration: none; }
a:hover { color: #d8e1ff; }
header { min-height: 70px; display: flex; align-items: center; justify-content: space-between; gap: 24px; padding: 0 5vw; border-bottom: 1px solid #27304a; background: rgba(11,16,32,.88); position: sticky; top: 0; backdrop-filter: blur(18px); z-index: 10; }
.brand { font-weight: 800; letter-spacing: .02em; }
nav { display: flex; gap: 18px; align-items: center; flex-wrap: wrap; }
main { width: min(1180px, 92vw); margin: 36px auto 80px; }
h1, h2 { margin-top: 0; }
h1 { font-size: clamp(2rem, 5vw, 3.2rem); margin-bottom: 8px; }
h2 { font-size: 1.25rem; }
p { color: #b7c0d9; line-height: 1.6; }
.card { background: rgba(19, 27, 51, .94); border: 1px solid #2c385d; border-radius: 18px; padding: 22px; box-shadow: 0 18px 60px rgba(0,0,0,.18); }
.notice { margin-bottom: 18px; padding: 14px 16px; background: #22345f; border: 1px solid #3f5e9d; border-radius: 12px; }
.login-card { width: min(480px, 100%); margin: 10vh auto 0; }
.heading-row { display: flex; align-items: center; justify-content: space-between; gap: 20px; margin-bottom: 24px; }
.heading-row p { margin: 0; }
.stats-grid { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 16px; margin-bottom: 18px; }
.stat { display: flex; flex-direction: column; gap: 12px; }
.stat span { color: #aeb8d3; }
.stat strong { font-size: 2.2rem; }
.server-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 18px; }
.server-card code { color: #8ea6e8; }
.warning-card { margin-bottom: 18px; border-color: #81652c; background: #292315; }
.stack { display: grid; gap: 15px; }
.form-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
.wide { grid-column: 1 / -1; }
label { display: grid; gap: 8px; color: #d8def0; font-weight: 650; }
.checkbox { display: flex; align-items: center; gap: 10px; font-weight: 500; }
input, textarea, select { width: 100%; border: 1px solid #3a476e; border-radius: 11px; background: #0e162d; color: #edf2ff; padding: 12px 13px; font: inherit; }
textarea { min-height: 110px; resize: vertical; }
input:focus, textarea:focus, select:focus { outline: 2px solid #6f88e8; outline-offset: 1px; }
button, .button { display: inline-flex; align-items: center; justify-content: center; min-height: 42px; border: 0; border-radius: 11px; background: #657ff0; color: white; padding: 10px 16px; font: inherit; font-weight: 750; cursor: pointer; }
button:hover, .button:hover { background: #7e95fa; color: white; }
.secondary { background: #29385f; }
.secondary:hover { background: #344976; }
.danger-button { background: #8f3547; }
.danger-button:hover { background: #aa4459; }
.small { min-height: 34px; padding: 7px 10px; font-size: .87rem; }
.inline-form, .actions form { display: inline; margin: 0; }
.link-button { min-height: auto; padding: 0; color: #a9bcff; background: transparent; font-weight: 500; }
.link-button:hover { color: #d8e1ff; background: transparent; }
.pill { display: inline-flex; align-items: center; width: fit-content; padding: 5px 9px; border-radius: 999px; background: #313c5f; color: #dfe6ff; font-size: .75rem; font-weight: 800; letter-spacing: .04em; }
.pill.success { background: #1f5b46; color: #bdf7d9; }
.pill.warning { background: #6d5120; color: #ffe1a1; }
.pill.danger { background: #713446; color: #ffc6d2; }
.table-card { overflow-x: auto; margin-top: 18px; }
table { width: 100%; border-collapse: collapse; min-width: 780px; }
th, td { padding: 13px 12px; border-bottom: 1px solid #2a3557; text-align: left; vertical-align: top; }
th { color: #9eabd0; font-size: .78rem; letter-spacing: .06em; text-transform: uppercase; }
td { color: #d9e0f3; }
small { color: #8f9aba; }
.actions { display: flex; gap: 8px; flex-wrap: wrap; }
.top-gap { margin-top: 12px; }
code { overflow-wrap: anywhere; }

@media (max-width: 850px) {
  header { align-items: flex-start; flex-direction: column; padding-top: 16px; padding-bottom: 16px; }
  .stats-grid, .server-grid, .form-grid { grid-template-columns: 1fr; }
  .heading-row { align-items: flex-start; flex-direction: column; }
  .wide { grid-column: auto; }
}
