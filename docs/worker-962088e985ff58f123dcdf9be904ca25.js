const timer=()=>{let e,r=0
return{startTimer(){e&&this.endTimer(),e=setInterval(()=>{postMessage(++r)},0)},endTimer(){clearInterval(e)}}}
let currentTimer=timer()
addEventListener("message",({data:e})=>{e.startTimer?currentTimer.startTimer():currentTimer.endTimer()})
