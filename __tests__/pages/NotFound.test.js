import React from 'react';
import renderer from 'react-test-renderer';
import {NotFound} from "../../src/pages/NotFound";

const {act} = renderer;

describe('<NotFound />', () => {
    it('test match snapshot', async () => {
        let notFound;
        await act(async () => {notFound = renderer.create(
            <NotFound
            />)
        });
        expect(notFound.toJSON()).toMatchSnapshot();

    });
})