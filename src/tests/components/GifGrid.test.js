import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { GifGrid } from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';
//de esta manera finjimos la llamada a este archivo
jest.mock('../../hooks/useFetchGifs')

describe('Testing on <GifGrid />', () => {

    const category = 'Dragon Ball'

    test('should be shown correctly', () => {

        //finjimos que estos son los datos que está recolectando useFetchGifs
        //desde la api (ya que en realidad, no estamos llamando a la api, hay 
        //que finjirlo)
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        });

        const wrapper = shallow(<GifGrid category={category} />);
        expect(wrapper).toMatchSnapshot();
    })

    test('should show items when images are loaded with useFetchGifs', () => {

        //el mock sirve  para que el componente crea que tiene información
        const gifs = [{
            id: 'ABC',
            url: 'https://localhost/algo',
            title: 'Cualquier cosa'
        },
        {
            id: 'ABC',
            url: 'https://localhost/algo',
            title: 'Cualquier cosa'
        },
        {
            id: 'ABC',
            url: 'https://localhost/algo',
            title: 'Cualquier cosa'
        }]

        //finjimos que estos son los datos que está recolectando useFetchGifs
        //desde la api (ya que en realidad, no estamos llamando a la api, hay 
        //que finjirlo)
        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        });

        const wrapper = shallow(<GifGrid category={category} />);

        expect(wrapper).toMatchSnapshot();
        //evaluamos que el parrafo de "loading" no exista
        //porque cuando los datos ya están cargados, ese párrafo no debería existir
        expect(wrapper.find('p').exists()).toBe(false);
        //evaluamos que la cantidad de items coincida con la cantidad de objetos en el array
        //que simula ser el fetch a la api
        expect(wrapper.find('GifGridItem').length).toBe(gifs.length);
    })

})

