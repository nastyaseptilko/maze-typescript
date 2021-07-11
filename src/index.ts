import { Coords, Maze, SavedWays, Ways } from './interfaces/maze.interfaces';

const columns = 9;
const rows = 7;
const X = false;
const _ = true;

const maze: Maze = [
    [X, X, X, X, _, X, X, X, X],
    [X, _, X, _, _, X, _, _, _],
    [X, _, X, X, _, X, _, X, _],
    [_, _, X, _, _, _, _, X, _],
    [X, _, X, _, X, _, X, X, X],
    [X, _, _, _, X, _, _, _, X],
    [X, X, X, X, X, X, X, X, X],
];

function isCoordinateInMaze(maze: Maze, coordinate: Coords): boolean {
    return (
        coordinate.x >= 0 &&
        coordinate.y >= 0 &&
        coordinate.x < columns &&
        coordinate.y < rows &&
        maze[coordinate.y][coordinate.x]
    );
}

function isAlreadyGone(savedWays: SavedWays, coordinate: Coords): boolean {
    return savedWays.some(savedWay => savedWay.x === coordinate.x && savedWay.y === coordinate.y);
}

function getAvailablePosition(
    maze: Maze,
    savedWays: SavedWays,
    currentLocation: Coords,
): Coords | null {
    const ways: Ways = {
        top: { x: currentLocation.x, y: currentLocation.y - 1 },
        left: { x: currentLocation.x + 1, y: currentLocation.y },
        bottom: { x: currentLocation.x, y: currentLocation.y + 1 },
        right: { x: currentLocation.x - 1, y: currentLocation.y },
    };

    const availableWays = Object.keys(ways).filter(
        (way: string) =>
            isCoordinateInMaze(maze, ways[way]) && !isAlreadyGone(savedWays, ways[way]),
    );

    return availableWays.length > 0 ? ways[availableWays[0]] : null;
}

function walk(maze: Maze, start: Coords): Coords[] {
    const currentLocation: Coords = { x: start.x, y: start.y };
    const savedWays: SavedWays = [];
    const path: Coords[] = [];

    while (!(currentLocation.x === 8 && currentLocation.y === 3)) {
        const nextLocation = getAvailablePosition(maze, savedWays, currentLocation);

        if (nextLocation) {
            savedWays.push(nextLocation);
            path.push(nextLocation);
            currentLocation.x = nextLocation.x;
            currentLocation.y = nextLocation.y;
        } else {
            console.log(`Stuck (${currentLocation.x}:${currentLocation.y})`);
            for (const position of [...savedWays].reverse()) {
                const availablePosition = getAvailablePosition(maze, savedWays, position);

                if (availablePosition) {
                    savedWays.push(availablePosition);
                    path.push(availablePosition);
                    currentLocation.x = availablePosition.x;
                    currentLocation.y = availablePosition.y;
                    break;
                } else {
                    path.splice(path.findIndex(p => p.x === position.x && p.y === position.y, 1));
                }
            }
        }
        console.log(`Move to (${currentLocation.x}:${currentLocation.y})`);
    }
    console.log('Finish');
    return path;
}

console.log(JSON.stringify(walk(maze, { x: 0, y: 3 }), null, 2));
