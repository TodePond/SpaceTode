
const decoder = new TextDecoder("utf-8")
const encoder = new TextEncoder("utf-8")

let source = ""

const readDir = async (path) => {
	for await (const dirEntry of Deno.readDir(path)) {
		const entryPath = `${path}/${dirEntry.name}`
		if (dirEntry.isDirectory) await readDir(entryPath)
		else await readFile(entryPath)
	}
}

const readFile = async (path) => {
	const fileData = await Deno.readFile(path)
	const fileSource = decoder.decode(fileData)
	source += `\n\n//==== ${path} ====//\n;`
	source += fileSource
}

await readFile("Source/SpaceTode.js")
await readFile("Source/EventWindow.js")
await readFile("Source/Symmetry.js")
await readFile("Source/Element.js")
await readFile("Source/Instruction.js")
await readFile("Source/Javascript.js")
await readFile("Source/Parse.js")

const data = encoder.encode(source)
await Deno.writeFile("Build/SpaceTode.js", data)
console.log("[SpaceTode] Build finished")
