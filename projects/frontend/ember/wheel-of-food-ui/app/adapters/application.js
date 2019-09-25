import DS from 'ember-data';
import ENV from 'wheel-of-food-ui/config/environment';

export default DS.JSONAPIAdapter.extend({
    host: ENV.APP.API_URL,
    namespace: 'api/v1'
});
