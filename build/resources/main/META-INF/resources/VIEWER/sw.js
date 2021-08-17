/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

// https://developers.google.com/web/tools/workbox/guides/troubleshoot-and-debug
importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.0.0-beta.1/workbox-sw.js'); // Install newest
// https://developers.google.com/web/tools/workbox/modules/workbox-core

workbox.core.skipWaiting();
workbox.core.clientsClaim(); // Cache static assets that aren't precached

workbox.routing.registerRoute(/\.(?:js|css)$/, new workbox.strategies.StaleWhileRevalidate({
  cacheName: 'static-resources'
})); // Cache the Google Fonts stylesheets with a stale-while-revalidate strategy.

workbox.routing.registerRoute(/^https:\/\/fonts\.googleapis\.com/, new workbox.strategies.StaleWhileRevalidate({
  cacheName: 'google-fonts-stylesheets'
})); // Cache the underlying font files with a cache-first strategy for 1 year.

workbox.routing.registerRoute(/^https:\/\/fonts\.gstatic\.com/, new workbox.strategies.CacheFirst({
  cacheName: 'google-fonts-webfonts',
  plugins: [new workbox.cacheableResponse.CacheableResponsePlugin({
    statuses: [0, 200]
  }), new workbox.expiration.ExpirationPlugin({
    maxAgeSeconds: 60 * 60 * 24 * 365,
    // 1 Year
    maxEntries: 30
  })]
})); // MESSAGE HANDLER

