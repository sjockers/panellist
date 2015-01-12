import View from 'ampersand-view';
import Slide from './slide.js';

const SlideList = View.extend({
  template: '<main><h1>SLIDE LIST</h1><span data-hook="slides"></span></main>',
  
  render: function (opts) {
    this.renderWithTemplate(this);
    this.renderCollection(this.collection, (options) => {
      return new Slide(options);
    }, 'slides', opts);
    return this;
  }
});

export default SlideList;