// Import the tag definitions for JSX, so React knows about them
import "./cwc-elements-interfaces.d.ts";

// Import the microfrontend Web Components from Module Federation "WebComponents" (wc_system)
export async function defineRequiredCwcElements(): Promise<{ loadedOk: boolean }> {
  try {
    // Importing each component separately and wait for all to finish
    await Promise.all([
      import("WebComponents/test"),
      import("WebComponents/levels"),
      import("WebComponents/multiselect"),
      import("WebComponents/stepper"),
      import("WebComponents/stepper-item"),
      import("WebComponents/stepper-json"),
      import("WebComponents/modal"),
      import("WebComponents/login"),
      import("WebComponents/flipcard"),
      import("WebComponents/login")
    ]);
    
    return { loadedOk: true };
  }
  catch (error) {
    console.log(error);
    window.alert("Web Component library could not be loaded");
    return { loadedOk: false };
  }
}
