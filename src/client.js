import * as sapper from "@sapper/app";
import { prerenderIntention } from "./_utils/prerenderIntention";

sapper.start({
  target: document.getElementById("app"),
});

window.addEventListener("load", prerenderIntention);
