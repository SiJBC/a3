export default async function http<T>(request: RequestInfo): Promise<T> {
    const response = await fetch(request)
    if (!response.ok) {
      throw new Error(await response.text())
    }
    const headers = response.headers
    const data = headers.get('content-type')?.includes('json')
      ? await response.json()
      : {}
    return data
  }

  let token = ''

export async function post<Req, Res>(path: string, body: Req): Promise<Res> {
    return await http<Res>(
      new Request(path, {
        headers: {
          ...(token && { Authorization: `Bearer ${token}` }),
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
        method: 'post',
      })
    )
  }
  export const setToken = (newToken: string) => (token = newToken)