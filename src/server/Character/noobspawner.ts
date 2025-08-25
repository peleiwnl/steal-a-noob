import { chartype } from "./chartype";
import { Noob, MegaNoob, NewerNoob } from "./noob";

export function spawnRandomNoob(): Noob {
	const types = [chartype.Noob, chartype.MegaNoob, chartype.NewerNoob];
	const chosenType = types[math.floor(math.random() * types.size())];

	switch (chosenType) {
		case chartype.MegaNoob:
			return new MegaNoob();
		case chartype.NewerNoob:
			return new NewerNoob();
		default:
			return new Noob(chartype.Noob, { size: 1, rarity: "Common", appearance: "NoobModel" });
	}
}
