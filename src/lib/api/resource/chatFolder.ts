import BaseResource from "./base";

class ChatFolder extends BaseResource {
  async list(customHeaders: Record<string, any> = {}): Promise<ChatFolder[]> {
    const { data } = await this.client.request(
      "GET",
      "/chatfolder",
      {},
      customHeaders
    );

    return data;
  }

  async create(
    customHeaders: Record<string, any> = {},
    payload: { name: string }
  ): Promise<ChatFolder> {
    const { data } = await this.client.request(
      "POST",
      "/chatfolder",
      payload,
      customHeaders
    );

    return data;
  }

  async retrive(
    customHeaders: Record<string, any> = {},
    id: string
  ): Promise<ChatFolder> {
    const { data } = await this.client.request(
      "GET",
      `/chatfolder/${id}`,
      {},
      customHeaders
    );

    return data;
  }
  async edit(
    customHeaders: Record<string, any> = {},
    id: string
  ): Promise<ChatFolder> {
    const { data } = await this.client.request(
      "PATCH",
      `/chatfolder/${id}`,
      {},
      customHeaders
    );

    return data;
  }
  delete(customHeaders: Record<string, any> = {}, id: string) {
    return this.client.request(
      "DELETE",
      `/chatfolder/${id}`,
      {},
      customHeaders
    );
  }
}

export default ChatFolder;
