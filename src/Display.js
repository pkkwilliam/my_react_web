import React from "react";
import ApplicationComponent from "./ApplicationComponent";

const APIKEY = "vKZywb959gExXaEHSwdzdq7MfZu3Nb";
const X_MADT_APPID = "localdeal";
const X_MADT_APP_VERSION = "0.0.1";

export default class Display extends ApplicationComponent {
  state = {
    success: false,
  };

  async getSignUrl(fileName, fileType) {
    return fetch(
      `http://127.0.0.1:8081/file?contentType=${fileType}&fileName=${fileName}`,
      {
        headers: {
          APIKEY,
          XMADTAPPID: X_MADT_APPID,
          XMADTAPPVERSION: X_MADT_APP_VERSION,
        },
      }
    ).then((result) => Promise.resolve(result.json()));
  }

  onChange = async (files) => {
    console.log(files);
    const file = files[0];
    let url = await this.getSignUrl(file.name, file.type);
    fetch(url.url, {
      body: file,
      headers: {
        "Content-Type": file.type,
      },
      method: "PUT",
    })
      .then(() => {})
      .catch(() => {
        this.setState({
          success: false,
        });
      });
  };

  FileButton = () => {
    return (
      <input
        accept="image/*"
        type="file"
        onChange={(event) => this.onChange(event.target.files)}
      />
    );
  };

  render() {
    return (
      <>
        {"This is Display Component"}
        <this.FileButton />
        {("success:", this.state.success)}
      </>
    );
  }
}