self.addEventListener('message', function (event) {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    switch (event.data.type) {
      case 'SKIP_WAITING':
        // TODO: We'll eventually want this to be user prompted
        // workbox.core.skipWaiting();
        // workbox.core.clientsClaim();
        // TODO: Global notification to indicate incoming reload
        break;

      default:
        console.warn("SW: Invalid message type: ".concat(event.data.type));
    }
  }
});
workbox.precaching.precacheAndRoute([{"revision":"90ccb147f0211a55fbf2f8ca81525591","url":"0.1bc3eeeb6be3ffeaecee.css"},{"revision":"37c6b1e97da96446a8c1dfb903184661","url":"15.1bc3eeeb6be3ffeaecee.css"},{"revision":"f3edaf81e1c1e24105282f3ca75a34b2","url":"15.bundle.b0884354e632a1aab8aa.js"},{"revision":"7dde3ddfe92d699e5479113a8423c57d","url":"16.bundle.f05fb222fa12009076e0.js"},{"revision":"0cf1e49ce4bd1b671d151d837f7c3ec3","url":"17.1bc3eeeb6be3ffeaecee.css"},{"revision":"74208bf4c04aa3a795b9040860be4ad9","url":"17.bundle.21f0e49022f180682117.js"},{"revision":"2625d1e558407a60e7b9a096615ba423","url":"18.1bc3eeeb6be3ffeaecee.css"},{"revision":"711ac78198119dbb50287edfa9556969","url":"18.bundle.a2871d5bf80b778d63c2.js"},{"revision":"761f7735a3c912a703d6ba4ae79ce151","url":"19.bundle.65a90910d9bd4fc773ef.js"},{"revision":"648405482833e711f9d56f3a9c66a69c","url":"2.1bc3eeeb6be3ffeaecee.css"},{"revision":"1264e98384f6194a675f683c969146c2","url":"20.bundle.bdeead5d36313ef16482.js"},{"revision":"0731d3258f53b657979535b290f4c7a3","url":"7.1bc3eeeb6be3ffeaecee.css"},{"revision":"260f7b0ecd47a2d3473d498bf9653b59","url":"8.1bc3eeeb6be3ffeaecee.css"},{"revision":"707ee90f50e3dbe5882e4783633bce66","url":"CallbackPage.bundle.4e3d4ba7221bd73a39ea.js"},{"revision":"0761d9d26de7f5f37b80e13a60219008","url":"ConnectedStandaloneRouting.bundle.f5379ff842d3da9b5ae8.js"},{"revision":"a89314b1abbad4a1e5d853164b08e0b8","url":"ConnectedStandaloneRouting~ConnectedXNATStandaloneRouting~IHEInvokeImageDisplay~StudyListRouting~Vie~5b11e970.bundle.5f9c6fc41331739b31d1.js"},{"revision":"3de76699c733dd541be70fb1c8eea3b5","url":"ConnectedStandaloneRouting~ConnectedXNATStandaloneRouting~IHEInvokeImageDisplay~ViewerLocalFileData~~e8534976.bundle.711f1d6cb43ac05f8dd1.js"},{"revision":"86e72845a33109227d6ce7a22235b0ec","url":"ConnectedXNATStandaloneRouting.bundle.10491b51bcf3aeec3787.js"},{"revision":"6e26b59d4080d0b2e787d13564f49de6","url":"IHEInvokeImageDisplay.bundle.a996fd05985f8611569d.js"},{"revision":"f378acdc8c4140cad3cb7fabea5eaa67","url":"StudyListRouting.bundle.2fd2266766822a533467.js"},{"revision":"7f6bdd6d957d07516ff02fd37e8a651f","url":"ViewerLocalFileData.bundle.d5f6fce18faa13fd120d.js"},{"revision":"0c31f1359ecbfee77b173b3f14551f70","url":"ViewerRouting.bundle.05677d812873e7723a65.js"},{"revision":"c944c92ada3137bfe90d77f3117f3fc1","url":"app-config.js"},{"revision":"e4a806605e0e10dd3d58fb549f57cacf","url":"app.1bc3eeeb6be3ffeaecee.css"},{"revision":"473e74a795f5a95dcfba304960bbcdf8","url":"assets/Button_File.svg"},{"revision":"271da60b435c1445580caab72e656818","url":"assets/Button_Folder.svg"},{"revision":"cb4f64534cdf8dd88f1d7219d44490db","url":"assets/android-chrome-144x144.png"},{"revision":"5cde390de8a619ebe55a669d2ac3effd","url":"assets/android-chrome-192x192.png"},{"revision":"e7466a67e90471de05401e53b8fe20be","url":"assets/android-chrome-256x256.png"},{"revision":"9bbe9b80156e930d19a4e1725aa9ddae","url":"assets/android-chrome-36x36.png"},{"revision":"5698b2ac0c82fe06d84521fc5482df04","url":"assets/android-chrome-384x384.png"},{"revision":"56bef3fceec344d9747f8abe9c0bba27","url":"assets/android-chrome-48x48.png"},{"revision":"3e8b8a01290992e82c242557417b0596","url":"assets/android-chrome-512x512.png"},{"revision":"517925e91e2ce724432d296b687d25e2","url":"assets/android-chrome-72x72.png"},{"revision":"4c3289bc690f8519012686888e08da71","url":"assets/android-chrome-96x96.png"},{"revision":"cf464289183184df09292f581df0fb4f","url":"assets/apple-touch-icon-1024x1024.png"},{"revision":"0857c5282c594e4900e8b31e3bade912","url":"assets/apple-touch-icon-114x114.png"},{"revision":"4208f41a28130a67e9392a9dfcee6011","url":"assets/apple-touch-icon-120x120.png"},{"revision":"cb4f64534cdf8dd88f1d7219d44490db","url":"assets/apple-touch-icon-144x144.png"},{"revision":"977d293982af7e9064ba20806b45cf35","url":"assets/apple-touch-icon-152x152.png"},{"revision":"6de91b4d2a30600b410758405cb567b4","url":"assets/apple-touch-icon-167x167.png"},{"revision":"87bff140e3773bd7479a620501c4aa5c","url":"assets/apple-touch-icon-180x180.png"},{"revision":"647386c34e75f1213830ea9a38913525","url":"assets/apple-touch-icon-57x57.png"},{"revision":"0c200fe83953738b330ea431083e7a86","url":"assets/apple-touch-icon-60x60.png"},{"revision":"517925e91e2ce724432d296b687d25e2","url":"assets/apple-touch-icon-72x72.png"},{"revision":"c9989a807bb18633f6dcf254b5b56124","url":"assets/apple-touch-icon-76x76.png"},{"revision":"87bff140e3773bd7479a620501c4aa5c","url":"assets/apple-touch-icon-precomposed.png"},{"revision":"87bff140e3773bd7479a620501c4aa5c","url":"assets/apple-touch-icon.png"},{"revision":"05fa74ea9c1c0c3931ba96467999081d","url":"assets/apple-touch-startup-image-1182x2208.png"},{"revision":"9e2cd03e1e6fd0520eea6846f4278018","url":"assets/apple-touch-startup-image-1242x2148.png"},{"revision":"5591e3a1822cbc8439b99c1a40d53425","url":"assets/apple-touch-startup-image-1496x2048.png"},{"revision":"337de578c5ca04bd7d2be19d24d83821","url":"assets/apple-touch-startup-image-1536x2008.png"},{"revision":"cafb4ab4eafe6ef946bd229a1d88e7de","url":"assets/apple-touch-startup-image-320x460.png"},{"revision":"d9bb9e558d729eeac5efb8be8d6111cc","url":"assets/apple-touch-startup-image-640x1096.png"},{"revision":"038b5b02bac8b82444bf9a87602ac216","url":"assets/apple-touch-startup-image-640x920.png"},{"revision":"2177076eb07b1d64d663d7c03268be00","url":"assets/apple-touch-startup-image-748x1024.png"},{"revision":"4fc097443815fe92503584c4bd73c630","url":"assets/apple-touch-startup-image-750x1294.png"},{"revision":"2e29914062dce5c5141ab47eea2fc5d9","url":"assets/apple-touch-startup-image-768x1004.png"},{"revision":"f692ec286b3a332c17985f4ed38b1076","url":"assets/browserconfig.xml"},{"revision":"f3d9a3b647853c45b0e132e4acd0cc4a","url":"assets/coast-228x228.png"},{"revision":"533ba1dcac7b716dec835a2fae902860","url":"assets/favicon-16x16.png"},{"revision":"783e9edbcc23b8d626357ca7101161e0","url":"assets/favicon-32x32.png"},{"revision":"0711f8e60267a1dfc3aaf1e3818e7185","url":"assets/favicon.ico"},{"revision":"5df2a5b0cee399ac0bc40af74ba3c2cb","url":"assets/firefox_app_128x128.png"},{"revision":"11fd9098c4b07c8a07e1d2a1e309e046","url":"assets/firefox_app_512x512.png"},{"revision":"27cddfc922dca3bfa27b4a00fc2f5e36","url":"assets/firefox_app_60x60.png"},{"revision":"2017d95fae79dcf34b5a5b52586d4763","url":"assets/manifest.webapp"},{"revision":"cb4f64534cdf8dd88f1d7219d44490db","url":"assets/mstile-144x144.png"},{"revision":"334895225e16a7777e45d81964725a97","url":"assets/mstile-150x150.png"},{"revision":"e295cca4af6ed0365cf7b014d91b0e9d","url":"assets/mstile-310x150.png"},{"revision":"cbefa8c42250e5f2443819fe2c69d91e","url":"assets/mstile-310x310.png"},{"revision":"aa411a69df2b33a1362fa38d1257fa9d","url":"assets/mstile-70x70.png"},{"revision":"5609af4f69e40e33471aee770ea1d802","url":"assets/yandex-browser-50x50.png"},{"revision":"cfea70d7ddc8f06f276ea0c85c4b2adf","url":"assets/yandex-browser-manifest.json"},{"revision":"0ca44a1b8719e835645ffa804a9d1395","url":"es6-shim.min.js"},{"revision":"fc5ca61e7823972f5c8fd43675770bc8","url":"google.js"},{"revision":"3d4aac8423266ca18c03211483e67a09","url":"index.html"},{"revision":"551db51d657075bba9f53b9027b2c526","url":"init-service-worker.js"},{"revision":"c64d9fba02212ed46eff52c20797301f","url":"itk/ImageIOs/itkBMPImageIOJSBinding.js"},{"revision":"fe9709abdaa1589c6e2514636c09717e","url":"itk/ImageIOs/itkBMPImageIOJSBindingWasm.js"},{"revision":"c054d3a58b1b1c7d8195de5fb8a0c72b","url":"itk/ImageIOs/itkBMPImageIOJSBindingWasm.wasm"},{"revision":"c4a5f19ebe6ebbded254ccc8b21d1adb","url":"itk/ImageIOs/itkBioRadImageIOJSBinding.js"},{"revision":"4c0ec1434683ff0c1ed8e8abf8ec6f40","url":"itk/ImageIOs/itkBioRadImageIOJSBindingWasm.js"},{"revision":"f3e32001ca2f0b5a0c15a7e8c87bae06","url":"itk/ImageIOs/itkBioRadImageIOJSBindingWasm.wasm"},{"revision":"9afa0b97c85881046340ab2cde9c7cfc","url":"itk/ImageIOs/itkDCMTKImageIOJSBindingWasm.js"},{"revision":"d6f994ac9b851374c95c3feece91f847","url":"itk/ImageIOs/itkDICOMImageSeriesReaderJSBindingWasm.js"},{"revision":"e47aeefc71f413eb9c80b1e22e22653f","url":"itk/ImageIOs/itkFDFImageIOJSBinding.js"},{"revision":"847d051abe42a301f730a06ba56755fb","url":"itk/ImageIOs/itkFDFImageIOJSBindingWasm.js"},{"revision":"d48cccbf4b628f34c914e5f6d3bf527d","url":"itk/ImageIOs/itkFDFImageIOJSBindingWasm.wasm"},{"revision":"0d4002b76b33a48349e821487e6027e0","url":"itk/ImageIOs/itkGDCMImageIOJSBindingWasm.js"},{"revision":"42ca9d4fe96ff80497bb9cefedce8a63","url":"itk/ImageIOs/itkGE4ImageIOJSBinding.js"},{"revision":"6560e9f480e72bc66680af3c38bfb5ec","url":"itk/ImageIOs/itkGE4ImageIOJSBindingWasm.js"},{"revision":"d329878a01a2aa013e901a5386766685","url":"itk/ImageIOs/itkGE4ImageIOJSBindingWasm.wasm"},{"revision":"4ade499b0e359fa475ac8ccf61642ff2","url":"itk/ImageIOs/itkGE5ImageIOJSBinding.js"},{"revision":"7f8cff76fe893116e337af14d5fa3a3c","url":"itk/ImageIOs/itkGE5ImageIOJSBindingWasm.js"},{"revision":"e3da59ba5c04693a0cf1c3156d663292","url":"itk/ImageIOs/itkGE5ImageIOJSBindingWasm.wasm"},{"revision":"c7a96d569257dfac84a9f631567b8088","url":"itk/ImageIOs/itkGEAdwImageIOJSBinding.js"},{"revision":"9c81f066a2dd3b5da9e82e2ca120a9fc","url":"itk/ImageIOs/itkGEAdwImageIOJSBindingWasm.js"},{"revision":"0ffc8f9217faa3a92375b5ed4d4245fb","url":"itk/ImageIOs/itkGEAdwImageIOJSBindingWasm.wasm"},{"revision":"0edd13c9285072ee1be921c30a95f893","url":"itk/ImageIOs/itkGiplImageIOJSBinding.js"},{"revision":"8290084bed89727971457c60007cb08f","url":"itk/ImageIOs/itkGiplImageIOJSBindingWasm.js"},{"revision":"4fac92b2fbd9172d26c7be9f2d9cf352","url":"itk/ImageIOs/itkGiplImageIOJSBindingWasm.wasm"},{"revision":"68bf68b587f7c21912380686643a8840","url":"itk/ImageIOs/itkHDF5ImageIOJSBindingWasm.js"},{"revision":"d63bf042cfd8fe66828bfc532b1896ae","url":"itk/ImageIOs/itkJPEGImageIOJSBinding.js"},{"revision":"f0500210d31c0a66f1569d8ad8fed54c","url":"itk/ImageIOs/itkJPEGImageIOJSBindingWasm.js"},{"revision":"5b03c734defe595253da6f4cf5d22421","url":"itk/ImageIOs/itkJPEGImageIOJSBindingWasm.wasm"},{"revision":"20fef59fa4b5124ceee8fdc6929f7077","url":"itk/ImageIOs/itkJSONImageIOJSBinding.js"},{"revision":"c2eb414f1e4d2f077bf7208e8fa3a584","url":"itk/ImageIOs/itkJSONImageIOJSBindingWasm.js"},{"revision":"5d2093bea272819c3f075924c4797659","url":"itk/ImageIOs/itkJSONImageIOJSBindingWasm.wasm"},{"revision":"c7ff950867df11f73f4cc1d72df8f56a","url":"itk/ImageIOs/itkLSMImageIOJSBinding.js"},{"revision":"620baca85bd648edff5ac071491843b0","url":"itk/ImageIOs/itkLSMImageIOJSBindingWasm.js"},{"revision":"733e64353d524fa979c767bee837ab58","url":"itk/ImageIOs/itkLSMImageIOJSBindingWasm.wasm"},{"revision":"93b2e9327ab6db31ea20c35b63fdb087","url":"itk/ImageIOs/itkMGHImageIOJSBinding.js"},{"revision":"066a3293f055a873fb8166bf2406d1d0","url":"itk/ImageIOs/itkMGHImageIOJSBindingWasm.js"},{"revision":"9a58f68b3c6f8ffd0496915f032ba9e4","url":"itk/ImageIOs/itkMGHImageIOJSBindingWasm.wasm"},{"revision":"5ed23c65880c51a8b0c448685072e60a","url":"itk/ImageIOs/itkMINCImageIOJSBindingWasm.js"},{"revision":"7e1a1082c03234ae9f218e4f749daf2c","url":"itk/ImageIOs/itkMRCImageIOJSBinding.js"},{"revision":"db1fb5fdb51b0f46e4bce1c041090bbb","url":"itk/ImageIOs/itkMRCImageIOJSBindingWasm.js"},{"revision":"d4552116a4fbf5a4deb9ec19d8944bed","url":"itk/ImageIOs/itkMRCImageIOJSBindingWasm.wasm"},{"revision":"f0de882457ad89dd5ddd961ad1b5ff7b","url":"itk/ImageIOs/itkMetaImageIOJSBinding.js"},{"revision":"bb115a30c2bae44b7e6d85efd4337c44","url":"itk/ImageIOs/itkMetaImageIOJSBindingWasm.js"},{"revision":"cda87d998d5327b43828af8a910d01fa","url":"itk/ImageIOs/itkMetaImageIOJSBindingWasm.wasm"},{"revision":"54027ec0d9c3e38352944275c954a66d","url":"itk/ImageIOs/itkNiftiImageIOJSBinding.js"},{"revision":"be77753c429f8e68bcaff8dc35d83570","url":"itk/ImageIOs/itkNiftiImageIOJSBindingWasm.js"},{"revision":"bf4216dd3cb41117c1c3b917f6940deb","url":"itk/ImageIOs/itkNiftiImageIOJSBindingWasm.wasm"},{"revision":"ad14c50624e17b8acd8b7d6c9438da4e","url":"itk/ImageIOs/itkNrrdImageIOJSBinding.js"},{"revision":"af5f6d4514576627afe2a2f98db2965b","url":"itk/ImageIOs/itkNrrdImageIOJSBindingWasm.js"},{"revision":"347281c9df611162fb800716a13b1810","url":"itk/ImageIOs/itkNrrdImageIOJSBindingWasm.wasm"},{"revision":"0cf337a1dfadffcac076c54e177d9efe","url":"itk/ImageIOs/itkPNGImageIOJSBinding.js"},{"revision":"ffa27960aa32dec86f682f78263e9a30","url":"itk/ImageIOs/itkPNGImageIOJSBindingWasm.js"},{"revision":"b918e3ebe3d81ff2cbaaf0784570552c","url":"itk/ImageIOs/itkPNGImageIOJSBindingWasm.wasm"},{"revision":"e90f2e6d06185d3a5d1c5df7940b60dd","url":"itk/ImageIOs/itkScancoImageIOJSBinding.js"},{"revision":"4f70a0909d1d5c8e2d2535e820c87df9","url":"itk/ImageIOs/itkScancoImageIOJSBindingWasm.js"},{"revision":"281c43ba134974095d8be412251cf310","url":"itk/ImageIOs/itkScancoImageIOJSBindingWasm.wasm"},{"revision":"d11a9a6748fffe7f3db537dc5ccd40cb","url":"itk/ImageIOs/itkTIFFImageIOJSBinding.js"},{"revision":"a70fc769be360573b9fffe4fee1e362c","url":"itk/ImageIOs/itkTIFFImageIOJSBindingWasm.js"},{"revision":"4221ee12149d91aba10423d12ecff473","url":"itk/ImageIOs/itkTIFFImageIOJSBindingWasm.wasm"},{"revision":"d5bdcaa46f824b805280b44a0f001c8b","url":"itk/ImageIOs/itkVTKImageIOJSBinding.js"},{"revision":"31537db81b8c360c20d6ab65032871f0","url":"itk/ImageIOs/itkVTKImageIOJSBindingWasm.js"},{"revision":"15c3d393be8bb6519b6bdd14e1b893cc","url":"itk/ImageIOs/itkVTKImageIOJSBindingWasm.wasm"},{"revision":"74337e164a3653cb11013e1dec5ac4c2","url":"itk/WebWorkers/ImageIO.worker.js"},{"revision":"ccceb29c6cb00df18219d6c968fad639","url":"itk/WebWorkers/MeshIO.worker.js"},{"revision":"1eb9ce90558a55791266e1f58575503c","url":"itk/WebWorkers/Pipeline.worker.js"},{"revision":"74fc9658b62903be2048c1f82a22b4d4","url":"manifest.json"},{"revision":"754d698a7b334af57c00f29723fd9751","url":"oidc-client.min.js"},{"revision":"d05a380d50b74e629738ae6f62fb7e78","url":"polyfill.min.js"},{"revision":"f528b6861c82ee4415fce0821fd695c1","url":"silent-refresh.html"},{"revision":"5d0f46af7cd29cd2889fa34239dd01e7","url":"vendors~ConnectedStandaloneRouting~ConnectedXNATStandaloneRouting~IHEInvokeImageDisplay~StudyListRou~7c5a6e41.bundle.067be9beb0a5d4c60916.js"},{"revision":"42b680f9f30d9a78dc7d2047c77c1c3f","url":"vendors~StudyListRouting.bundle.c344fe298a2108bbfacc.js"},{"revision":"47de5fdb39b4c1ba7862a4f89f478b00","url":"vendors~ViewerLocalFileData.bundle.0a6fe79f439a8a441dd3.js"},{"revision":"73922e4ab9c87c6c6dece4989c3a377f","url":"vendors~dicom-microscopy-viewer.bundle.d6726103adb7e7523d93.js"}]); // TODO: Cache API
// https://developers.google.com/web/fundamentals/instant-and-offline/web-storage/cache-api
// Store DICOMs?
// Clear Service Worker cache?
// navigator.storage.estimate().then(est => console.log(est)); (2GB?)

/***/ })
/******/ ]);