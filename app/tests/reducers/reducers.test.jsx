var expect = require('expect');

// deep freeze can only be called to protect objects from being assigned new readonly properties
var df = require('deep-freeze-strict');

var reducers = require('reducers');

describe('Reducers', () => {
  
  describe('searchTextReducer', () => {
    it('should set searchText', () => {
      var action = {
        type: 'SET_SEARCH_TEXT',
        searchText: 'test',
      };
      var response = reducers.searchTextReducer('', df(action));
      expect(response).toEqual(action.searchText);
    });
  });
  
  describe('showCompletedReducer', () => {
    it('should toggle showCompleted', () => {
      var action = {
        type: 'TOGGLE_SHOW_COMPLETED',
      };
      var response = reducers.showCompletedReducer(false, df(action));
      expect(response).toEqual(true);
      
    }); 
  });
});