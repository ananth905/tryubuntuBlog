'use strict';



;define("blog/app", ["exports", "@ember/application", "ember-resolver", "ember-load-initializers", "blog/config/environment"], function (_exports, _application, _emberResolver, _emberLoadInitializers, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/application",0,"ember-resolver",0,"ember-load-initializers",0,"blog/config/environment"eaimeta@70e063a35619d71f
  function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  class App extends _application.default {
    constructor(...args) {
      super(...args);
      _defineProperty(this, "modulePrefix", _environment.default.modulePrefix);
      _defineProperty(this, "podModulePrefix", _environment.default.podModulePrefix);
      _defineProperty(this, "Resolver", _emberResolver.default);
    }
  }
  _exports.default = App;
  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);
});
;define("blog/component-managers/glimmer", ["exports", "@glimmer/component/-private/ember-component-manager"], function (_exports, _emberComponentManager) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _emberComponentManager.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@glimmer/component/-private/ember-component-manager"eaimeta@70e063a35619d71f
});
;define("blog/components/homepage", ["exports", "@ember/component", "@ember/component/template-only", "@ember/template-factory"], function (_exports, _component, _templateOnly, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/component/template-only",0,"@ember/template-factory",0,"@ember/component"eaimeta@70e063a35619d71f
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
      <div class="color-ball"></div>
   
  <div class="homepage-container flex flex-col">
    <div class="linux-unix-switch">
      <div class="linux-unix-btn active">Linux</div>
       <div class="linux-unix-btn">BSD</div>
    </div> 
      <div class="section-1 welcome-box flex items-center justify-between">
         <div class="content-box flex flex-col items-end">
           <span>"Windows: I need 16GB of RAM and an i7 processor just to open Word.<br/>
  Linux: I can run on a potato and still get work done."</span> 
           <span>
              <div class="read-button " >
                  Cat the blog
              </div>
           </span>
         </div>
         <div class="images-box">
          <img src="/images/boy.png" alt="" />
         </div>
      </div>
  
      <div class="section-2 blogs-tiles-container flex flex-wrap">
          <div class="blog-tile">
              <div class="img-blog">
                  <img class="blogs-image" src="/images/Ubuntu-24.10.jpg" alt="">
              </div>
              <div class="blog-content-block blog-title">
                 Effortless Ubuntu 24.10 Upgrade for Seasoned Linux Users
              </div>
              <div class="tile-footer"></div>
          </div>
            <div class="blog-tile">
              <div class="img-blog">
                  <img class="blogs-image" src="https://upload.wikimedia.org/wikipedia/commons/c/c5/Lubuntu_20.10_2880p_EN_20201231_31_12_2020_18_01_35.png" alt="">
              </div>
              <div class="blog-content-block blog-title">
                Fast and Lean: Discover the Best Lightweight Linux Distross
              </div>
              <div class="tile-footer"></div>
          </div>
           <div class="blog-tile">
              <div class="img-blog">
                  <img class="blogs-image" src="https://europe1.discourse-cdn.com/unity/original/4X/e/7/e/e7ec7df2eedf8713ba3a38d1b6a9cca010bcbd32.png" alt="">
              </div>
              <div class="blog-content-block blog-title">
              Unity Won't Open? Solutions for Ubuntu 24.04 Users
              </div>
              <div class="tile-footer"></div>
          </div>
           <div class="blog-tile">
              <div class="img-blog">
                  <img class="blogs-image" src="https://kskroyal.com/wp-content/uploads/2023/02/Make-ubuntu-Look-Like-MacOS-Ventura.jpg" alt="">
              </div>
              <div class="blog-content-block blog-title">
              Make Your Ubuntu Desktop Mirror macOS Design
              </div>
              <div class="tile-footer"></div>
          </div>
      </div>
  </div>
  {{yield}}
  */
  {
    "id": "hzoopjOP",
    "block": "[[[1,\"  \"],[10,0],[14,0,\"color-ball\"],[12],[13],[1,\"\\n \\n\"],[10,0],[14,0,\"homepage-container flex flex-col\"],[12],[1,\"\\n  \"],[10,0],[14,0,\"linux-unix-switch\"],[12],[1,\"\\n    \"],[10,0],[14,0,\"linux-unix-btn active\"],[12],[1,\"Linux\"],[13],[1,\"\\n     \"],[10,0],[14,0,\"linux-unix-btn\"],[12],[1,\"BSD\"],[13],[1,\"\\n  \"],[13],[1,\" \\n    \"],[10,0],[14,0,\"section-1 welcome-box flex items-center justify-between\"],[12],[1,\"\\n       \"],[10,0],[14,0,\"content-box flex flex-col items-end\"],[12],[1,\"\\n         \"],[10,1],[12],[1,\"\\\"Windows: I need 16GB of RAM and an i7 processor just to open Word.\"],[10,\"br\"],[12],[13],[1,\"\\nLinux: I can run on a potato and still get work done.\\\"\"],[13],[1,\" \\n         \"],[10,1],[12],[1,\"\\n            \"],[10,0],[14,0,\"read-button \"],[12],[1,\"\\n                Cat the blog\\n            \"],[13],[1,\"\\n         \"],[13],[1,\"\\n       \"],[13],[1,\"\\n       \"],[10,0],[14,0,\"images-box\"],[12],[1,\"\\n        \"],[10,\"img\"],[14,\"src\",\"/images/boy.png\"],[14,\"alt\",\"\"],[12],[13],[1,\"\\n       \"],[13],[1,\"\\n    \"],[13],[1,\"\\n\\n    \"],[10,0],[14,0,\"section-2 blogs-tiles-container flex flex-wrap\"],[12],[1,\"\\n        \"],[10,0],[14,0,\"blog-tile\"],[12],[1,\"\\n            \"],[10,0],[14,0,\"img-blog\"],[12],[1,\"\\n                \"],[10,\"img\"],[14,0,\"blogs-image\"],[14,\"src\",\"/images/Ubuntu-24.10.jpg\"],[14,\"alt\",\"\"],[12],[13],[1,\"\\n            \"],[13],[1,\"\\n            \"],[10,0],[14,0,\"blog-content-block blog-title\"],[12],[1,\"\\n               Effortless Ubuntu 24.10 Upgrade for Seasoned Linux Users\\n            \"],[13],[1,\"\\n            \"],[10,0],[14,0,\"tile-footer\"],[12],[13],[1,\"\\n        \"],[13],[1,\"\\n          \"],[10,0],[14,0,\"blog-tile\"],[12],[1,\"\\n            \"],[10,0],[14,0,\"img-blog\"],[12],[1,\"\\n                \"],[10,\"img\"],[14,0,\"blogs-image\"],[14,\"src\",\"https://upload.wikimedia.org/wikipedia/commons/c/c5/Lubuntu_20.10_2880p_EN_20201231_31_12_2020_18_01_35.png\"],[14,\"alt\",\"\"],[12],[13],[1,\"\\n            \"],[13],[1,\"\\n            \"],[10,0],[14,0,\"blog-content-block blog-title\"],[12],[1,\"\\n              Fast and Lean: Discover the Best Lightweight Linux Distross\\n            \"],[13],[1,\"\\n            \"],[10,0],[14,0,\"tile-footer\"],[12],[13],[1,\"\\n        \"],[13],[1,\"\\n         \"],[10,0],[14,0,\"blog-tile\"],[12],[1,\"\\n            \"],[10,0],[14,0,\"img-blog\"],[12],[1,\"\\n                \"],[10,\"img\"],[14,0,\"blogs-image\"],[14,\"src\",\"https://europe1.discourse-cdn.com/unity/original/4X/e/7/e/e7ec7df2eedf8713ba3a38d1b6a9cca010bcbd32.png\"],[14,\"alt\",\"\"],[12],[13],[1,\"\\n            \"],[13],[1,\"\\n            \"],[10,0],[14,0,\"blog-content-block blog-title\"],[12],[1,\"\\n            Unity Won't Open? Solutions for Ubuntu 24.04 Users\\n            \"],[13],[1,\"\\n            \"],[10,0],[14,0,\"tile-footer\"],[12],[13],[1,\"\\n        \"],[13],[1,\"\\n         \"],[10,0],[14,0,\"blog-tile\"],[12],[1,\"\\n            \"],[10,0],[14,0,\"img-blog\"],[12],[1,\"\\n                \"],[10,\"img\"],[14,0,\"blogs-image\"],[14,\"src\",\"https://kskroyal.com/wp-content/uploads/2023/02/Make-ubuntu-Look-Like-MacOS-Ventura.jpg\"],[14,\"alt\",\"\"],[12],[13],[1,\"\\n            \"],[13],[1,\"\\n            \"],[10,0],[14,0,\"blog-content-block blog-title\"],[12],[1,\"\\n            Make Your Ubuntu Desktop Mirror macOS Design\\n            \"],[13],[1,\"\\n            \"],[10,0],[14,0,\"tile-footer\"],[12],[13],[1,\"\\n        \"],[13],[1,\"\\n    \"],[13],[1,\"\\n\"],[13],[1,\"\\n\"],[18,1,null]],[\"&default\"],false,[\"div\",\"span\",\"br\",\"img\",\"yield\"]]",
    "moduleName": "blog/components/homepage.hbs",
    "isStrictMode": false
  });
  var _default = _exports.default = (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, (0, _templateOnly.default)());
});
;define("blog/components/navigation-bar", ["exports", "@ember/component", "@ember/component/template-only", "@ember/template-factory"], function (_exports, _component, _templateOnly, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/component/template-only",0,"@ember/template-factory",0,"@ember/component"eaimeta@70e063a35619d71f
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    <div class="navigationBar-Container">
      
  </div>
  
  {{yield}}
  */
  {
    "id": "fsUuPI4d",
    "block": "[[[10,0],[14,0,\"navigationBar-Container\"],[12],[1,\"\\n    \\n\"],[13],[1,\"\\n\\n\"],[18,1,null]],[\"&default\"],false,[\"div\",\"yield\"]]",
    "moduleName": "blog/components/navigation-bar.hbs",
    "isStrictMode": false
  });
  var _default = _exports.default = (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, (0, _templateOnly.default)());
});
;define("blog/components/welcome-page", ["exports", "ember-welcome-page/components/welcome-page"], function (_exports, _welcomePage) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _welcomePage.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-welcome-page/components/welcome-page"eaimeta@70e063a35619d71f
});
;define("blog/container-debug-adapter", ["exports", "ember-resolver/container-debug-adapter"], function (_exports, _containerDebugAdapter) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _containerDebugAdapter.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-resolver/container-debug-adapter"eaimeta@70e063a35619d71f
});
;define("blog/data-adapter", ["exports", "@ember-data/debug/data-adapter"], function (_exports, _dataAdapter) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _dataAdapter.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember-data/debug/data-adapter"eaimeta@70e063a35619d71f
});
;define("blog/helpers/app-version", ["exports", "@ember/component/helper", "blog/config/environment", "ember-cli-app-version/utils/regexp"], function (_exports, _helper, _environment, _regexp) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.appVersion = appVersion;
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/component/helper",0,"blog/config/environment",0,"ember-cli-app-version/utils/regexp"eaimeta@70e063a35619d71f
  function appVersion(_, hash = {}) {
    const version = _environment.default.APP.version;
    // e.g. 1.0.0-alpha.1+4jds75hf

    // Allow use of 'hideSha' and 'hideVersion' For backwards compatibility
    let versionOnly = hash.versionOnly || hash.hideSha;
    let shaOnly = hash.shaOnly || hash.hideVersion;
    let match = null;
    if (versionOnly) {
      if (hash.showExtended) {
        match = version.match(_regexp.versionExtendedRegExp); // 1.0.0-alpha.1
      }
      // Fallback to just version
      if (!match) {
        match = version.match(_regexp.versionRegExp); // 1.0.0
      }
    }
    if (shaOnly) {
      match = version.match(_regexp.shaRegExp); // 4jds75hf
    }
    return match ? match[0] : version;
  }
  var _default = _exports.default = (0, _helper.helper)(appVersion);
});
;define("blog/helpers/page-title", ["exports", "ember-page-title/helpers/page-title"], function (_exports, _pageTitle) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _pageTitle.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-page-title/helpers/page-title"eaimeta@70e063a35619d71f
});
;define("blog/initializers/app-version", ["exports", "ember-cli-app-version/initializer-factory", "blog/config/environment"], function (_exports, _initializerFactory, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-app-version/initializer-factory",0,"blog/config/environment"eaimeta@70e063a35619d71f
  let name, version;
  if (_environment.default.APP) {
    name = _environment.default.APP.name;
    version = _environment.default.APP.version;
  }
  var _default = _exports.default = {
    name: 'App Version',
    initialize: (0, _initializerFactory.default)(name, version)
  };
});
;define("blog/initializers/ember-data", ["exports", "@ember-data/request-utils/deprecation-support"], function (_exports, _deprecationSupport) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember-data/request-utils/deprecation-support"eaimeta@70e063a35619d71f
  /*
    This code initializes EmberData in an Ember application.
  */
  var _default = _exports.default = {
    name: 'ember-data',
    initialize(application) {
      application.registerOptionsForType('serializer', {
        singleton: false
      });
      application.registerOptionsForType('adapter', {
        singleton: false
      });
    }
  };
});
;define("blog/router", ["exports", "@ember/routing/router", "blog/config/environment"], function (_exports, _router, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/routing/router",0,"blog/config/environment"eaimeta@70e063a35619d71f
  function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  class Router extends _router.default {
    constructor(...args) {
      super(...args);
      _defineProperty(this, "location", _environment.default.locationType);
      _defineProperty(this, "rootURL", _environment.default.rootURL);
    }
  }
  _exports.default = Router;
  Router.map(function () {});
});
;define("blog/services/page-title", ["exports", "ember-page-title/services/page-title"], function (_exports, _pageTitle) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _pageTitle.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-page-title/services/page-title"eaimeta@70e063a35619d71f
});
;define("blog/services/store", ["exports", "@ember/debug", "ember-data/store"], function (_exports, _debug, _store) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _store.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember/debug",0,"ember-data/store"eaimeta@70e063a35619d71f
  (true && !(false) && (0, _debug.deprecate)("You are relying on ember-data auto-magically installing the store service. Use `export { default } from 'ember-data/store';` in app/services/store.js instead", false, {
    id: 'ember-data:deprecate-legacy-imports',
    for: 'ember-data',
    until: '6.0',
    since: {
      enabled: '5.2',
      available: '5.2'
    }
  }));
});
;define("blog/templates/application", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/template-factory"eaimeta@70e063a35619d71f
  var _default = _exports.default = (0, _templateFactory.createTemplateFactory)(
  /*
    {{page-title "Blog"}}
  
  {{outlet}}
  
  {{! The following component displays Ember's default welcome message. }}
  <NavigationBar />
  <Homepage/>
  {{! Feel free to remove this! }}
  */
  {
    "id": "tr3tG7gY",
    "block": "[[[1,[28,[35,0],[\"Blog\"],null]],[1,\"\\n\\n\"],[46,[28,[37,2],null,null],null,null,null],[1,\"\\n\\n\"],[8,[39,3],null,null,null],[1,\"\\n\"],[8,[39,4],null,null,null],[1,\"\\n\"]],[],false,[\"page-title\",\"component\",\"-outlet\",\"navigation-bar\",\"homepage\"]]",
    "moduleName": "blog/templates/application.hbs",
    "isStrictMode": false
  });
});
;define("blog/transforms/boolean", ["exports", "@ember/debug", "@ember-data/serializer/transform"], function (_exports, _debug, _transform) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _transform.BooleanTransform;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember/debug",0,"@ember-data/serializer/transform"eaimeta@70e063a35619d71f
  (true && !(false) && (0, _debug.deprecate)("You are relying on ember-data auto-magically installing the BooleanTransform. Use `export { BooleanTransform as default } from '@ember-data/serializer/transform';` in app/transforms/boolean.js instead", false, {
    id: 'ember-data:deprecate-legacy-imports',
    for: 'ember-data',
    until: '6.0',
    since: {
      enabled: '5.2',
      available: '5.2'
    }
  }));
});
;define("blog/transforms/date", ["exports", "@ember/debug", "@ember-data/serializer/transform"], function (_exports, _debug, _transform) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _transform.DateTransform;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember/debug",0,"@ember-data/serializer/transform"eaimeta@70e063a35619d71f
  (true && !(false) && (0, _debug.deprecate)("You are relying on ember-data auto-magically installing the DateTransform. Use `export { DateTransform as default } from '@ember-data/serializer/transform';` in app/transforms/date.js instead", false, {
    id: 'ember-data:deprecate-legacy-imports',
    for: 'ember-data',
    until: '6.0',
    since: {
      enabled: '5.2',
      available: '5.2'
    }
  }));
});
;define("blog/transforms/number", ["exports", "@ember/debug", "@ember-data/serializer/transform"], function (_exports, _debug, _transform) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _transform.NumberTransform;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember/debug",0,"@ember-data/serializer/transform"eaimeta@70e063a35619d71f
  (true && !(false) && (0, _debug.deprecate)("You are relying on ember-data auto-magically installing the NumberTransform. Use `export { NumberTransform as default } from '@ember-data/serializer/transform';` in app/transforms/number.js instead", false, {
    id: 'ember-data:deprecate-legacy-imports',
    for: 'ember-data',
    until: '6.0',
    since: {
      enabled: '5.2',
      available: '5.2'
    }
  }));
});
;define("blog/transforms/string", ["exports", "@ember/debug", "@ember-data/serializer/transform"], function (_exports, _debug, _transform) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _transform.StringTransform;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember/debug",0,"@ember-data/serializer/transform"eaimeta@70e063a35619d71f
  (true && !(false) && (0, _debug.deprecate)("You are relying on ember-data auto-magically installing the StringTransform. Use `export { StringTransform as default } from '@ember-data/serializer/transform';` in app/transforms/string.js instead", false, {
    id: 'ember-data:deprecate-legacy-imports',
    for: 'ember-data',
    until: '6.0',
    since: {
      enabled: '5.2',
      available: '5.2'
    }
  }));
});
;

;define('blog/config/environment', [], function() {
  var prefix = 'blog';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(decodeURIComponent(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

;
          if (!runningTests) {
            require("blog/app")["default"].create({"name":"blog","version":"0.0.0+d291cc1d"});
          }
        
//# sourceMappingURL=blog.map
