import React from 'react';
import renderer from 'react-test-renderer';
import {Homepage} from "../../src/pages/Homepage";
import {EMAIL} from "../../src/constants/data";

const {act} = renderer;
const email = 'test@gmail.com'
const component = <h2>User: {email}</h2>

describe('<Homepage />', () => {
    it('if user already login', async () => {
        sessionStorage.setItem(EMAIL, email)
        let homepage;
        await act(async () => {homepage = renderer.create(
            <Homepage
                authenticated={true}
            />)
        });

        expect(homepage.root.findByType('h2'));
        expect(homepage.root.findByType('a'));
    });
    it('if user not login yet', async () => {
        sessionStorage.setItem(EMAIL, email)
        let homepage;
        await act(async () => {homepage = renderer.create(
            <Homepage
                authenticated={false}
            />)
        });

        expect(homepage.root.findAllByType('h2').length).toEqual(0);
        expect(homepage.root.findAllByType('a').length).toEqual(0);
    });
})