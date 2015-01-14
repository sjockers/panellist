import State from 'ampersand-state';
import Collection from 'ampersand-collection';
import View from 'ampersand-view';
import SlideList from './components/slide_list.js';

const PanelModel = State.extend({
	props: {
		background: 'string'
	}
});

const PanelCollection = Collection.extend({
	model: PanelModel
});

const SlideModel = State.extend({
	collections: {
		panels: PanelCollection
	}
});

const SlideCollection = Collection.extend({
	model: SlideModel
});

const data = new SlideCollection([
  {
  	panels: [
  		{
  			background: 'red'
  		},
   		{
  			background: 'green'
  		},
   		{
  			background: 'blue'
  		},
   		{
  			background: 'purple'
  		}
  	]
  },
  {
  	panels: [
  		{
  			background: 'green'
  		},
   		{
  			background: 'yellow'
  		}
  	]
  },
  {
    panels: [
      {
        background: 'red'
      },
      {
        background: 'green'
      },
      {
        background: 'blue'
      },
      {
        background: 'purple'
      }
    ]
  },
  {
    panels: [
      {
        background: 'green'
      },
      {
        background: 'yellow'
      }
    ]
  },
  {
    panels: [
      {
        background: 'red'
      },
      {
        background: 'green'
      },
      {
        background: 'blue'
      },
      {
        background: 'purple'
      }
    ]
  },
  {
    panels: [
      {
        background: 'green'
      },
      {
        background: 'yellow'
      }
    ]
  },
  {
    panels: [
      {
        background: 'red'
      },
      {
        background: 'green'
      },
      {
        background: 'blue'
      },
      {
        background: 'purple'
      }
    ]
  },
  {
    panels: [
      {
        background: 'green'
      },
      {
        background: 'yellow'
      }
    ]
  },
  {
    panels: [
      {
        background: 'red'
      },
      {
        background: 'green'
      },
      {
        background: 'blue'
      },
      {
        background: 'purple'
      }
    ]
  },
  {
    panels: [
      {
        background: 'green'
      },
      {
        background: 'yellow'
      }
    ]
  },  
  {
    panels: [
      {
        background: 'red'
      },
      {
        background: 'green'
      },
      {
        background: 'blue'
      },
      {
        background: 'purple'
      }
    ]
  },
  {
    panels: [
      {
        background: 'green'
      },
      {
        background: 'yellow'
      }
    ]
  },        
  {
    panels: [
      {
        background: 'red'
      },
      {
        background: 'green'
      },
      {
        background: 'blue'
      },
      {
        background: 'purple'
      }
    ]
  },
  {
    panels: [
      {
        background: 'green'
      },
      {
        background: 'yellow'
      }
    ]
  },  
  {
    panels: [
      {
        background: 'red'
      },
      {
        background: 'green'
      },
      {
        background: 'blue'
      },
      {
        background: 'purple'
      }
    ]
  },
  {
    panels: [
      {
        background: 'green'
      },
      {
        background: 'yellow'
      }
    ]
  },  
  {
    panels: [
      {
        background: 'red'
      },
      {
        background: 'green'
      },
      {
        background: 'blue'
      },
      {
        background: 'purple'
      }
    ]
  },
  {
    panels: [
      {
        background: 'green'
      },
      {
        background: 'yellow'
      }
    ]
  },  
  {
    panels: [
      {
        background: 'red'
      },
      {
        background: 'green'
      },
      {
        background: 'blue'
      },
      {
        background: 'purple'
      }
    ]
  },
  {
    panels: [
      {
        background: 'green'
      },
      {
        background: 'yellow'
      }
    ]
  }  



]);

const MainView = View.extend({
	template: '<main><span data-hook="slides"></span></main>',

  render() {
		this.renderWithTemplate();
		this.renderSubview(new SlideList({collection: data}), '[data-hook=slides]');  	
  }
});

const mainView = new MainView({
  el: document.getElementById('content'),
});

mainView.render();
