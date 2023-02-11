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
    // ^----- use this name for referring. programming name
    name: "H Split",
    // ^----- use this name for showing in UI, beautiful name
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
  Error: {
    name: "error module",
    component: () => import("../lib/JSON interface/Machines/error.svelte"),
  },
};

export const machineComponents = {
  helloWorld2: {
    name: "Hello World",
    component: () =>
      import("../lib/JSON interface/Machines/Hello World 2.svelte"),
  },
  error: {
    name: "error module",
    component: () => import("../lib/JSON interface/Machines/error.svelte"),
  },
};
