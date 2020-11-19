import { BaseRequestOptions } from '@angular/http';
import { from } from 'rxjs';
import { TOKEN_NAME } from './auth.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const AUTH_HEADER_KEY = 'Authorization';
const AUTH_PREFIX = 'Bearer';

export class AuthRequestOptions extends BaseRequestOptions {
    headers: any;

    constructor() {
        super();

        const token = localStorage.getItem(TOKEN_NAME);
        if (token) {
            this.headers.append(AUTH_HEADER_KEY, `${AUTH_PREFIX} ${token}`);
        }
    }

}