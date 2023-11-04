/** @type {URL} */
export const dataPath = new URL("./_data/", import.meta.url)
/** @type {URL} */
export const chainsDataPath = new URL("./chains/", dataPath)
/** @type {URL} */
export const iconsDataPath = new URL("./icons/", dataPath)
/** @type {URL} */
export const iconsDownloadDataPath = new URL("./iconsDownload/", dataPath)
/** @type {typeof import("./tools/schema/chainSchema.json")} */
export { default as chainSchema } from "./tools/schema/chainSchema.json" assert { type: "json" }
