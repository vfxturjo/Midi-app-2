import { persisted } from "svelte-local-storage-store";
import HelloWorld from "../lib/testing/hello world.svelte";

//
//
//? some variables that will be fixed based on use
export const separatorWidthExtra = 30;

//
//

// not using it now
export let LayoutEditingModeGlobal = persisted("LayoutEditingMode", false);

export let separatorSizeGlobal = persisted("separatorWidthGlobal", 2);

export const layoutComponents = {
  Hsplitter: {
    name: "H Split",
    component: () => import("../lib/testing/newHsplitterLoader.svelte"),
  },
  Vsplitter: {
    name: "V Split",
    component: () => import("../lib/testing/newVsplitterLoader.svelte"),
  },
  HelloWorld: {
    name: "Hello World",
    component: () => import("../lib/testing/hello world.svelte"),
  },
};
