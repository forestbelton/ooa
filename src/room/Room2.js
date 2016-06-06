import Room from './Room';

export default new Room('./map/map2.png', [
    0, 0, 0, 0, 2, 2, 2, 2, 2, 0, 0, 0,
    0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0,
    0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0,
    0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0,
    0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0,
    0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0,
    5, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0,
    5, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0,
    0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0,
    0, 0, 0, 0, 4, 4, 4, 4, 4, 0, 0, 0
], { 4: 'Room1' });
