import State from 'ampersand-state';
import Collection from 'ampersand-collection';
import UnderscoreMixin from 'ampersand-collection-underscore-mixin';

const PositionModel = State.extend({
  props: {
    top: 'number',
    right: 'number',
    bottom: 'number',
    left: 'number'
  },

  derived: {
    styleDefinition: function() {
      let style = '';
      let attributes = this.attributes;
      for (var property in attributes) {
        if (attributes.hasOwnProperty(property)) {
          style += `${property}: ${attributes[property]}px; `;
        }
      }
      if (style !== '') {
        style += 'position: absolute;';
      }
      return style;
    }
  }
});

const TransitionModel = State.extend({
  props: {
    propertyName: 'string',
    fromValue: 'number',
    toValue: 'number',
    offset: 'number'
  }
});

const BasePanelModel = State.extend({
  props: {
    image: 'string',
    offset: 'number'
  },

  children: {
    position: PositionModel
  },

  collections: {
    transitions: Collection.extend(UnderscoreMixin, {
      model: TransitionModel
    })
  }
});

const CaptionModel = State.extend({
  props: {
    text: 'string'
  },

  children: {
    position: PositionModel
  },

  collections: {
    transitions: Collection.extend(UnderscoreMixin, {
      model: TransitionModel
    })
  }
});

const PanelModel = BasePanelModel.extend({
  collections: {
    subpanels: Collection.extend({
      model: BasePanelModel
    }),
    captions: Collection.extend({
      model: CaptionModel
    })
  }
});

export default PanelModel;

