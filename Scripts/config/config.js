var config;
(function (config) {
    var Scene;
    (function (Scene) {
        Scene[Scene["Menu"] = 0] = "Menu";
        Scene[Scene["Play"] = 1] = "Play";
        Scene[Scene["GameOver"] = 2] = "GameOver";
    })(Scene = config.Scene || (config.Scene = {}));
    ;
    var GameInfo = /** @class */ (function () {
        function GameInfo() {
        }
        return GameInfo;
    }());
    config.GameInfo = GameInfo;
})(config || (config = {}));
//# sourceMappingURL=config.js.map