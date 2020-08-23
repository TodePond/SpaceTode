
try {
	HABITAT
}
catch {
	throw new Error(`\n\n[SpaceTode] Habitat.js is required by SpaceTode.\n\nIts source is at http://habitat.todepond.cool.\nFor more info, go to https://github.com/l2wilson94/Habitat.\n`)
}

if (HABITAT.EAT_LEGACY !== true) throw new Error(`\n\n[SpaceTode] EatLegacy.js is required by SpaceTode.\n\nIts source is at http://habitat.todepond.cool/Build/EatLegacy.js.\n`)
