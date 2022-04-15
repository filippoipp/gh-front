import { httpRequests } from ".";
import HttpResource from "./http-resource";

const productHttp = new HttpResource(httpRequests, "/private/v1/product");

export default productHttp;