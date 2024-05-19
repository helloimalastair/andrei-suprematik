import { WorkerEntrypoint } from "cloudflare:workers";

export default class extends WorkerEntrypoint<Environment> {
	async fetch(req: Request) {
		const stub = this.env.DurableAdd.get(this.env.DurableAdd.idFromName("storage222"));
		let initinit = await stub.fetch(new URL("/?mode=initinit", req.url), req);
		console.log(await initinit.text());
		return new Response();
	}
}

export * from "./UniversalSuprematik";