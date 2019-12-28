/* eslint-disable no-undef */
// jsBridge.invoke. jsBridge.on

const wx = {};

const $$createId = () => Math.floor(Math.random() * 10000000);

const $$api = [
  "drawCanvas",
  "createContext",
  "createCanvasContext",
  "canvasToTempFilePath",
  "canvasGetImageData",
  "canvasPutImageData",
  "createOffscreenCanvas",
  "getAccountInfoSync",
  "getShareInfo",
  "pageScrollTo",
  "chooseInvoiceTitle",
  "chooseInvoice",
  "arrayBufferToBase64",
  "base64ToArrayBuffer",
  "openSetting",
  "getExtConfig",
  "chooseMedia",
  "chooseMultiMedia",
  "chooseMessageFile",
  "chooseWeChatContact",
  "uploadEncryptedFileToCDN",
  "onUploadEncryptedFileToCDNProgress",
  "getExtConfigSync",
  "showShareMenu",
  "hideShareMenu",
  "updateShareMenu",
  "shareAppMessageForFakeNative",
  "openUrl",
  "setNavigationBarColor",
  "setNavigationBarAlpha",
  "vibrateShort",
  "vibrateLong",
  "getSetting",
  "checkIsSupportFacialRecognition",
  "startFacialRecognitionVerify",
  "startFacialRecognitionVerifyAndUploadVideo",
  "startCustomFacialRecognitionVerify",
  "startCustomFacialRecognitionVerifyAndUploadVideo",
  "sendBizRedPacket",
  "sendGoldenRedPacket",
  "openGoldenRedPacketDetail",
  "addPhoneContact",
  "setScreenBrightness",
  "getScreenBrightness",
  "getWeRunData",
  "uploadWeRunData",
  "addWeRunData",
  "canIUse",
  "setPageStyle",
  "triggerGettingWidgetData",
  "navigateToMiniProgram",
  "navigateToMiniProgramDirectly",
  "navigateToDevMiniProgram",
  "navigateBackMiniProgram",
  "launchMiniProgram",
  "launchApplicationDirectly",
  "launchApplicationForNative",
  "setNavigationBarRightButton",
  "onTapNavigationBarRightButton",
  "setTopBarText",
  "setTabBarBadge",
  "removeTabBarBadge",
  "showTabBarRedDot",
  "hideTabBarRedDot",
  "showTabBar",
  "hideTabBar",
  "setTabBarStyle",
  "setTabBarItem",
  "setBackgroundColor",
  "setBackgroundTextStyle",
  "setEnableDebug",
  "captureScreen",
  "onUserCaptureScreen",
  "offUserCaptureScreen",
  "setKeepScreenOn",
  "checkIsSupportSoterAuthentication",
  "startSoterAuthentication",
  "checkIsSoterEnrolledInDevice",
  "openDeliveryList",
  "navigateBackH5",
  "openBusinessView",
  "navigateBackApplication",
  "navigateBackNative",
  "reportIDKey",
  "reportKeyValue",
  "setNavigationBarTitle",
  "showNavigationBarLoading",
  "hideNavigationBarLoading",
  "hideHomeButton",
  "startPullDownRefresh",
  "stopPullDownRefresh",
  "operateWXData",
  "getOpenDeviceId",
  "getMenuButtonBoundingClientRect",
  "getSelectedTextRange",
  "openBluetoothAdapter",
  "closeBluetoothAdapter",
  "getBluetoothAdapterState",
  "onBluetoothAdapterStateChange",
  "startBluetoothDevicesDiscovery",
  "stopBluetoothDevicesDiscovery",
  "getBluetoothDevices",
  "getConnectedBluetoothDevices",
  "createBLEConnection",
  "closeBLEConnection",
  "getBLEDeviceServices",
  "getBLEDeviceCharacteristics",
  "notifyBLECharacteristicValueChanged",
  "notifyBLECharacteristicValueChange",
  "readBLECharacteristicValue",
  "writeBLECharacteristicValue",
  "onBluetoothDeviceFound",
  "onBLEConnectionStateChanged",
  "onBLEConnectionStateChange",
  "onBLECharacteristicValueChange",
  "startBeaconDiscovery",
  "stopBeaconDiscovery",
  "getBeacons",
  "onBeaconUpdate",
  "offBeaconUpdate",
  "onBeaconServiceChange",
  "offBeaconServiceChange",
  "startWifi",
  "stopWifi",
  "getWifiList",
  "getConnectedWifi",
  "connectWifi",
  "presetWifiList",
  "setWifiList",
  "onGetWifiList",
  "onWifiConnected",
  "onEvaluateWifi",
  "getHCEState",
  "startHCE",
  "stopHCE",
  "sendHCEMessage",
  "onHCEMessage",
  "offHCEMessage",
  "startLocalServiceDiscovery",
  "stopLocalServiceDiscovery",
  "onLocalServiceFound",
  "offLocalServiceFound",
  "onLocalServiceLost",
  "offLocalServiceLost",
  "onLocalServiceDiscoveryStop",
  "offLocalServiceDiscoveryStop",
  "onLocalServiceResolveFail",
  "offLocalServiceResolveFail",
  "redirectTo",
  "reLaunch",
  "navigateTo",
  "switchTab",
  "navigateBack",
  "onAppShow",
  "offAppShow",
  "onAppHide",
  "offAppHide",
  "onError",
  "offError",
  "getLaunchOptionsSync",
  "onWindowResize",
  "offWindowResize",
  "getStorage",
  "getStorageSync",
  "setStorage",
  "setStorageSync",
  "removeStorage",
  "removeStorageSync",
  "clearStorage",
  "clearStorageSync",
  "getStorageInfo",
  "getStorageInfoSync",
  "getBackgroundFetchData",
  "onBackgroundFetchData",
  "setBackgroundFetchToken",
  "getBackgroundFetchToken",
  "request",
  "connectSocket",
  "closeSocket",
  "sendSocketMessage",
  "onSocketOpen",
  "onSocketClose",
  "onSocketMessage",
  "onSocketError",
  "uploadFile",
  "downloadFile",
  "addNativeDownloadTask",
  "downloadApp",
  "installDownloadApp",
  "getAppInstallState",
  "queryDownloadAppTask",
  "cancelDownloadAppTask",
  "resumeDownloadAppTask",
  "pauseDownloadAppTask",
  "onDownloadAppStateChange",
  "downloadAppForIOS",
  "calRqt",
  "secureTunnel",
  "chooseImage",
  "previewImage",
  "getImageInfo",
  "saveImageToPhotosAlbum",
  "compressImage",
  "startRecord",
  "stopRecord",
  "playVoice",
  "pauseVoice",
  "stopVoice",
  "onVoicePlayEnd",
  "chooseVideo",
  "saveVideoToPhotosAlbum",
  "loadFontFace",
  "getLocation",
  "openLocation",
  "chooseLocation",
  "onLocationChange",
  "offLocationChange",
  "startLocationUpdateBackground",
  "startLocationUpdate",
  "stopLocationUpdate",
  "getNetworkType",
  "onNetworkStatusChange",
  "offNetworkStatusChange",
  "getSystemInfo",
  "getSystemInfoSync",
  "getBatteryInfo",
  "getBatteryInfoSync",
  "startAccelerometer",
  "stopAccelerometer",
  "onAccelerometerChange",
  "offAccelerometerChange",
  "startCompass",
  "stopCompass",
  "onCompassChange",
  "offCompassChange",
  "startDeviceMotionListening",
  "stopDeviceMotionListening",
  "onDeviceMotionChange",
  "offDeviceMotionChange",
  "startGyroscope",
  "stopGyroscope",
  "onGyroscopeChange",
  "offGyroscopeChange",
  "reportAction",
  "getBackgroundAudioManager",
  "getRecorderManager",
  "getBackgroundAudioPlayerState",
  "playBackgroundAudio",
  "pauseBackgroundAudio",
  "seekBackgroundAudio",
  "stopBackgroundAudio",
  "onBackgroundAudioPlay",
  "onBackgroundAudioPause",
  "onBackgroundAudioStop",
  "joinVoIPChat",
  "exitVoIPChat",
  "updateVoIPChatMuteConfig",
  "onVoIPChatMembersChanged",
  "onVoIPChatSpeakersChanged",
  "onVoIPChatInterrupted",
  "requestSubscribeMessage",
  "login",
  "checkSession",
  "authorize",
  "getUserInfo",
  "requestPayment",
  "verifyPaymentPassword",
  "bindPaymentCard",
  "requestPaymentToBank",
  "requestVirtualPayment",
  "openOfflinePayView",
  "openWCPayCardList",
  "requestMallPayment",
  "setCurrentPaySpeech",
  "loadPaySpeechDialectConfig",
  "faceVerifyForPay",
  "openOfficialAccountProfile",
  "openUserProfile",
  "openMiniProgramProfile",
  "openMiniProgramSearch",
  "openMiniProgramHistoryList",
  "openMiniProgramStarList",
  "batchGetContactDirectly",
  "preventApplePayUI",
  "getWxSecData",
  "addCard",
  "openCard",
  "scanCode",
  "openQRCode",
  "chooseAddress",
  "saveFile",
  "openDocument",
  "getSavedFileList",
  "getSavedFileInfo",
  "getFileInfo",
  "removeSavedFile",
  "getFileSystemManager",
  "getABTestConfig",
  "chooseContact",
  "removeUserCloudStorage",
  "setUserCloudStorage",
  "makePhoneCall",
  "makeVoIPCall",
  "onAppRoute",
  "onAppRouteDone",
  "onAppEnterBackground",
  "onAppEnterForeground",
  "onAppUnhang",
  "onPageReload",
  "onPageNotFound",
  "offPageNotFound",
  "createAnimation",
  "createInnerAudioContext",
  "getAvailableAudioSources",
  "onAudioInterruptionBegin",
  "offAudioInterruptionBegin",
  "onAudioInterruptionEnd",
  "offAudioInterruptionEnd",
  "setInnerAudioOption",
  "createAudioContext",
  "createVideoContext",
  "createMapContext",
  "createCameraContext",
  "createLivePlayerContext",
  "createLivePusherContext",
  "onWebviewEvent",
  "onNativeEvent",
  "hideKeyboard",
  "onKeyboardHeightChange",
  "getPublicLibVersion",
  "showModal",
  "showToast",
  "hideToast",
  "showLoading",
  "hideLoading",
  "showActionSheet",
  "showShareActionSheet",
  "reportAnalytics",
  "reportMonitor",
  "getClipboardData",
  "setClipboardData",
  "createSelectorQuery",
  "createIntersectionObserver",
  "nextTick",
  "updatePerfData",
  "traceEvent",
  "onMemoryWarning",
  "getUpdateManager",
  "createWorker",
  "voiceSplitJoint",
  "uploadSilkVoice",
  "downloadSilkVoice",
  "getResPath",
  "setResPath",
  "setCookies",
  "getCookies",
  "getLabInfo",
  "setLabInfo",
  "createUDPSocket",
  "env",
  "error",
  "isSystemError",
  "isSDKError",
  "isThirdError",
  "createRewardedVideoAd",
  "createInterstitialAd",
  "getLogManager",
  "getRealtimeLogManager",
  "cloud",
  "version",
  "chooseShareGroup",
  "enterContact",
  "getBaseMethods",
];

$$api.reduce((previous, current) => {
  previous[current] = function(payload) {
    if (/[Ss]ync$/.test(current)) {
      return jsBridge.invoke(current, $$projectConfig.appId, { payload, session: $$createId() });
    }

    jsBridge.on(current, $$projectConfig.appId, { payload, session: $$createId() });
  };
  return previous;
}, wx);

export default wx;
