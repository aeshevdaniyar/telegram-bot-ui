import Client, { Config } from "./request";
import AiModels from "./resource/aimodels";
import ChatFolder from "./resource/chatFolder";
import ChatSession from "./resource/chatSession";
import Profile from "./resource/profile";

class ApiClient {
  public client: Client;
  public profile: Profile;
  public aimodels: AiModels;
  public chatfolder: ChatFolder;
  public chatsession: ChatSession;
  constructor(config: Config) {
    this.client = new Client(config);
    this.profile = new Profile(this.client);
    this.aimodels = new AiModels(this.client);
    this.chatfolder = new ChatFolder(this.client);
    this.chatsession = new ChatSession(this.client);
  }
}

export default ApiClient;
