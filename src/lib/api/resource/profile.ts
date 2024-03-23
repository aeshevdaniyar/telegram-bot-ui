import BaseResource from "./base";

class Profile extends BaseResource {
  async retrive(customHeaders: Record<string, any> = {}): Promise<Profile> {
    const { result } = await this.client.request(
      "GET",
      "/profile",
      customHeaders
    );

    return result;
  }
}

export default Profile;
