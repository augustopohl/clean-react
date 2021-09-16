import { HttpPostParams } from '@/data/protocols/http/http-post-client'
import axios from 'axios'

export class AxiosHttpClient {
  async post (params: HttpPostParams<any>): Promise<any> {
    await axios.post(params.url, params.body)
  }
}
