(()=>{function e(){console.log("api ready");var e={versionNumber:1001,dev:!1},t={};function n(e,n){e.eventID=Math.floor(Date.now()+100*Math.random()),t[e.eventID]=function(e,t){n(e,t)},window.postMessage(JSON.stringify(e),"*")}e.getAccounts=function(e){n({method:"getAccounts"},e)};var o=null,a=null;e.addTask=function(e,t,a){o=t,n({method:"addTask",task:e},a)},e.magicCall=function(e,t){n({method:"magicCall",methodName:e.methodName,data:e},t)},e.updateDriver=function(e,t){n({method:"updateDriver",data:e},t)},e.startInspect=function(e,t){a=e,n({method:"startInspect"},t)},e.uploadImage=function(e,t){n({method:"magicCall",methodName:"uploadImage",data:e},t)},window.addEventListener("message",(function(e){try{var n=JSON.parse(e.data);if(n.method&&"taskUpdate"===n.method)return void(null!=o&&o(n.task));if(n.method&&"consoleLog"===n.method)return void(null!=a&&a(n.args));if(!n.callReturn)return;n.eventID&&t[n.eventID]&&(t[n.eventID](n.result),delete t[n.eventID])}catch(e){}})),window.$poster=e,window.$syncer=e}setTimeout((function(){var t=document.createElement("script");t.type="text/javascript",t.innerHTML=";(function() {  "+e.toString()+"; "+e.name+"();  })();",document.head.appendChild(t),document.head.removeChild(t),console.log("injject")}),50);var t=[];function n(e){e.callReturn=!0,window.postMessage(JSON.stringify(e),"*")}window.location.href.indexOf("mp.weixin.qq.com"),chrome.runtime.onMessage.addListener((function(e,t,o){try{console.log("revice",e),"taskUpdate"==e.method&&n({task:e.task,method:"taskUpdate"}),"consoleLog"==e.method&&n({args:e.args,method:"consoleLog"})}catch(e){console.log(e)}}));var o=["https://www.wechatsync.com","https://developer.wechatsync.com","http://localhost:8080"];window.addEventListener("message",(function(e){try{var a=JSON.parse(e.data);"getAccounts"==a.method&&(s=function(){n({eventID:a.eventID,result:t})},chrome.extension.sendMessage({action:"getAccount"},(function(e){t=e,s&&s()}))),"addTask"==a.method&&chrome.extension.sendMessage({action:"addTask",task:a.task},(function(e){console.log("addTask return",e)})),"magicCall"==a.method&&chrome.extension.sendMessage({action:"callDriverMethod",methodName:a.methodName,data:a.data},(function(e){n({eventID:a.eventID,result:e})})),o.indexOf(e.origin)>-1&&("updateDriver"==a.method&&chrome.extension.sendMessage({action:"updateDriver",data:a.data},(function(e){n({eventID:a.eventID,result:e})})),"startInspect"==a.method&&chrome.extension.sendMessage({action:"startInspect"},(function(e){n({eventID:a.eventID,result:e})})))}catch(e){}var s}))})();