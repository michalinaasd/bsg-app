export class AppService {
  private static url: String = "https://thebetter.bsgroup.eu";

  static async signIn() {
    const response = await fetch(this.url + "/Authorization/SignIn", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        Device: {
          PlatformCode: "WEB",
          Name: "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
        },
      }),
    });
    return await response.json();
  }

  static async logIn(username: string, password: string): Promise<any> {
    const response = await fetch(this.url + "/Authorization/SignIn/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        Username: username,
        Password: password,
        Device: {
          PlatformCode: "WEB",
          Name: `7a6a86e5-356f-4795-8998-305e1b205531`,
        },
      }),
    });

    return await response.json();
  }

  static async getMediaList(token: string): Promise<MediaListModel> {
    console.log(token);
    const response = await fetch(this.url + "/Media/GetMediaList", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },

      body: JSON.stringify({
        MediaListId: 3,
        IncludeCategories: false,
        IncludeImages: true,
        IncludeMedia: false,
        PageNumber: 1,
        PageSize: 15,
      }),
    });
    return await response.json();
  }

  static async getMediaPlayInfo(
    token: string,
    MediaId: number
  ): Promise<MediaPlayInfoModel> {
    const response = await fetch(this.url + "/Media/GetMediaPlayInfo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },

      body: JSON.stringify({
        MediaId: MediaId,
        StreamType: "TRIAL",
      }),
    });
    return await response.json();
  }
}
