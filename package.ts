export const dataPath = new URL("./_data/", import.meta.url)
export const chainsDataPath = new URL("./chains/", dataPath)
export const iconsDataPath = new URL("./icons/", dataPath)
export const iconsDownloadDataPath = new URL("./iconsDownload/", dataPath)
export { default as chainSchema } from "./tools/schema/chainSchema.json" assert { type: "json" }
export type * from "./chain.ts"
