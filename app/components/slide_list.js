import View from 'ampersand-view';
import Slide from './slide.js';
import slideListTemplate from '../templates/slide_list.dom';

const SlideList = View.extend({
  template: slideListTemplate,
  
  render: function (opts) {
    this.renderWithTemplate(this);
    this.renderCollection(this.collection, (options) => {
      return new Slide(options);
    }, 'slides', opts);
    return this;
  }
});

export default SlideList;