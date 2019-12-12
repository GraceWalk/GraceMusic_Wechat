//app.js
App({
    onLaunch: function() {
        //初始化 登录LeanCloud
        const AV = require('./libs/av-weapp-min')
        AV.init({
            appId: 'rdhStfmRmkhd82NsDe6xE6fe-gzGzoHsz',
            appKey: '44JqP2vHHlw7KDLe6bzirBFg',
            serverURLs: "https://rdhstfmr.lc-cn-n1-shared.com"
        })
    }
})