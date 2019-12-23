import {beforeUpdate, onMount} from "svelte";

let SSR = true;

// When Loading A Component From Sapper,
// `beforeMount` Is Used To Execute The
// `callback` Before `onMount` Lifecycle Event
function beforeMount(callback) {
  let result = (function () {
    let executed = false;
    return function () {
      if (!executed) {
        executed = true;
        callback();
      }
    };
  })();

  // Check If Component Is Rendered
  // From Sapper Or Svelte Runtime
  if (SSR) {
    beforeUpdate(() => result());
    SSR = false;
  } else {
    onMount(() => result());
  }
}

export default beforeMount;
