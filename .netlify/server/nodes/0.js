

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.DyjhUU3y.js","_app/immutable/chunks/scheduler.BvLojk_z.js","_app/immutable/chunks/index.mV8CSASl.js"];
export const stylesheets = ["_app/immutable/assets/0.DFbZ05i8.css"];
export const fonts = [];
