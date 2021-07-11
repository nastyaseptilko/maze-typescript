"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
exports.__esModule = true;
var colums = 9;
var rows = 7;
var X = false;
var _ = true;
var maze = [
    [X, X, X, X, _, X, X, X, X],
    [X, _, X, _, _, X, _, _, _],
    [X, _, X, X, _, X, _, X, _],
    [_, _, X, _, _, _, _, X, _],
    [X, _, X, _, X, _, X, X, X],
    [X, _, _, _, X, _, _, _, X],
    [X, X, X, X, X, X, X, X, X],
];
function isCoordinateInMaze(maze, coordinate) {
    return (coordinate.x >= 0 &&
        coordinate.y >= 0 &&
        coordinate.x < colums &&
        coordinate.y < rows &&
        maze[coordinate.y][coordinate.x]);
}
function isAlreadyGone(savedWays, coordinate) {
    return savedWays.some(function (savedWay) { return savedWay.x === coordinate.x && savedWay.y === coordinate.y; });
}
var getAvailablePosition = function (maze, savedWays, currentLocation) {
    var ways = {
        top: { x: currentLocation.x, y: currentLocation.y - 1 },
        left: { x: currentLocation.x + 1, y: currentLocation.y },
        bottom: { x: currentLocation.x, y: currentLocation.y + 1 },
        right: { x: currentLocation.x - 1, y: currentLocation.y }
    };
    var availableWays = Object.keys(ways).filter(function (way) {
        return isCoordinateInMaze(maze, ways[way]) && !isAlreadyGone(savedWays, ways[way]);
    });
    return availableWays.length > 0 ? ways[availableWays[0]] : null;
};
function walk(maze, start) {
    var currentLocation = { x: start.x, y: start.y };
    var savedWays = [];
    var path = [];
    while (!(currentLocation.x === 8 && currentLocation.y === 3)) {
        var nextLocation = getAvailablePosition(maze, savedWays, currentLocation);
        if (nextLocation) {
            savedWays.push(nextLocation);
            path.push(nextLocation);
            currentLocation.x = nextLocation.x;
            currentLocation.y = nextLocation.y;
        }
        else {
            console.log("Stuck (" + currentLocation.x + ":" + currentLocation.y + ")");
            var _loop_1 = function (position) {
                var availablePosition = getAvailablePosition(maze, savedWays, position);
                if (availablePosition) {
                    savedWays.push(availablePosition);
                    path.push(availablePosition);
                    currentLocation.x = availablePosition.x;
                    currentLocation.y = availablePosition.y;
                    return "break";
                }
                else {
                    path.splice(path.findIndex(function (p) { return p.x === position.x && p.y === position.y; }, 1));
                }
            };
            for (var _i = 0, _a = __spreadArray([], savedWays).reverse(); _i < _a.length; _i++) {
                var position = _a[_i];
                var state_1 = _loop_1(position);
                if (state_1 === "break")
                    break;
            }
        }
        console.log("Move to (" + currentLocation.x + ":" + currentLocation.y + ")");
    }
    console.log('Finish');
    return path;
}
console.log(JSON.stringify(walk(maze, { x: 0, y: 3 }), null, 2));
