import { getGifs } from '../../helpers/getGifs';

describe('Testing with getGifs Fetch', () => {
    test('should return 10 elements', async () => {
        const gifs = await getGifs('dragon ball');

        expect(gifs.length).toBe(10);
    })
    
    test('should return 0 if category is not passed', async () => {
        const gifs = await getGifs('');

        expect(gifs.length).toBe(0);
    })


})
