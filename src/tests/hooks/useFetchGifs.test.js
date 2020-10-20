import { renderHook } from "@testing-library/react-hooks";
import { useFetchGifs } from "../../hooks/useFetchGifs";

describe('Testing hook useFetchGifs', () => {
    test('should return the initial state', async () => {

        //usa la liberia react-hooks
        //para crear un componente "virtual"
        //y asi testear los custom hooks
        const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('Dragon Ball'))
        //y ahora si podemos evaluar lo que necesitamos
        //en este caso es el estado inicial del custom hook
        const { data, loading } = result.current;

        await waitForNextUpdate();
        expect(data).toEqual([]);
        expect(loading).toBe(true);
    })

    test('should return an images array and the loading in false', async () => {
        //waitForNextUpdate es una fucion que regresa una promesa
        //la promesa indica cuando sucedio un cambio en el estado del custom hook
        //debe ser usada con async/await
        const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('Dragon Ball'));
        await waitForNextUpdate();

        const { data, loading } = result.current;
        expect(data.length).toBe(10);
        expect(loading).toBe(false);


    })

})
