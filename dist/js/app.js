var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
window.onload = function () {
    var game = new GameBase.Game();
};
/// <reference path='vendor/phaser/phaser.d.ts' />
var Pk;
(function (Pk) {
    var PkGame = (function (_super) {
        __extends(PkGame, _super);
        function PkGame(pkConfig) {
            if (pkConfig === void 0) { pkConfig = new Pk.PkConfig(); }
            var _this = _super.call(this, pkConfig.canvasSize[0], pkConfig.canvasSize[1], pkConfig.renderMode, pkConfig.canvasId) || this;
            _this.pkConfig = pkConfig;
            console.log('this.pkConfig:', _this.pkConfig);
            // add states
            _this.state.add('PkLoaderPreLoader', PkLoaderPreLoader);
            // init loader
            _this.state.start('PkLoaderPreLoader');
            return _this;
        }
        PkGame.prototype.getConfig = function () {
            return this.pkConfig;
        };
        return PkGame;
    }(Phaser.Game));
    Pk.PkGame = PkGame;
    var PkLoaderPreLoader = (function (_super) {
        __extends(PkLoaderPreLoader, _super);
        function PkLoaderPreLoader() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        PkLoaderPreLoader.prototype.init = function () {
            // add loader screen
            this.game.state.add('PkLoader', this.game.getConfig().loaderState);
        };
        PkLoaderPreLoader.prototype.preload = function () {
            // load loadingbar sprite
            this.load.image('pk-loading-bar', this.game.getConfig().loaderLoadingBar);
        };
        PkLoaderPreLoader.prototype.create = function () {
            // console.log('this.game.getConfig().loaderState:', this.game.getConfig().loaderState);
            // change to preloader screen*
            // this.game.getConfig().loaderState();
            this.game.state.start('PkLoader');
        };
        return PkLoaderPreLoader;
    }(Phaser.State));
})(Pk || (Pk = {}));
var Pk;
(function (Pk) {
    var PkConfig = (function () {
        function PkConfig() {
            this.canvasSize = [800, 600]; // width, height
            this.canvasId = 'game';
            this.renderMode = RenderMode.AUTO;
            this.initialState = ''; // initial state after loadscreen
            // loading settings
            this.loaderLoadingBar = 'assets/images/loading.png'; // loading bar
            this.loaderWaitingTime = 1000; // 1 sec
            this.loaderState = Pk.PkLoader;
        }
        return PkConfig;
    }());
    Pk.PkConfig = PkConfig;
    // for remember ...    :'(     ... never forget
    var RenderMode;
    (function (RenderMode) {
        RenderMode[RenderMode["AUTO"] = Phaser.AUTO] = "AUTO";
        RenderMode[RenderMode["CANVAS"] = Phaser.CANVAS] = "CANVAS";
        RenderMode[RenderMode["WEBGL"] = Phaser.WEBGL] = "WEBGL";
        RenderMode[RenderMode["HEADLESS"] = Phaser.HEADLESS] = "HEADLESS";
    })(RenderMode || (RenderMode = {}));
})(Pk || (Pk = {}));
/// <reference path='../pk/PkGame.ts' />
/// <reference path='../pk/PkConfig.ts' />
var GameBase;
(function (GameBase) {
    var Game = (function (_super) {
        __extends(Game, _super);
        function Game() {
            var _this = _super.call(this, new Config()) || this;
            // add default state
            _this.state.add('Main', GameBase.Main);
            return _this;
            /*
            this.state.add('Boot', Boot, false);
            this.state.add('Preloader', Preloader, false);
            this.state.add('MainMenu', MainMenu, false);
            this.state.add('Level1', Level1, false);
 
            this.state.start('Boot');
            */
        }
        return Game;
    }(Pk.PkGame));
    GameBase.Game = Game;
    var Config = (function (_super) {
        __extends(Config, _super);
        function Config() {
            var _this = _super.call(this) || this;
            console.log('---------- ---- config');
            _this.loaderState = GameBase.Loader;
            _this.initialState = 'Main';
            return _this;
        }
        return Config;
    }(Pk.PkConfig));
})(GameBase || (GameBase = {}));
var Pk;
(function (Pk) {
    var PkState = (function (_super) {
        __extends(PkState, _super);
        function PkState() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        PkState.prototype.init = function () {
            console.log('PkState init');
        };
        PkState.prototype.create = function () {
            console.log('PkState create');
        };
        return PkState;
    }(Phaser.State));
    Pk.PkState = PkState;
})(Pk || (Pk = {}));
/// <reference path='PkState.ts' />
var Pk;
(function (Pk) {
    var PkLoader = (function (_super) {
        __extends(PkLoader, _super);
        function PkLoader() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        PkLoader.prototype.init = function () {
        };
        PkLoader.prototype.preload = function () {
            this.load.setPreloadSprite(this.add.sprite(200, 250, 'pk-loading-bar'));
        };
        PkLoader.prototype.create = function () {
            var _this = this;
            setTimeout(function () {
                // if initial state set, load
                if (_this.game.getConfig().initialState != '')
                    _this.game.state.start(_this.game.getConfig().initialState);
                //
            }, this.game.getConfig().loaderWaitingTime);
        };
        return PkLoader;
    }(Pk.PkState));
    Pk.PkLoader = PkLoader;
})(Pk || (Pk = {}));
/// <reference path='../pk/PkLoader.ts' />
var GameBase;
(function (GameBase) {
    var Loader = (function (_super) {
        __extends(Loader, _super);
        function Loader() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Loader.prototype.init = function () {
            _super.prototype.init.call(this);
        };
        Loader.prototype.preload = function () {
            _super.prototype.preload.call(this);
            // default
            this.load.spritesheet('simon', 'assets/default/images/player.png', 58, 96, 5);
            // state level 1
            this.load.image('level1-bg', 'assets/states/level1/images/bg.png');
            this.load.audio('level1-sound', 'assets/states/level1/sounds/sound-test.mp3');
            // state main
            this.load.image('titlepage', 'assets/states/main/images/titlepage.jpg');
            // state loader
            this.load.image('loadingbar', 'assets/states/loader/images/loader.png');
            this.load.image('logo', 'assets/states/loader/images/logo.png');
        };
        Loader.prototype.create = function () {
            _super.prototype.create.call(this);
        };
        return Loader;
    }(Pk.PkLoader));
    GameBase.Loader = Loader;
})(GameBase || (GameBase = {}));
/// <reference path='../../pk/PkState.ts' />
var GameBase;
(function (GameBase) {
    var Main = (function (_super) {
        __extends(Main, _super);
        function Main() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Main.prototype.init = function () {
            console.log('Main init');
        };
        Main.prototype.create = function () {
            console.log('Main create');
        };
        return Main;
    }(Pk.PkState));
    GameBase.Main = Main;
})(GameBase || (GameBase = {}));
/// <reference path='../vendor/phaser/phaser.d.ts' />
var Pk;
(function (Pk) {
    var PkElement = (function (_super) {
        __extends(PkElement, _super);
        function PkElement(game) {
            var _this = _super.call(this, game) || this;
            _this.id = ++PkElement.id;
            _this.tweens = [];
            _this.name = "PkElement";
            console.log('PkElement create ID:', _this.id);
            return _this;
        }
        PkElement.prototype.addTween = function (displayObject) {
            this.tweens.push(this.game.add.tween(displayObject));
            return this.tweens[this.tweens.length - 1];
        };
        PkElement.prototype.destroy = function () {
            for (var i = this.tweens.length - 1; i >= 0; i--) {
                this.tweens[i].stop();
            }
            _super.prototype.destroy.call(this);
        };
        return PkElement;
    }(Phaser.Group));
    PkElement.id = 0;
    Pk.PkElement = PkElement;
})(Pk || (Pk = {}));
/// <reference path='../vendor/phaser/phaser.d.ts' />
var Pk;
(function (Pk) {
    var PkEvent = (function () {
        function PkEvent(name, target) {
            this.id = ++PkEvent.id;
            this.listeners = [];
            this.target = target;
            this.name = name;
        }
        PkEvent.prototype.add = function (key, callBack, context) {
            var context = context || {};
            var exist = false;
            // verifica se já não foi add
            for (var i = 0; i < this.listeners.length; i++) {
                if (this.listeners[i].callBack.toString() === callBack.toString()) {
                    exist = true;
                    break;
                }
            }
            ;
            if (!exist)
                this.listeners.push({ key: key, callBack: callBack, context: context });
            //
        };
        PkEvent.prototype.dispatch = function (key) {
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            for (var i = 0; i < this.listeners.length; i++) {
                if (key == this.listeners[i].key) {
                    var data = {
                        target: this.target // ho dispatch the event
                    };
                    // add args to data
                    for (var j in args)
                        data[j] = args[j];
                    //
                    // dispara sem contexto mesmo
                    this.listeners[i].callBack(data);
                }
            }
        };
        return PkEvent;
    }());
    PkEvent.id = 0;
    Pk.PkEvent = PkEvent;
})(Pk || (Pk = {}));
var Pk;
(function (Pk) {
    var PkUtils = (function () {
        function PkUtils() {
        }
        // check if is a empty object
        PkUtils.isEmpty = function (obj) {
            for (var prop in obj) {
                if (obj.hasOwnProperty(prop))
                    return false;
            }
            return true && JSON.stringify(obj) === JSON.stringify({});
        };
        return PkUtils;
    }());
    Pk.PkUtils = PkUtils;
})(Pk || (Pk = {}));
//# sourceMappingURL=app.js.map