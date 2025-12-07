import {
  parse
} from "./chunk-I4B7I4SQ.js";
import "./chunk-AXDFIQ6M.js";
import "./chunk-JHDIPIOF.js";
import "./chunk-MEKQXZRC.js";
import "./chunk-PXQBV5OR.js";
import "./chunk-LAJJQLTL.js";
import "./chunk-XNNDTGNN.js";
import "./chunk-DM5PDZJW.js";
import "./chunk-I6ADA5RB.js";
import "./chunk-3KOL2IQZ.js";
import {
  package_default
} from "./chunk-FWFFCYBZ.js";
import {
  selectSvgElement
} from "./chunk-EG5JOORV.js";
import {
  configureSvgSize
} from "./chunk-YJFHWUPH.js";
import {
  __name,
  log
} from "./chunk-QCOFYFT4.js";
import "./chunk-NBWFZMTS.js";
import "./chunk-ST3SR5TB.js";
import "./chunk-FDBJFBLO.js";

// node_modules/mermaid/dist/chunks/mermaid.core/infoDiagram-ER5ION4S.mjs
var parser = {
  parse: __name(async (input) => {
    const ast = await parse("info", input);
    log.debug(ast);
  }, "parse")
};
var DEFAULT_INFO_DB = {
  version: package_default.version + (true ? "" : "-tiny")
};
var getVersion = __name(() => DEFAULT_INFO_DB.version, "getVersion");
var db = {
  getVersion
};
var draw = __name((text, id, version) => {
  log.debug("rendering info diagram\n" + text);
  const svg = selectSvgElement(id);
  configureSvgSize(svg, 100, 400, true);
  const group = svg.append("g");
  group.append("text").attr("x", 100).attr("y", 40).attr("class", "version").attr("font-size", 32).style("text-anchor", "middle").text(`v${version}`);
}, "draw");
var renderer = { draw };
var diagram = {
  parser,
  db,
  renderer
};
export {
  diagram
};
//# sourceMappingURL=infoDiagram-ER5ION4S-XF5YHPD5.js.map
