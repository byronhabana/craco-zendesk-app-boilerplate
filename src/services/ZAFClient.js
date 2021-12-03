const client = window.ZAFClient.init();

const events = {
  on_app_registered(cb) {
    return client.on('app.registered', data => {
      return cb(data);
    });
  }
}

const actions = {
  get(param) {
    return client.get(param)
  },
  set(param) {
    return client.set(param)
  }
}

const ZAFClient = { events, actions }
export default ZAFClient;