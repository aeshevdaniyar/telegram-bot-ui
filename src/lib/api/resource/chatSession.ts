import BaseResource from "./base";

class ChatSession extends BaseResource {
  async list(profile: number): Promise<ChatSession[]> {
    const { data } = await this.client.request(
      "GET",
      "/chatsession",
      {},
      {
        "X-UserId": profile,
      }
    );
    return data;
  }
  async create(profile: number, payload: ChatSession) {
    const { data } = await this.client.request(
      "POST",
      "/chatsession",
      payload,
      { "X-UserId": profile }
    );

    return data;
  }

  async retrive(
    customHeaders: Record<string, any> = {},
    id: string
  ): Promise<ChatSession> {
    const { data } = await this.client.request(
      "GET",
      `/chatsession/${id}`,
      {},
      customHeaders
    );

    return data;
  }
  async edit(
    customHeaders: Record<string, any> = {},
    id: string
  ): Promise<ChatSession> {
    const { data } = await this.client.request(
      "PATCH",
      `/chatsession/${id}`,
      {},
      customHeaders
    );

    return data;
  }
  delete(customHeaders: Record<string, any> = {}, id: string) {
    return this.client.request(
      "DELETE",
      `/chatsession/${id}`,
      {},
      customHeaders
    );
  }
}

export default ChatSession;
