import React from 'react';
import sinon from 'sinon';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Button from '../Button';
import { ListShowcase } from '../ListShowcase';
import ListEditor from '../ListEditor';

describe('<ListShowcase />', () => {

  const props = {
    lists: [
      {
        id: '#1',
        title: 'List #1',
      },
      {
        id: '#2',
        title: 'List #2',
      },
    ],
    onClickAddNewList: () => { },
  };

  it('renders two <ListEditor /> components', () => {
    const wrapper = shallow(
      <ListShowcase {...props} />
    );
    expect(wrapper.find(ListEditor)).to.have.lengthOf(2);
  });

  it('renders clikable "Add new" button', () => {
    const onClickAddNewList = sinon.spy();
    const wrapper = shallow(
      <ListShowcase {...props} onClickAddNewList={onClickAddNewList} />
    );
    expect(wrapper.find(Button)).to.have.lengthOf(1);
    expect(wrapper.find(Button).prop('children')).to.be.equal('Add new')
    wrapper.find(Button).simulate('click')
    expect(onClickAddNewList).to.have.property('callCount', 1);
  });

});
