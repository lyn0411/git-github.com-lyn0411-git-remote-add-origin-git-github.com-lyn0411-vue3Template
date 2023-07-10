/// <reference types="vite/client" />
/// <reference types="vue/macros-global" />
declare module '*.vue' {
	import { DefineComponent } from 'vue';
	// eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
	const component: DefineComponent<{}, {}, any>;
	export default component;
}

interface ImportMetaEnv {
  VITE_API_URL: string
  VITE_MOCK_ENABLE: boolean
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
