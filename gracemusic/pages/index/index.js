//index.js
const app = getApp()
    //初始化AV
const AV = require('../../libs/av-weapp-min')
    //将获取对象处理为JSON类型的数据
const getDataForRender = song => ({
    id: song.get('objectId'),
    name: song.get('name'),
    singer: song.get('singer'),
    url: song.get('url')
});
Page({
    data: {
        songs: []
    },
    onLoad: function() {
        //获取歌曲信息
        let songs = new AV.Query('Songs')
        songs.find().then((song) => {
            this.setData({
                songs: song.map(getDataForRender)
            })
        })
    }

})