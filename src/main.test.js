import React from 'react';
import Component from './main';

describe('main', () => {
  const wrapper = mount(<Component />);
  it('mounts component', () => {
    expect(wrapper).to.be.present();
  });
});
