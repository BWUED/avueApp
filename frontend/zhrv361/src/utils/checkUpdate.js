/* eslint-disable */
export default function checkUpdate() {
  console.log('checkUpdate')
  var mam = api.require('mam');
  mam.checkUpdate(function (ret, err) {
    console.log('checkUpdate ret: ', ret)
    console.log('checkUpdate err: ', err)
    if (ret) {
      var result = ret.result;
      if (result.update == true && result.closed == false) {
        var str = '最新版本号: ' + result.version + ';\n更新内容: ' + result.updateTip + ';\n发布时间: ' + result.time
        api.confirm({
          title: '有新的版本, 是否下载并安装？',
          msg: str,
          buttons: ['确定', '取消']
        }, function (ret, err) {
          if (ret.buttonIndex == 1) {
            if (api.systemType == "android") {
              api.download({
                url: result.source,
                report: true
              }, function (ret, err) {
                if (ret && 0 == ret.state) {/* 下载进度 */
                  api.toast({
                    msg: "正在下载应用" + ret.percent + "%",
                    duration: 2000
                  });
                }
                if (ret && 1 == ret.state) {/* 下载完成 */
                  var savePath = ret.savePath;
                  api.installApp({
                    appUri: savePath
                  });
                }
              });
            }
            if (api.systemType == "ios") {
              api.installApp({
                appUri: result.source
              });
            }
          }
        });
      } else {
        console.log('暂无更新')
        // api.alert({
        //   msg: "暂无更新"
        // });
      }
    } else {
      console.log('checkUpdate ret false, err: ', err)
      // api.alert({
      //   msg: err.msg
      // });
    }
  });
}