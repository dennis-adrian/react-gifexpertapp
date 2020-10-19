import React from 'react';
import '@testing-library/jest-dom';

import { shallow } from 'enzyme';
import AddCategory from '../../components/AddCategory';

describe('Testing on <AddCategory />', () => {

    const setCategories = jest.fn();
    let wrapper = shallow(<AddCategory setCategories={setCategories} />);

    beforeEach(() => {
        //se llama para limpiar todas las simulaciones que tengamos de algo
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={setCategories} />);
    })


    test('should render correctly', () => {

        expect(wrapper).toMatchSnapshot();
    })

    test('should change the input box', () => {
        const input = wrapper.find('input');

        //simulamos el e.target.value que se necesita en nuestro componente
        const value = 'hello world'
        //el objeto representa el evento (e)
        input.simulate('change', {
            target: { value }
        });

    })

    test('should not post the infomation on submit', () => {
        wrapper.find('form').simulate('submit', {
            preventDefault() { }
        })

        expect(setCategories).not.toHaveBeenCalled();
    })

    test('should call setCategories and clean the input textbox', () => {
        const value = 'hello world';

        //simlando el cambio en el input
        wrapper.find('input').simulate('change', {
            target: { value }
        });
        //simulando el submit
        wrapper.find('form').simulate('submit', {
            preventDefault() { }
        });
        //verificamos que se haya llamado a la función
        expect(setCategories).toHaveBeenCalled();
        /*podemos aseguranos que la función haya sido
        llamada exactamente una vez*/
        expect(setCategories).toHaveBeenCalledTimes(1);
        /** Podemos asegurarnos que se haya llamado con una
         * función y no con cualquier otro tipo de dato
        */
        expect(setCategories).toHaveBeenCalledWith(expect.any(Function));



        //verificar si el input se vació
        expect(wrapper.find('input').prop('value')).toBe('');

    })

})