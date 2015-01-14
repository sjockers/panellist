import View from 'ampersand-view';
import Panel from './panel.js';
import slideTemplate from '../templates/slide.dom';

const Slide = View.extend({
  template: slideTemplate,
  
  render(opts) {
    this.renderWithTemplate(this);
    this.renderCollection(this.model.panels, (options) => {
      return new Panel(options);
    }, this.el.querySelector('ul'), opts);
    return this;
  }
});

export default Slide;