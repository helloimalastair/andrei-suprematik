import { DurableObject } from "cloudflare:workers";

export class UniversalSuprematik extends DurableObject {
	constructor(state: DurableObjectState, env: Environment) {
		super(state, env);
		console.log("Call of Constructor!");
	}
	async fetch(_: Request) {
		return new Response("Response from Durable Object!");
	}
}