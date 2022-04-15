import { AxiosInstance } from "axios";

export default class HttpResource {
    constructor(protected http: AxiosInstance, protected resource: string) {
    
    }

    list() {
        return this.http.get(this.resource);
    }
    
    create(data: any) {
        return this.http.post(this.resource, data)
    }

    update(id: string, data: any) {
        return this.http.patch(`${this.resource}/${id}`, data)
    }

    delete(id: string) {
        return this.http.delete(`${this.resource}/${id}`)
    }
}