import { httpRequests } from ".";
import HttpResource from "./http-resource";

const categoryHttp = new HttpResource(httpRequests, "/private/v1/category");

export default categoryHttp;