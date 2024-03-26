import BaseResource from "./base";

class Profile extends BaseResource {
  async retrive(customHeaders: Record<string, any> = {}): Promise<Profile> {
    const { data } = await this.client.request(
      "GET",
      "/profile",
      {},
      customHeaders
    );

    return data;
  }
}

export default Profile;
