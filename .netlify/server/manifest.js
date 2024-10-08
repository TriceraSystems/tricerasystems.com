export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","robots.txt"]),
	mimeTypes: {".png":"image/png",".txt":"text/plain"},
	_: {
		client: {"start":"_app/immutable/entry/start.B065SDXm.js","app":"_app/immutable/entry/app.OCmO6djk.js","imports":["_app/immutable/entry/start.B065SDXm.js","_app/immutable/chunks/entry.CiceM6dV.js","_app/immutable/chunks/scheduler.BvLojk_z.js","_app/immutable/chunks/environment.CZLhA_4V.js","_app/immutable/entry/app.OCmO6djk.js","_app/immutable/chunks/scheduler.BvLojk_z.js","_app/immutable/chunks/index.mV8CSASl.js","_app/immutable/chunks/environment.CZLhA_4V.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
