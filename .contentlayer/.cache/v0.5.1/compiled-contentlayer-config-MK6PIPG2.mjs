// contentlayer.config.js
import { defineDocumentType, defineNestedType, makeSource } from "contentlayer2/source-files";
var Docs = defineDocumentType(() => ({
  name: "Docs",
  filePathPattern: `**/*.mdx`,
  contentType: "mdx",
  fields: {
    // title: {type: "string", required: true},
    // description: {type: "string", required: false},
    // date: {type: "date", required: false},
  }
  // computedFields,
}));
var contentlayer_config_default = makeSource({
  contentDirPath: "docs",
  documentTypes: [Docs]
  // mdx: {
  //   remarkPlugins: [remarkGfm, pluginCodeBlock],
  //   esbuildOptions(options) {
  //     options.plugins ||= [];
  //     options.plugins.unshift(RawPlugin());
  //
  //     return options;
  //   },
  //   rehypePlugins: [
  //     rehypeSlug,
  //     () => (tree) => {
  //       visit(tree, "element", (node) => {
  //         if (node.tagName === "code" && node.data && node.data.meta) {
  //           node.properties.meta = node.data.meta;
  //         }
  //       });
  //     },
  //   ],
  // },
});
export {
  Docs,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-MK6PIPG2.mjs.map
