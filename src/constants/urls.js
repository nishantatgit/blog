const IP_ADDRESS = "13.234.204.87";
const urls = {
  POST_SERVER_URL: `http://${IP_ADDRESS}/blog/post`,
  GET_ALL_SERVER_URL: `http://${IP_ADDRESS}/blog/post`,
  GET_BLOG_BY_ID_URL: `http://${IP_ADDRESS}/blog/post/:id`,
  BASE_URL: `http://${IP_ADDRESS}`,
};

const compileUrls = function compileUrl(template, ...values) {
    let index = 0; 
    return template.replace(/:\w+/g, () => values[index++] || "");
  }

export default urls;
export { compileUrls };
