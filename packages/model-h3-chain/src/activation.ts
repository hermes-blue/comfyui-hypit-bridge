import { createMarkupSurfaceFacet } from "@hypit/hypit/markup";
import { createAdmissionPackageFacet } from "@hypit/hypit/admission";
import { createProducerPackageFacet } from "@hypit/hypit/producer";
import { h3ChainComponent, h3ChainDefinition, h3ChainManifest, h3ChainModuleRef,
  h3ChainTakeVideoDeclaration } from "./index.js";
import { decodeH3ChainTakeVideoSurface } from "./surface.js";

export const hypitPackage = { format: "hypit.package@1" as const, modules: [{ manifest: h3ChainManifest }], facets: [
  createProducerPackageFacet(h3ChainComponent),
  createAdmissionPackageFacet(h3ChainComponent),
  h3ChainDefinition.facet,
  createMarkupSurfaceFacet({
    module: h3ChainModuleRef,
    declaration: h3ChainTakeVideoDeclaration,
    handler: decodeH3ChainTakeVideoSurface,
  }),
] };
export default hypitPackage;
