module managers {
    export class GameManager {
        public static DebugMode: boolean = true;
        public static AssetManager: createjs.LoadQueue; // handles preload
        public static SceneManager: managers.SceneManager; // handles scenes
        public static CameraManager: managers.CameraManager; // handles camera movement
        public static CurrentLevel: scenes.Play; // handles level
        public static AssetManifest = [
            // UI - Main Menu
            { id: "btnStart", src: "./Assets/sprites/menu/gui/btnStart.png" },
            { id: "btnUnmute", src: "./Assets/sprites/menu/gui/btnUnmute.png" },
            { id: "btnMuted", src: "./Assets/sprites/menu/gui/btnMuted.png" },

            // UI - In Game

            // Game Objects
            // { id: "spritesheet_player", src: "./Assets/sprites/player/Fireman/sprites/spritesheet_fireman.png" },
            {id: "player", src: "./Assets/sprites/player/player.png"},
            // { id: "spritesheet_obstacle", src: "./Assets/sprites/player/placeholder-obstacle.png" },
            // { id: "sprite_platform", src: "./Assets/sprites/environment/platform.png" },
            // { id: "sprite_ladder", src: "./Assets/sprites/environment/ladder.png" },
            {id: "menu_bg", src:"./Assets/sprites/environment/menu.png"},
            {id: "gameOver_bg", src:"./Assets/sprites/environment/gameOver.png"},

            // Level Backgrounds
            { id: "level1", src: "./Assets/sprites/environment/maze_Updated.png" },
            // { id: "level1", src: "./Assets/sprites/environment/background-tile.png" },
            // { id: "level2", src: "./Assets/sprites/environment/level2.png" },
            // { id: "level3", src: "./Assets/sprites/environment/level3.png" },

            // Audio
            // Background Music
             { id: "bgmFloor1", src: "./Assets/audio/bgm.m4a" },
            // SFX
              { id: "sfxHit", src: "./Assets/audio/ballonPop.mp3"}
        ];
    }
}