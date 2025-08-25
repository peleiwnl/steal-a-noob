import { ReplicatedStorage, Workspace } from "@rbxts/services";
import { charoptions } from "./charoptions";
import { chartype } from "./chartype";

export class Noob {
	public ctype: chartype;
	public size: number;
	public rarity: string;
	public appearance: string;
	public speed: number = 2;
	public animation: string = "WalkAnimation";
	public model: Model | undefined;

	constructor(ctype: chartype, options?: charoptions) {
		this.ctype = ctype;
		this.size = options?.size ?? 1;
		this.rarity = options?.rarity ?? "Common";
		this.appearance = options?.appearance ?? "DefaultModel";

		this.spawnModel();
	}

	private spawnModel() {
		const template = ReplicatedStorage.WaitForChild(this.appearance) as Model;
		this.model = template.Clone() as Model;
		this.model.Parent = Workspace;

		let humanoid = this.model.FindFirstChildOfClass("Humanoid");
		if (!humanoid) {
			humanoid = new Instance("Humanoid");
			humanoid.Parent = this.model;
		}

		if (!this.model.PrimaryPart) {
			this.model.PrimaryPart = this.model.FindFirstChild("HumanoidRootPart") as BasePart;
		}

		humanoid.WalkSpeed = this.speed;
	}

	move(speed: number = 2) {}
}

export class MegaNoob extends Noob {
	constructor() {
		super(chartype.MegaNoob, { size: 2, rarity: "Rare", appearance: "MegaNoobModel" });
		this.speed = 12;
	}
}

export class NewerNoob extends Noob {
	constructor() {
		super(chartype.NewerNoob, { size: 0.8, rarity: "Uncommon", appearance: "NewerNoobModel" });
		this.speed = 12;
	}
}
