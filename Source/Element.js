//=========//
// Element //
//=========//
const ELEMENT = {}

{
	// Element Job Description
	//========================
	// "I describe how I look and behave."

	//========//
	// Public //
	//========//
	ELEMENT.make = ({name, instructions = [], data = {}, args = {}, categories = [], elements = []}, {
		colour = "grey", emissive = colour, opacity = 1.0, visible = true, source = "",
		hidden = false, pour = true,
		...otherProperties
	} = {}) => {
	
		const behaveCode = JAVASCRIPT.makeBehaveCode(instructions, name)
		const behaveMaker = new Function(behaveCode)
		const behave = behaveMaker()
		//print(otherScopeProperties)
		const shaderColours = makeShaderColours(colour, emissive, opacity)
		colour = shaderColours.colour
		emissive = shaderColours.emissive
		const constructorCode = JAVASCRIPT.makeConstructorCode(name, data, args, visible, ...shaderColours)
		const element = JS(constructorCode)(...data, ...args)
		
		element.o={
			
			// Scope
			elements, data, args,
			
			// Appearance
			name, colour, emissive, opacity, categories, ...shaderColours, visible,
			
			// Dropper
			hidden, pour,
			
			// Debug
			source, constructorCode, behaveCode, instructions,
			
			// Behaviour
			behave, ...otherProperties
			
		}
		
		for (const child of element.elements) {
			element[child.name] = child
		}
		
		return element
	}
	
	//=========//
	// Private //
	//=========//
	const makeShaderColours = (colour, emissive, opacity) => {
		let colourColour = new THREE.Color(colour)
		let emissiveColour = new THREE.Color(emissive)

		if (!colourColour.hasOwnProperty("r")) {
			colourColour = new THREE.Color("red")
			colour = "red"
		}
		if (!emissiveColour.hasOwnProperty("r")) {
			emissiveColour = new THREE.Color("red")
			emissive = "red"
		}
		
		const shaderColour = {
			r: colourColour.r * 255,
			g: colourColour.g * 255,
			b: colourColour.b * 255,
		}
		
		const shaderOpacity = opacity * 255
		const shaderEmissive = {
			r: emissiveColour.r * 255,
			g: emissiveColour.g * 255,
			b: emissiveColour.b * 255,
		}
		
		return {shaderColour, shaderEmissive, shaderOpacity, colour, emissive}
		
	}
	
}
