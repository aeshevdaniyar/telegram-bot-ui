import { AiModel } from "../types";
import BaseResource from "./base";

class AiModels extends BaseResource {
  async list(): Promise<AiModel[]> {
    const { data } = await this.client.request("GET", "aimodels");

    return data;
  }
}

export default AiModels;
