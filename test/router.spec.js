import {
  setRootEl,
  setRoutes,
  navigateTo,
} from '../src/router.js';

const routes = {
  '/': () => {
    const div = document.createElement("div");
    div.innerHTML = "Home";
    return div;
  },
  '/details': ({id}) => {
    const div = document.createElement("div");
    div.innerHTML = `Character id: ${id}`;
    return div;
  },
  '/error': () => {
    const div = document.createElement("div");
    div.innerHTML = "Error";
    return div;
  },
}

describe('router', () => {

  describe('navigateTo', () => {
    beforeEach(()=>{
      setRoutes(routes);
      document.body.innerHTML = '<div id="root"></div>';
      const rootElement = document.getElementById("root");
      setRootEl(rootElement);
    })


    it('Should update the URL and add query params and render the correct component', () => {
      const pushStateSpy = jest.spyOn(window.history, 'pushState');
      const pathname = '/details';
      const params = { id: 'dors-venabili' };
      const expectedURL = `${window.location.origin}/details?id=dors-venabili`;
      navigateTo(pathname, params);
      expect(pushStateSpy).toHaveBeenCalledWith(params, '', expectedURL);
      const div = document.querySelector('div');
      expect(div.innerHTML).toBe('<div>Character id: dors-venabili</div>');
      pushStateSpy.mockRestore();
    });

    it('Should update the URL and render the correct component without params', () => {
      const pushStateSpy = jest.spyOn(window.history, 'pushState');
      const pathname = '/';
      const expectedURL = `${window.location.origin}/`;
      navigateTo(pathname);
      expect(pushStateSpy).toHaveBeenCalledWith(undefined, '', expectedURL);
      const div = document.querySelector('div');
      expect(div.innerHTML).toBe('<div>Home</div>');
      pushStateSpy.mockRestore();
    });

    it('If the path name does not exist should navigate to Error (update the url and render Error component)', () => {
      const errorRouteSpy = jest.fn(routes["/error"]);
      setRoutes({ ...routes, "/error": errorRouteSpy });
      const pushStateSpy = jest.spyOn(window.history, 'pushState');

      const pathname = '/noexiste';
      const targetURL = `${window.location.origin}/noexiste`;
      navigateTo(pathname);
      expect(pushStateSpy.mock.calls).toEqual([
        [undefined, '', targetURL]
      ]);
      expect(errorRouteSpy).toHaveBeenCalled();
      const div = document.querySelector('div');
      expect(div.innerHTML).toBe('<div>Error</div>');
      pushStateSpy.mockRestore();
    });
  });
  
})
