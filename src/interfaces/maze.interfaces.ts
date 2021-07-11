export interface Coords {
    x: number;
    y: number;
}

export type Maze = boolean[][];

export type SavedWays = Coords[];

export type Ways = {
    top: Coords;
    left: Coords;
    bottom: Coords;
    right: Coords;
    [key: string]: Coords;
};
