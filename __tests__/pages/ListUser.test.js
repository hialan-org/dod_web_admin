import React from 'react';
import renderer from 'react-test-renderer';
import {ListUser} from "../../src/pages/ListUser";
import {users} from "../../__mocks__/Users";
import {getListUser} from "../../src/utils/APIUtils";
import BootstrapTable from 'react-bootstrap-table-next';

const {act} = renderer;

jest.mock('../../src/utils/APIUtils.js', () => ({
    getListUser: jest.fn()
}));

describe('<ListUser />', () => {
    it('if users table is not empty', async () => {
        getListUser.mockResolvedValue({
            body: users
        })
        let listUsers;
        await act(async () => {listUsers = renderer.create(
            <ListUser
                authenticated={true}
            />)
        });
        expect(listUsers.toJSON()).toMatchSnapshot();
        expect(listUsers.root.findByType(BootstrapTable).props.data.length)
            .toEqual(users.length);

    });
})