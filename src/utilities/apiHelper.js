async function createPost(url, postData) {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    });

    console.log("response.OK ", response);
    if (!response.ok) {
      throw new Error("Error occured");
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.log("error ", error);
  }
}

async function getPost(url) {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Error occured wihle fetching data ");
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.log("error ", error);
  }
}

export { createPost, getPost };
