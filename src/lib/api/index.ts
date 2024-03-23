import Client, { Config } from "./request";
import Profile from "./resource/profile";

class ApiClient {
  public client: Client;
  public profile: Profile;

  constructor(config: Config) {
    this.client = new Client(config);
    this.profile = new Profile(this.client);
  }
}

export default ApiClient;
